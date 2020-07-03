const formatMessage = require('./utils/messages');
const moment = require('moment');
const date = Date.UTC();
const text = "Hello everyone"
const username = "John";
//"time" for test should be current time on testers clock
//for example if the testers computer time is currently 6:28 pm the time that should be inputted in the test is "6:28 pm"
test("return username, text and time message was sent", ()=>{
    expect(formatMessage(username, text)) .toBe({"text": "Hello everyone", "time": date, "username": "John"})
});
