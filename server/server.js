const express = require('express');
// const bodyParser = require('body-parser')
// const mysql = require("mysql")
const path = require('path');
const cors = require('cors')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes/user-routes');
const sequelize = require('./config/connection');
// const User = require('./models/User')

// sequelize.authenticate()
//   .then( error => {
//     if(error) throw new Error("connected to MySQL but not working")
//     else console.log("we are connected to MySQL")
//   })

// console.log("user is", User)

// User.create({
//   first: "John",
//   last: "Doe",
//   email: "asdf@asdf.com",
//   password: "asdfasdf",
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
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// app.post('/api/register', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       password: req.body.password,
//       birthdate: req.body.birthdate,
//       phoneNumber: req.body.phoneNumber,
//       anniversary: req.body.anniversary,

//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// app.get('/test', (req, res) => {
//   let sql = 'SELECT * FROM register';
//   database.query(sql,(err,result) =>{
// if (err) {
//   res.status(400).send(err);
//   return;
// }
// if (result.length) res.json(result);
// else res.json({});
//   })
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});





app.use(routes);

// // app.use(cors());
// // app._router(express.json())
// // app.use(bodyParser.urlencoded({ extended: true }));


// app.post("/api/insert", (req, res) => {

  
// const first = req.body.last
// const last = req.body.first

//   const sqlInsert = "INSERT INTO reqister (first, last) VALUES (?,?)"
// db.query(sqlInsert, [first, last], (err, result) => {
//   console.log(result)
// })
// });

// app.listen(PORT, () => {
//   console.log(`listening to ${PORT}`)
// })



// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });