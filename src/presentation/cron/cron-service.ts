// Ahora si este paquete falla podemos buscar otra alternativa para aplicar cambios
import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void; // Es el callback que queremos ejecutar

export class CronService {
    // cronTime - tiempo
    // onTick - es lo que se hará cada que se emita un tick
    static createJob (cronTime: CronTime, onTick: OnTick): CronJob {
        const job = new CronJob(cronTime, onTick);

        job.start();

        return job;
    }
}