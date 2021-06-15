const { response } = require('express');
const express = require('express');
const router = express.Router();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.API_KEY);

router.get('/', (req, res) => {
  newsapi.v2
    .topHeadlines({
      q: "trump",
      category: "politics",
      language: "en",
      country: "us",
    })
    .then((response) => {
      console.log(response);
      let data = response;
      res.json(data)
       /*
    {
      status: "ok",
      articles: [...]
    }
  */
    });
})

module.exports = router;