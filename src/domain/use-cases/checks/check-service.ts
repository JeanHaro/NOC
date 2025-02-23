interface CheckServiceUseCase {
    // Quiero que me retorne una promesa con un booleano
    execute(url: string): Promise<boolean>
}

// Esto es lo que nosotros vamos a hacer si todo sale bien
type SuccessCallBack = () => void;
// Si hay un error
type ErrorCallBack = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
    // Inyectamos las dependencias
    constructor (
        private readonly successCallBack: SuccessCallBack,
        private readonly errorCallBack: ErrorCallBack
    ) { }

    // Todo lo que quiero que tenga mi caso de uso
    async execute (url: string): Promise<boolean> {
        try {
            //  Esto va hacer la petición http, va a revisar el servicio basado en la url y en la request tendremos el ok
            const request = await fetch(url);

            // Si no esta ok
            if (!request.ok) {
                throw new Error(`Error on check service ${url}`);
            }

            this.successCallBack();

            return true;
        } catch (error) {
            console.log(`${error}`);

            this.errorCallBack(`${error}`);

            return false;
        }
    }
}