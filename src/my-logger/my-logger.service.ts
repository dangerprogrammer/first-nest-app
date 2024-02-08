import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';

@Injectable()
class MyLoggerService extends ConsoleLogger {
    async logToFile(entry: any) {
        const formattedEntry = `${Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'America/Sao_Paulo'
        }).format(new Date())}\t${entry}\n`;

        try {
            if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs')))
                await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'));

            await fsPromises.appendFile(path.join(__dirname, '..', '..', 'logs', 'myLogFile.log'), formattedEntry);
        } catch (err) {
            if (err instanceof Error) console.error(err.message);
        }
    }

    log(message: any, context?: string) {
        const entry = `${context}\t${message}`;

        this.logToFile(entry);
        super.log(message, context);
    }

    error(message: any, stackOrContext?: string) {
        const entry = `${stackOrContext}\t${message}`;

        this.logToFile(entry);
        super.error(message, stackOrContext);
    }
}

export { MyLoggerService };