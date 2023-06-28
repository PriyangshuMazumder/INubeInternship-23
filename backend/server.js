var express = require('express');
var fs = require('fs')
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
const {adjustData} = require('./handleData.js');
// const dt = require('./x12/data.js')
// const apiKey = `I5voCCM.0NXUF8YqWjzkXAc6FrAiEDEb`
// const guideId = `01H3XNQPDW5QTFQSQ1SRANPSAZ`
const axios = require('axios')


app.post('/tofile', function(request, response){
  console.log(request.body);      // your JSON
  const changedData = adjustData(request.body)
  const filedata = JSON.stringify(changedData)
  fs.writeFileSync('data1.json', filedata);
  response.send('Saved');    // echo the result back
});

app.get('/toform',function(request, response){
    var obj = {};
    fs.readFile('data.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      response.json(data);
    });
})

// app.post('/toXDI', function(request,response){
//   console.log('Making XDI');
//   axios.request({
//     method: "POST",
//     url: "https://edi-translate.us.stedi.com/2022-01-01/x12/from-json",
//     data: {
//       guideId: guideId,
//       input: dt.data,
//       envelope: dt.envelope,
//     },
//     headers: { Authorization: `Key ${apiKey}` },
//   }).then((response) => {
//     console.log(response.data);
//     const xdi = response.data.output
//     fs.writeFileSync('./xdi.txt',xdi)
//   }).finally(console.log(`done`))
// })
// app.get('/toform', fucntion)
app.listen(8000);