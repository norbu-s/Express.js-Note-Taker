const fs = require("fs");
const path = require("path");
const generateUniqueId = require("generate-unique-id");
const db = require("../db/db.json");
const { json } = require("body-parser");

module.exports = (app) => {
  // Retrieve all notes
  app.get("/api/notes", (req, res) => {
    const notes = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"))
    );
    res.json(notes);
  });

  // Retrive one note
  app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    console.log("Looking for note", id);
    res.json({});
  });

  // Create a note.
  app.post("/api/notes", (req, res) => {
    const id = generateUniqueId({
      length: 32,
      useLetters: false,
    });
    const notes = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"))
    );
    notes.push({
      id: id,
      title: req.body.title,
      text: req.body.text,
    });

    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes)
    );
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
