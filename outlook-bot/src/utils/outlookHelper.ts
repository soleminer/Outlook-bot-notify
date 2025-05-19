import { Client } from '@microsoft/microsoft-graph-client';
import { Message } from '../types';

export const getNewMessages = async (client: Client): Promise<Message[]> => {
    const response = await client.api('/me/messages').filter("isRead eq false").get();
    return response.value;
};

export const formatMessage = (message: Message): string => {
    return `New message from: ${message.sender.emailAddress.name}\nSubject: ${message.subject}\nReceived: ${message.receivedDateTime}`;
};