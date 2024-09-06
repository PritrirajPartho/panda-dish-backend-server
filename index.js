const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// -------------------------





//Example part start to here........
app.get('/', (req, res) => {
  res.send('panda-dish')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


