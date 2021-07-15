const express = require('express');
// const bodyParser = require('body-parser')
// const mysql = require("mysql")
const path = require('path');
const cors = require('cors')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes/api-routes');
const sequelize = require('./config/connection');



const app = express();

const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



