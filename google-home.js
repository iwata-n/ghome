
exports.say = function(text) {
const googlehome = require('google-home-notifier')
const language = 'ja';
  googlehome.device('Google-Home', language);

  // FIXME IP直打ちじゃないと反応しない
  googlehome.ip("192.168.0.17");
  
  googlehome.notify(text, function(res) {
    console.log(res);
  });
}
