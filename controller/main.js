const mongoose = require("mongoose");
const MongoDB = require("mongodb");
const Messages = require("../models/messages");

const { validationResult } = require("express-validator");

module.exports.submitForm = (req, res, next) => {
  // Login Validation Logic
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ error: "Sorry Some error occured" });
  }
    
  const { name, email, message } = req.body;
  const newMessage = new Messages({
    name: name,
    email: email,
    commentText: message,
  });
  newMessage
    .save()
    .then((r) => {
      // Sending a response back to the client
       res.json({ success: true, message: "Form submitted successfully" });
    })
    .catch((err) => {
      return res.status(400).json({ error: "Sorry Some error occured" });
    });
};
