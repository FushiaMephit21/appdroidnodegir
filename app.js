const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jsonParser = express.json();
const collModel = {
	corpusModel: require("./table_models/corpus");
}

const coll = {
	"corpus": mongoose.model("corpus",collModel["corpusModel"].scheme())
}

mongoose.connect("mongodb://heroku_lfjvl6cw:dved67gtbplnv3epcrjtqolslj@ds341847.mlab.com:41847/heroku_lfjvl6cw", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(process.env.PORT, function(){
        console.log("Підключення...");
    });
});


app.use(function(req,res){
	res.send("node is run");
	console.log("node running");
});



app.listen(8080);
