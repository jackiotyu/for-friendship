// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
var MongoClient = require("mongodb").MongoClient;
var pass = process.env.PASS;
var url = "mongodb+srv://jack:huang1540..@database-lnq44.azure.mongodb.net/test?retryWrites=true&w=majority";
var conn = function(url) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) reject(err);
      else resolve(db);
    });
  });
};
var toArray = function(data) {
  return new Promise((resolve, reject) => {
    data.toArray((err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

exports.handler = async (event, context) => {
  try {
    var con = await conn(url);
    var db = con.db("ForHonorData");
    var col = db.collection("HeroData");
    var res = await toArray(col.find({"camp":"wulin"}));
    return {
      statusCode: 200,
      body: JSON.stringify(res)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};

// HTTP function
exports.handler = async function http(req) {
  // queryStringParameters
  // body
  // path
  // headers
  console.log(req);

  try {
    var con = await conn(url);
    var db = con.db("ForHonorData");
    var col = db.collection("HeroData");
    var res = await toArray(col.find({"camp":"wulin"}));
    return {
      statusCode: 200,
      body: JSON.stringify(res)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
// let html = `
// <!doctype html>
// <html lang=en>
//   <head>
//     <meta charset=utf-8>
//     <title>Hi!</title>
//     <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
//     <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
//   </head>
//   <body>
//     <h1 class="center-text">
//       Hello world!
//     </h1>
//     <p class="center-text">
//       Your new route is ready to go!
//     </p>
//     <p class="center-text">
//       Learn more about building <a href="https://docs.begin.com/en/functions/http/" class="link" target="_blank">Begin HTTP functions here</a>.
//     </p>
//   </body>
// </html>
// `

// // HTTP function
// exports.handler = async function http(req) {
//   console.log(req)
//   return {
//     headers: {
//       'content-type': 'text/html; charset=utf8'
//     },
//     body: html
//   }
// }
