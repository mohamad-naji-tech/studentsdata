const express = require('express')
const app = express()
let xlsx=require('xlsx');



const PORT = process.env.PORT || 3030;



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
let wb=xlsx.readFile('students.xlsx');
let ws=wb.Sheets['student'];
let data=xlsx.utils.sheet_to_json(ws);
console.log(data);
app.get('/', function (req, res) {
    res.send(data)
  })