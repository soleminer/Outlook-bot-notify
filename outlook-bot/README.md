# Outlook Bot

This project is an Outlook bot that automatically sends a notification message when a new email is received. It leverages the Outlook API to monitor incoming messages and trigger notifications accordingly.

## Project Structure

```
outlook-bot
├── src
│   ├── bot.ts
│   ├── services
│   │   └── notificationService.ts
│   ├── utils
│   │   └── outlookHelper.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd outlook-bot
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Configure your Outlook API credentials in the environment variables or a configuration file.
2. Run the bot:
   ```
   npm start
   ```

## Features

- Monitors incoming emails.
- Sends notifications for new messages.
- Utility functions for interacting with the Outlook API.

## Contributing

Feel free to submit issues or pull requests to improve the bot's functionality.