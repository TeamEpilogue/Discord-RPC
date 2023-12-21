const client = require('discord-rich-presence')('1187307012665651200');
 
client.updatePresence({
  details: 'Coding The Website',
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