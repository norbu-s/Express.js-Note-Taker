const fs = require("fs");
const path = require("path");
const generateUniqueId = require("generate-unique-id");
const db = require ('../db/db.json');

module.exports = (app) => {
  // Retrieve all notes
  app.get("/api/notes", (req, res) => res.json(db));

  // Retrive one note
  app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    console.log("Looking for note", id);
    res.json({
      
    });
  });

  // Create a note.
  app.post("/api/notes", (req, res) => {
    const id = generateUniqueId({
      length: 32,
      useLetters: false,
    });
    console.log("New note created", req.body);
    res.json({});
  });

  //Delete a note
  app.post("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    console.log("deleting note", id);
    res.json({});
  });
};
