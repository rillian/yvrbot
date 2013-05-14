var irc = require('irc');
var bot = new irc.Client('irc.mozilla.org', 'yvrbot', {
  channels: ['#vancouver'],
  secure: true,
  port: 6697
});

bot.addListener('message', function(from, to, message) {
  if (message.indexOf('taco') > -1) {
    bot.say(to, 'taco taco');
  }
});
