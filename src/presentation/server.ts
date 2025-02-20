import { CronJob } from 'cron';

export class Server {
    static start() {
        console.log('Server started...');

        const job = new CronJob(
            // Se coloco para 2 segundos
            '*/2 * * * * *', // cronTime
            () => {
                // Se ejecutara cada 2 segundos
                const date = new Date();
                console.log('2 second', date);
            }, // onTick
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );

        job.start();
    }
}