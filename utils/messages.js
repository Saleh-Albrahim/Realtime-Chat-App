const moment = require('moment-timezone');

function formatMessage(username, text, timeZone) {
  return {
    username,
    text,
    time: moment().utcOffset(timeZone).format('h:mm a')
  };
}

module.exports = formatMessage;
