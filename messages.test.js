const formatMessage = require('./utils/messages');
const moment = require('moment');
const now = moment();
const text = "Hello everyone"
const username = "John";
//"time" for test should be current time on testers clock
//for example if the testers computer time is currently 6:28 pm the time that should be inputted in the test is "6:28 pm"
test("return username, text and time message was sent", ()=>{
    expect(formatMessage(username, text)) .toStrictEqual({"text": "Hello everyone", "time": now.format('h:mm a'), "username": "John"})
}); 
