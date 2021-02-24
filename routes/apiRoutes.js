const express = require('express');
const fs = require('fs');
const path = require('path');
const generateUniqueId = require('generate-unique-id');

const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');

const id = generateUniqueId({
  length: 32,
  useLetters: false
});
 

module.exports = (app) => {

  app.get('/api/tables', (req, res) => res.json(tableData));

  app.get('/api/waitlist', (req, res) => res.json(waitListData));


  app.post('/api/tables', (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/clear', (req, res) => {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
