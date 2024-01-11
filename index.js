const client = require('discord-rich-presence')('1187307012665651200');
 
client.updatePresence({
  details: 'Join epilogue.social, the new (better) social media platform',
  startTimestamp: Date.now(),
  largeImageKey: 'img',
  instance: true,
  buttons: [
    {
        label: "Website",
        url: "https://epilogue.social/"
    }
  ]
});
