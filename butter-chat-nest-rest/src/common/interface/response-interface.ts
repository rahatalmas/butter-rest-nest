export interface ResponseInterfaceProps {
    message: string;
    status?: string;
    data?: any;
    accessToken?: string;
}

export class ResponseInterface {
    message: string;
    status?: string;
    data?: any;
    accessToken?: string;

    constructor({ message, status, data, accessToken }: ResponseInterfaceProps) {
        this.message = message;
        this.status = status;
        this.data = data;
        this.accessToken = accessToken;
    }
}
