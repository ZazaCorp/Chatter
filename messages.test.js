const formatMessage = require('./utils/messages');
const moment = require('moment');
const text = "Hello everyone"
const username = "John";
test("return username, text and time message was sent", ()=>{
    expect(formatMessage(username, text)) .toStrictEqual({"text": "Hello everyone", "time": "2:41 pm", "username": "John"})
});