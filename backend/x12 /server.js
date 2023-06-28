const dt = require('./data.js')
const apiKey = `I5voCCM.0NXUF8YqWjzkXAc6FrAiEDEb`
const guideId = `01H3XNQPDW5QTFQSQ1SRANPSAZ`
const axios = require('axios')


axios.request({
    method: "POST",
    url: "https://edi-translate.us.stedi.com/2022-01-01/x12/from-json",
    data: {
      guideId: guideId,
      input: dt.data,
      envelope: dt.envelope,
    },
    headers: { Authorization: `Key ${apiKey}` },
  }).then((response) => {
    console.log(response.data)
  }).finally(console.log(`done`))
  