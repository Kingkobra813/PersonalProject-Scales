require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const massive = require("massive");
const cors = require("cors");
const bodyParser = require("body-parser");
const strategy = require(`./strategy`);
const app = require("./app");
const controller = require("./controller");

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "sup dude",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/main",
    failureRedirect: "/login",
    failureFlash: false
  })
);

app.get("/me", (req, res, next) => {
  req.session.user = req.user;
  if (!req.user) {
    res.sendStatus(403);
  } else {
    // req.user === req.session.passport.user
    // console.log(req.user, 'req.user!!!!!!!!!!')
    //console.log(req.session.passport.user);
    res.status(200).send(JSON.stringify(req.session.user, null, 10));
  }
});

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));
app.get("/main", controller.sendUser);
app.post("/saved", controller.saveScale);
app.get("/saved", controller.getSaved);
app.delete("/saved/:id", controller.deleteSaved);
app.get("/users", controller.getUser);
// app.post('/users', controller.createUser)

app.listen(3005, () => {
  console.log("Yep PP we are Listening on 3005");
});
