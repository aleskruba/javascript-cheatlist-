const timestampInMilliseconds = 1693000800000;

const date = new Date(timestampInMilliseconds);

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
// Months are zero-indexed, so add 1
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day} ${hours}: ${minutes}`

console.log(formattedDateTime);


const dateString = "2023-08-25T22:00:00.000Z";
const unixTimestampMilliseconds = Date.parse(dateString);
console.log(unixTimestampMilliseconds)

const unixTimestampSeconds = unixTimestampMilliseconds / 1000;
console.log(unixTimestampSeconds);

/// convert back 
const startDate = new Date('2023-08-29T00:00:00');
        const currentDate = new Date();
        console.log(currentDate);
        
        const unixFormat = Date.parse(currentDate); // Unix timestamp in milliseconds
        console.log(unixFormat);

        const originalCommonFormat =  new Date(unixFormat).toISOString()
        
        console.log(originalCommonFormat);

