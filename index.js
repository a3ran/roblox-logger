const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1510928997561667624/yAojWif91KSBJmE6WCM5KWTRYOrSVTTzJbmQvXFJWI9zTXz5wkJBzK9wiEllntA0XXd1"; // PASTE YOUR DISCORD LINK HERE

app.post('/log', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const { username, userId } = req.body;
    await axios.post(DISCORD_WEBHOOK, {
        content: `New Player Joined!\nUsername: ${username}\nID: ${userId}\nIP: ${ip}`
    });
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Detective is listening...'));
