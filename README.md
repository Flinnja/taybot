# taybot
Because Taylor Swift isn't in your slack teams (yet)
##Usage
1. Clone this repository down somewhere
2. Run `npm install`
3. Create a new bot for your slack team at https://YOURTEAM.slack.com/services/new/bot
4. Create a .env file based on .env-example and paste in your slack bot API token
5. Run index.js on a server, or use `npm run devstart` to run using nodemon for testing new changes

## Adding commands
It is pretty easy to add your own commands for your tayBot. Simply add a new conditional after index.js:21 using the following form:
```JavaScript
    if(message.text.includes("YOUR KEYWORDS")){
      response = "DESIRED RESPONSE"
    }
```
If you want to make some more complex responses, try logging the message object to see what you can access. You can also check out the examples at https://github.com/slackhq/node-slack-client which this bot uses, although it is currently not very well documented.
##Notes
Current version is actually taken from a slack bot which was made to control a sphero, so some of the commands might not seem very sensible. Then again, this kind of bot isn't supposed to be very sensible anyway.
There plans to move all of the commands into a separate file to make the whole thing easier to read.
