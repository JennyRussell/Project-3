const express = require('express');
// const bodyParser = require('body-parser')
// const mysql = require("mysql")
const path = require('path');
const cors = require('cors')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes/user-routes');
const sequelize = require('./config/connection');
const User = require('./models/User')
// const mysql = require("mysql")

// sequelize.authenticate()
//   .then( error => {
//     if(error) throw new Error("connected to MySQL but not working")
//     else console.log("we are connected to MySQL")
//   })

// console.log("user is", User)

// User.create({
//   first_name: "John",
//   last_name: "Doe",
//   email: "asdf@asdf.com",
//   password: "asdfasdf",
//   phone_number: "9092222222",
// })

const app = express();

const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
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
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const db = mysql.createConnection ({
//   user: "root",
//   host: "localhost",
//   pasword: "abc1234",
//   database: "forgetmenot_db"
// });


// app.post('/register', async (req, res) => {
//       const id = 1;
//       const first_name = req.body.first_name;
//       const last_name = req.body.last_name;
//       const email = req.body.email;
//       const password = req.body.password;
//       const birthdate = req.body.birthdate;
//       const phone_number = req.body.phone_number;
//       const anniversary = req.body.anniversary;
  
//         db.query(
//           "INSERT INTO user (id, first_name, last_name, email, password, birthdate, phone_number, anniversary) VALUES (?,?,?,?,?,?,?)", 
//           [id, first_name, last_name, email, password, birthdate, phone_number, anniversary], (err , result) => {
//           if (err) {
//             console.log(err)
//           } else {
//             resizeBy.send('Values add to table');
//           }
//         }
//         );

// });

// app.listen(3001,() => {
//   console.log("listening to port 3001")
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



app.use(routes);
