const express = require('express')
const app = express()
let xlsx=require('xlsx');

app.listen(3000)
let wb=xlsx.readFile('students.xlsx');
let ws=wb.Sheets['student'];
let data=xlsx.utils.sheet_to_json(ws);
console.log(data);
app.get('/', function (req, res) {
    res.send(data)
  })