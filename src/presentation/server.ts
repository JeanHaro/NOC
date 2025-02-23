import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log('Server started...');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://localhost:3000'
                // Tenemos que proporcionarle argumentos al callback
                new CheckService(
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).execute(`${url}`);
            }
        );

        CronService.createJob(
            '*/2 * * * * *',
            () => {
                const date = new Date();
                console.log('2 seconds', date);
            }
        );

        CronService.createJob(
            '*/3 * * * * *',
            () => {
                const date = new Date();
                console.log('3 seconds', date);
            }
        );
    }   
}