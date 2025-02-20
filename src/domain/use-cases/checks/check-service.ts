interface CheckServiceUseCase {
    // Quiero que me retorne una promesa con un booleano
    execute(url: string): Promise<boolean>
}

export class CheckService implements CheckServiceUseCase {
    // Todo lo que quiero que tenga mi caso de uso
    async execute (url: string): Promise<boolean> {
        try {
            //  Esto va hacer la petición http, va a revisar el servicio basado en la url y en la request tendremos el ok
            const request = await fetch(url);

            // Si no esta ok
            if (!request.ok) {
                throw new Error(`Error on check service ${url}`);
            }

            console.log(`${url} is ok`);
            return true;
        } catch (error) {
            console.log(`${error}`);

            return false;
        }
    }
}