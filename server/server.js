const express = require("express");
// const bodyParser = require('body-parser')
// const mysql = require("mysql")

const path = require('path');
const cors = require('cors')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes/user-routes');
const sequelize = require('./config/connection');
const User = require('./models/User')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const http = require("http");
const Video = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const users = {};

io.on("connection", (socket) => {
  if (!users[socket.id]) {
    users[socket.id] = socket.id;
  }
  socket.emit("yourID", socket.id);
  io.sockets.emit("allUsers", users);
  socket.on("disconnect", () => {
    delete users[socket.id];
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("hey", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(8000, () => console.log("server is running on port 8000"));

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(pino);


const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(express.static(path.join(__dirname, "public")));

app.use('/api',routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
