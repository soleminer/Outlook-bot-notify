export interface Message {
    id: string;
    subject: string;
    sender: string;
    receivedTime: Date;
    body: string;
}

export interface Notification {
    title: string;
    message: string;
    timestamp: Date;
}