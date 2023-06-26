const dt = require('./data')
const apiKey = `PfWGUH3.zdHLXIa57uEZL5ZluM9XeLPR`
const guideId = `01H3V8Q43DXRN9BA77YDJVW50G`
const axios = require("axios");

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
    // const guideJson = response.data.output;
    // console.log(JSON.stringify(guideJson));
    console.log(response.data)
  }).catch((error) => {
    console.error(error);
  }).finally(console.log(`done`))
  