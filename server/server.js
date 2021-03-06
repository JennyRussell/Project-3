const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const apiRoutes = require('./routes/api-routes');
const sequelize = require('./config/connection');
const morgan = require ('morgan');
// const HTMLRoutes = require ('./routes/html-routes')
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: true,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));
app.use(session(sess));
app.use('/api',apiRoutes);
// app.use('/',HTMLRoutes);
app.use(express.static(path.join(__dirname, 'public')));
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
