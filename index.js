const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// -------------------------



const review = require('./datas/review.json');
const dishesFormula = require('./datas/dishesformula.json');
const dishes = require('./datas/dishes.json');



// data using is start here....
app.get('/review', (req, res) =>{
    res.send(review);
 })

app.get('/formulas', (req, res) =>{
    res.send(dishesFormula);
 })

app.get('/dishes', (req, res) =>{
    res.send(dishes);
 })
 




//Example part start to here........
app.get('/', (req, res) => {
    res.send('panda-dish')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  