const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.send("Hello world!!!");
});

app.listen(PORT, () => {
    // console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening on port ${chalk.green(PORT)}`);
});