require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
//const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cors = require('cors');
/* Models */
require('./models/User');
require('./models/Groups');
require('./models/Projects');
require('./models/Followers');
require('./models/Comments');
require('./models/Audio');
/* Connect mongoose to our MongoDB on mLab*/
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(bodyParser.json());
app.use(cors());
/* Auth Services */
// require('./services/passportGoogle');

/* Auth Routes */
require('./routes/userRoutes')(app);
require('./routes/commentsRoutes')(app);
require('./routes/groupsRoutes')(app);
require('./routes/projectsRoutes')(app);
require('./routes/followersRoutes')(app);
require('./routes/workspaceRoutes')(app);
require('./routes/collaboratorsRoutes')(app);
require('./routes/inviteRoutes')(app);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     const path = require('path');
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// app.get('/login', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
//app.route('*', express.static('client/build'));
app.get('/login', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});
app.use(express.static('client/build'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App Listening on PORT 5000');
});
