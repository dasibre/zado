const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const axios = require("axios");
const cors = require("cors");

// Use Firebase config to access API key
// const GREAT_SCHOOLS_API_KEY = "";

exports.fetchschooldata = onRequest((req, res) => {

  corsHandler(req, res, () => {
  const { state, city } = req.query;

  if (!state || !city) {
    return res.status(400).send({ error: "State and city parameters are required." });
  }

  try {
    const response =  axios.get(`https://gs-api.greatschools.org/v2/schools`, {
      params: { state, city },
      headers: {
        "Content-Type": "application/json",
        "x-api-key": GREAT_SCHOOLS_API_KEY,
      },
    });

    const schools = Array.isArray(response.data.schools) ? response.data.schools : [];
    res.status(200).send({ schools });
  } catch (error) {
    logger.error("Error fetching school data:", error);

    const status = error.response?.status || 500;
    const message = error.response?.data || "Internal Server Error";

    res.status(status).send({ error: message });
  }
});
});