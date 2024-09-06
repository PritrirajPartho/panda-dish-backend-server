const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// -------------------------


const review = require('./data/review.json');
const dishesFormula = require('./data/dishesformula.json');
const dishes = require('./data/dishes.json');


//Example part start to here........
app.get('/', (req, res) => {
  res.send('panda-dish')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// data using is start here bro......
app.get('/chefs', (req, res) =>{
   res.send(chefs);
})

app.get('/chefs/:id', (req, res) =>{
  const id = req.params.id;
  const selectedChefs = chefs.find(c=> c.id == id)
  res.send(selectedChefs);
})