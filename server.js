const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
   secret: 'hydra spectre cobra',
   cookie: {
      maxage: 30 * 10000
   },
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
      db: sequelize
   })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// connect to db and server
sequelize.sync({ force: true }).then(() => {
   app.listen(PORT, () => console.log('Now listening on ' + PORT));
});