const express = require('express')
const app = express()
let xlsx=require('xlsx');



const PORT = process.env.PORT || 3030;



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
var data=[{
  id:1,
  name:"mohamad",
  adress:"akkar",
  position:"team leader",
  salary:"1500$"},
  {
    id:2,
    name:"omar",
    adress:"beirut",
    position:"manager",
    salary:"2000$",
  },
  {
    id:3,
    name:"ayman",
    adress:"koura",
    position:"waiter",
    salary:"1100$",
  },
  {
    id:4,
    name:"hassan",
    adress:"tripoli",
    position:"waiter",
    salary:"1100$",
  },
  {
    id:5,
    name:"rim",
    adress:"akkar",
    position:"hostess",
    salary:"1500$",
  }]
  
app.get('/', function (req, res) {
    res.send(data)
  })