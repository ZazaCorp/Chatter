//users.js unit test code
const { userLeave, getRoomUsers, userJoin, getCurrentUser } = require('./utils/users.js');
  const users = [];
  const user = userJoin(5, 'ekquashie', 'PHP');
  test('Add user to chat', () => {
    expect(users.push(user))
  });

  test('get current user', () => {
    user.id == getCurrentUser(5)
    expect(users.find(user => user.id === 5));
  });

  test('get users in room', () => {
    getRoomUsers('Javascript');
    expect(users.filter(user => user.room === 'Javascript'));
  });
