class NotificationService {
    sendNotification(email: string, subject: string, body: string): void {
        const notificationMessage = this.formatNotification(email, subject, body);
        // Logic to send the notification message (e.g., using a messaging service)
        console.log(notificationMessage);
    }

    private formatNotification(email: string, subject: string, body: string): string {
        return `New Email Received:\nFrom: ${email}\nSubject: ${subject}\nBody: ${body}`;
    }
}

export default NotificationService;