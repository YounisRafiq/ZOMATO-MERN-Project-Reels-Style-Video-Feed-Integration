const app = require('./src/app');
const connectDb = require('./src/db/db');
require('dotenv').config('./.env');

connectDb();

app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

