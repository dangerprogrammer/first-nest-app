import { Catch, ArgumentsHost, HttpStatus, HttpException } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Request, Response } from "express";
import { MyLoggerService } from "./my-logger/my-logger.service";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

type MyResponseObj = {
    statusCode: number,
    timestamp: string,
    path: string,
    response: string | object
};

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    private readonly logger = new MyLoggerService(AllExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const myResponseObj: MyResponseObj = {
            statusCode: 200,
            timestamp: new Date().toISOString(),
            path: request.url,
            response: ''
        };

        myResponseObj.statusCode = (exception instanceof HttpException) ?
            exception.getStatus() : (exception instanceof PrismaClientValidationError) ?
            422 : HttpStatus.INTERNAL_SERVER_ERROR;

        myResponseObj.response = (exception instanceof HttpException) ?
        exception.getResponse() : (exception instanceof PrismaClientValidationError) ?
        exception.message.replaceAll(/\n/g, '') : 'Internal Server Error';

        response.status(myResponseObj.statusCode).json(myResponseObj);

        this.logger.error(myResponseObj.response, AllExceptionsFilter.name);

        super.catch(exception, host);
    }
}