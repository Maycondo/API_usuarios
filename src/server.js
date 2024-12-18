const app = require('./app.js')
require('dotenv').config();

const port =  7000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})