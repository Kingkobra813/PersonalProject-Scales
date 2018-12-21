const app = require("./app");
const Auth0Strategy = require("passport-auth0");

const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

const strategy = new Auth0Strategy(
  {
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "/login",
    scope: "openid email profile"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get("db");

    db.get_user([profile.id]).then(results => {
      let user = results[0];

      if (user) {
        return done(null, user);
      } else {
        db.create_user([profile.nickname, profile.id])
          .then(results => {
            let user = results[0];
            return done(null, user);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
    return done(null, profile);
  }
);

module.exports = strategy;
