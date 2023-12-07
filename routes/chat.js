const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("chat.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat Exist";
    }
    res.send(
      `<html><body>${data} <br> <form onsubmit= "document.getElementById('username').value=localStorage.getItem('username')" action="/" method = "POST">
        <input id="message" type ="text" name="message" placeholder="message">
        <input type="hidden" name="username" id="username">
        <br>
        <button type ="submit">Send</button></form></body></html>`
    );
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile(
    "chat.txt",
    ` ${req.body.username}: ${req.body.message}`,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});
module.exports = router;
