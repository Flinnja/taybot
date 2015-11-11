var dotenv = require('dotenv')
dotenv.load()
var Slack = require('slack-client')

slackToken = process.env.SLACK_KEY
autoRecconect = true
autoMark = true


tayBot = new Slack(slackToken, autoRecconect, autoMark)

tayBot.on('open', function(){
  console.log("Connected to "+tayBot.team.name+" as "+tayBot.self.name)
})

tayBot.on('message', function(message){
  channel = tayBot.getChannelGroupOrDMByID(message.channel)
  user = tayBot.getUserByID(message.user)
  if(message.text.includes('tay')){

    //===============ADD COMMANDS BENEATH THIS============

    if(message.text.includes("hate")){
      response = "Haters gonna hate, hate, hate, hate, hate."
    }

    else if(message.text.includes("play")){
      response = "Players gonna play, play, play, play play."
    }

    else if(message.text.includes("fake")){
      response = "Fakers gonna fake, fake, fake, fake, fake."
    }

    else if(message.text.includes("heartbreak")){
      response = "Heartbreakers gonna break, break, break, break, break."
    }

    else if(message.text.includes("paint")){
      var colour = null
      if(message.text.includes('red')) colour = 'red'
      else if(message.text.includes('orange')) colour = 'orange'
      else if(message.text.includes('yellow')) colour = 'yellow'
      else if(message.text.includes('green')) colour = 'green'
      else if(message.text.includes('blue')) colour = 'blue'
      else if(message.text.includes('purple')) colour = 'purple'
      else if(message.text.includes('pink')) colour = 'pink'
      if(colour){
        response = 'Painting it '+colour+' for you'
      }
      else response = 'What colour would you like? I can paint it red, orange, yellow, green, blue, purple or pink!'
    }

    else if(message.text.includes('dance')){
      response = 'I make the moves up as I go!'
    }

    else if(message.text.includes('wander')){
      response = "I'm off for a stroll then!"
    }

    else if(message.text.includes('stop')){
      response = "Can't stop, wont stop moving..."
    }

    else{response = "All you had to do was say something I'd understand..."}
    channel.send(response)
  }
})

tayBot.on('error', function(err){
  console.log("Error", err)
})

tayBot.login()
