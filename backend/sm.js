//generating an edi from json as per stedi dictated format
const guideId = `01H3V8Q43DXRN9BA77YDJVW50G`
const apiKey = `PfWGUH3.zdHLXIa57uEZL5ZluM9XeLPR`
const envelope = {
  interchangeHeader: {
    senderQualifier: "ZZ",
    senderId,
    receiverQualifier: "14",
    receiverId,
    date: format(documentDate, "yyyy-MM-dd"),
    time: format(documentDate, "HH:mm"),
    controlNumber,
    usageIndicatorCode,
  },
  groupHeader: {
    functionalIdentifierCode,
    applicationSenderCode: "WRITEDEMO",
    applicationReceiverCode: "072271711TMS",
    date: format(documentDate, "yyyy-MM-dd"),
    time: format(documentDate, "HH:mm:ss"),
    controlNumber,
  },
};
// Translate the Guide schema-based JSON to X12 EDI
const translation = await translateJsonToEdi(mapResult.content, guideId, envelope);

// const axios = require("axios");

// const apiKey = process.env.STEDI_API_KEY;

// async function jsonToX12(guideId, document, envelope) {
//   if (typeof document === "string") {
//     document = JSON.parse(document);
//   }

//   const response = await axios({
//     method: "post",
//     url: "https://edi-translate.us.stedi.com/2022-01-01/x12/from-json",
//     data: {
//       guideId: guideId,
//       input: document,
//       envelope: envelope,
//     },
//     headers: { Authorization: `Key ${apiKey}` },
//   });

//   return response.data;
// }