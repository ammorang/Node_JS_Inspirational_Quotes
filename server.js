"use strict";

const http = require("http");
const quotes = require("./quotes");

http.createServer((request, response) => {
  let newQuote = quotes[Math.floor(Math.random()*quotes.length)];
  // randomizes the quotes
  let newPerson = quotes[Math.floor(Math.random()*quotes.length)];
  //randomizes the people
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.write(`Remember when ${newPerson.person} said "${newQuote.quote}"?`)
  // produces a random person with a random quote
  console.log("Print new quote");
  response.end();
}).listen(3000);