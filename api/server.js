// Load environment variables
require("dotenv").config();

// Import necessary modules
const express = require("express");
const axios = require("axios");

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5001;

const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY;
const PRINTIFY_SHOP_ID = process.env.PRINTIFY_SHOP_ID;

app.get("/api/printify/products", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.printify.com/v1/shops/${PRINTIFY_SHOP_ID}/products.json`,
      {
        headers: {
          Authorization: `Bearer ${PRINTIFY_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Data:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
      res.status(500).send(error.response.data);
    } else if (error.request) {
      console.error("Request:", error.request);
      res.status(500).send("No response received from Printify");
    } else {
      console.error("Error", error.message);
      res.status(500).send("Error setting up the request");
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
