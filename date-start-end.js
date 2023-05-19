let startOfLessonDate = new Date();
startOfLessonDate.setFullYear(2023);
startOfLessonDate.setMonth(4); // May is represented by 4
startOfLessonDate.setDate(17);
startOfLessonDate.setHours(14);
startOfLessonDate.setMinutes(30);
startOfLessonDate.setSeconds(0);

let unixTimestampOfstartOfLessonDate = startOfLessonDate.getTime();
let unixTimestampOfstartOfLessonDateUnix = Math.floor(unixTimestampOfstartOfLessonDate / 1000);

console.log('Start of the lesson:', startOfLessonDate.toLocaleString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }), ' Unix:', unixTimestampOfstartOfLessonDateUnix);

const oneHour = 60 * 60 * 1000;

let endOfLessonTimestamp = unixTimestampOfstartOfLessonDate + oneHour;
let endOfLessonTimestampUnix = Math.floor(endOfLessonTimestamp / 1000);
console.log('End of the lesson:', new Date(endOfLessonTimestamp).toLocaleString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }), ' Unix:', endOfLessonTimestampUnix);

console.log('Sending message when the lesson finishes...');

let currentTimestamp = Date.now();
let currentTimestampUnix = Math.floor(currentTimestamp / 1000);

if (currentTimestamp >= endOfLessonTimestamp) {
  console.log('The lesson has finished. Please confirm it.');
}

if (currentTimestampUnix >= endOfLessonTimestampUnix) {
  console.log('The lesson has finished. Please confirm it.');
}
