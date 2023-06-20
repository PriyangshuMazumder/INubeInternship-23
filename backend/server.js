var express = require('express');
var fs = require('fs')
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/tofile', function(request, response){
  console.log(request.body);      // your JSON
  const filedata = JSON.stringify(request.body)
  fs.writeFileSync('data.json', filedata);
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
// app.get('/toform', fucntion)
app.listen(8000);