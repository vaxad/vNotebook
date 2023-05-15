const connectMongo=require('./db');
const path=require("path")
connectMongo();

const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

//if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"./client/build")));
//}
app.get("*",function(_, res){
  res.sendFile(
    path.join(__dirname,"./client/build/index.html"),
    function(err){
      res.status(500).send(err)
    }
  );
}
);


app.listen(port, () => {
  console.log(`vNotebook backend listening on port ${port}`)
})