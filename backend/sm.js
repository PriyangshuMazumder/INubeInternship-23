
const axios = require('axios')
const fs = require('fs')

apiKey = `dW3on7f.u9acyWuxCfawGt75pIz0BjVO`
guideId = `01H39FMGYXC6JD04Z54GHENK95`
envelope = ``

export default async function jsonToX12(guideId, data, envelope) {
    fs.readFile('data.json', 'utf8', function (err, data) {
        if (err) throw err;
        })
    if (typeof data === "string") {
        data = JSON.parse(data);
    }

  const response = await axios({
    method: "post",
    url: "https://edi-translate.us.stedi.com/2022-01-01/x12/from-json",
    data: {
      guideId: guideId,
      input: data,
      envelope: envelope,
    },
    headers: { Authorization: `Key ${apiKey}` },
  });

  console.log(response.data);
}