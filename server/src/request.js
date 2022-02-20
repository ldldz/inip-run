const express = require('express');
const router = express.Router();
const request = require('request');
const converter = require('xml-js');
require("dotenv").config({path: '../.env'});

const url = 'http://apis.data.go.kr/6280000/busArrivalService/getAllRouteBusArrivalList';
let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + process.env.API_KEY; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('bstopId') + '=' + encodeURIComponent('164000396'); // 인입1출

router.get('/', (req, res) => {
    request({
        url: url + queryParams,
        method: 'GET'
    },
    (error, response, body) => {
        const json = converter.xml2js(body, {compact: true, spaces: 4}).ServiceResult.msgBody.itemList;
        res.send(json);
    }
    );
});

module.exports = router;