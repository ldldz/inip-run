const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./request.js');

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.use(cors());

app.use('/api', router);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
})

app.listen(PORT, () => {
    console.log('Server is running!!');
})
