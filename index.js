const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
/* Models */

/* Connect mongoose to our MongoDB on mLab*/
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

/* Auth Services */
// require('./services/passportGoogle');

/* Auth Routes */
// require('./routes/authGoogleRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.get('/', (req, res) => {
    res.send('Hello There');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App Listening on PORT 5000');
});
