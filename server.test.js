const app = require('./server');
const server = require('./server');





var io = require('socket.io-client')
  , io_server = require('socket.io').listen(3001);

describe('socket.io', function() {

  var socket;

  beforeEach(function(done) {
    // Setup
    socket = io.connect('http://localhost:3001', {
      'reconnection delay' : 0
      , 'reopen delay' : 0
      , 'force new connection' : true
      , transports: ['websocket']
    });

    socket.on('connect', () => {
      done();
    });

    socket.on('disconnect', () => {
      // console.log('disconnected...');
    });
  });

  afterEach((done) => {
    // Cleanup
    if(socket.connected) {
      socket.disconnect();
    }
    io_server.close();
    done();
  });

  it('should communicate', (done) => {
    // once connected, emit Hello World
    io_server.emit('echo', 'Hello World');

    socket.once('echo', (message) => {
      // Check that the message matches
      expect(message).toEqual('Hello World');
      done();
    });

    io_server.on('connection', (socket) => {
      expect(socket).toBeNull();
    });
  });

});
