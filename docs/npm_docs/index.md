---
slug: rbmodule
title: ReviewBots.js
sidebar_label: ReviewBots.js
---

<div align="center">
  <p>
    <a href="https://nodei.co/npm/infinityapi.js/"><img src="https://nodei.co/npm/reviewbots.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

The official NPM Module for interacting with the Review Bots API

---

## Installation
`npm i reviewbots.js@latest`

or

`npm i reviewbots.js --save`

---

## GET Review Info

### Constructor

```
ReviewBots()
```

--- 

### Example GET Review
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const RB = require("reviewbots.js")
const reviews = new RB()
 
client.on("message", message => { 
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }
     if(message.content == (prefix + "review")){
        reviews.viewReview(client.user.id, 'SOME_USER_ID', function(data){
        let embed = new MessageEmbed()
        .setTitle(`Review by: ${data.userID}`)
        .setDescription(`${data.content}`)
        .addField("Likes", `${data.likes}`)
        .addField("Dislikes", `${data.dislikes}`)

        message.channel.send(embed)
        })
    }
})
 
 
client.login("token")
```

--- 
