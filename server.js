var irc = require('irc');
var bot = new irc.Client('irc.mozilla.org', 'yvrbot', {
  channels: ['#vancouver'],
  secure: true,
  port: 6697
});

bot.addListener('message', function(from, to, message) {
  if (message.indexOf('taco') > -1) {
    bot.say(to, 'taco taco');
    require('util').log(bot.nick + " heard talk of tacos.");
  }
  if (message.indexOf(bot.nick) == 0 &&
      message.indexOf('source') > -1) {
        bot.say(to, 'all I know is https://github.com/rillian/yvrbot/');
    require('util').log(bot.nick + " was asked about source.");
  }
});
