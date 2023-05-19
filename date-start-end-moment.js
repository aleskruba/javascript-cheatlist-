const moment = require('moment');

let startOfLessonDate = moment();
startOfLessonDate.set({
  year: 2023,
  month: 4, // May is represented by 4
  date: 20,
  hour: 14,
  minute: 30,
  second: 0
});

let unixTimestampOfstartOfLessonDate = startOfLessonDate.valueOf();
let unixTimestampOfstartOfLessonDateUnix = Math.floor(unixTimestampOfstartOfLessonDate / 1000);

console.log('Start of the lesson:', startOfLessonDate.format('DD:MM:YYYY HH:mm'), ' Unix:', unixTimestampOfstartOfLessonDateUnix);

const oneHour = 60 * 60 * 1000;

let endOfLessonTimestamp = unixTimestampOfstartOfLessonDate + oneHour;
let endOfLessonTimestampUnix = Math.floor(endOfLessonTimestamp / 1000);
console.log('End of the lesson:', moment(endOfLessonTimestamp).format('DD:MM:YYYY HH:mm'), ' Unix:', endOfLessonTimestampUnix);

console.log('Sending message when the lesson finishes...');

let currentTimestamp = moment().valueOf();
let currentTimestampUnix = Math.floor(currentTimestamp / 1000);

if (currentTimestamp >= endOfLessonTimestamp) {
  console.log('The lesson has finished. Please confirm it.');
}

if (currentTimestampUnix >= endOfLessonTimestampUnix) {
  console.log('The lesson has finished. Please confirm it.');
}
