
export class Alert {

    //29BB- chamar no construtor, depois vamos para alert.service.ts
    constructor(public readonly alertType: AlertType, public readonly message: string){}

}

//29AA- criar o enum, no caso é a criação de uma variavel
export enum AlertType {

    SUCCESS,
    WARNING,
    DANGER,
    INFO
}
