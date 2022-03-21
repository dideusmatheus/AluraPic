//10BBB- criar o shape do error e depois volte para o server-log.service.ts
export interface ServerLog { 
    message: string;
    url: string;
    userName: string;
    stack: string;

}