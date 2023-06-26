exports.jsonToX12(guideId, document, envelope) {
    if (typeof document === "string") {
      document = JSON.parse(document);
    }
  
    const response = await axios({
      method: "post",
      url: "https://edi-translate.us.stedi.com/2022-01-01/x12/from-json",
      data: {
        guideId: guideId,
        input: document,
        envelope: envelope,
      },
      headers: { Authorization: `Key ${apiKey}` },
    });
  
    return response.data;
  }