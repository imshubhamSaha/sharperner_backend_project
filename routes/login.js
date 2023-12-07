const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<html><body><form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action= "/login" method = "POST"><input type="text" name="userName" placeholder= "username" id="username"><br><button type= "submit">submit</button></form></body></html>'
  );
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
