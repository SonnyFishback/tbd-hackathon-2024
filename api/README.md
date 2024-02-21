# Backend:

This is our serverless service that will be used for any serverless cron jobs, functions or deployment of custom AWS resources.

We are planning to integrate API's of platforms like Linkedin, Glass Door and other professional tech platforms in order to
aggregate, validate and consume job related data on the web.

We'd only run these processes to run at a scheduled time or when triggered by PUB/SUB, Queues or RSS Feeds. This is where the serverless framework comes in handy.

I created [a repository walking on getting started with the serverless framework.](https://github.com/SonnyFishback/introduction-to-serverless-framework) Take a look if you are interested.

## Requirements:

- Serverless Framework
- Node.js
- PNPM
- Access to AWS account.

## Getting Started:

1. Install dependencies:
```bash
pnpm install
```
2. Install serverless plugins:
```bash
serverless plugin install *plugin*
```

3. Configure environment variables
```
cp ./backend/example.env ./backend/.env
```

4. Deploy your application to the cloud:
```bash
serverless deploy -s "your name OR stage ie. development"
```