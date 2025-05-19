import { NotificationService } from './services/notificationService';
import { getNewMessages } from './utils/outlookHelper';

const notificationService = new NotificationService();

const initializeBot = () => {
    // Set up event listener for new messages
    setInterval(async () => {
        const newMessages = await getNewMessages();
        if (newMessages.length > 0) {
            newMessages.forEach(message => {
                notificationService.sendNotification(message);
            });
        }
    }, 5000); // Check for new messages every 5 seconds
};

initializeBot();