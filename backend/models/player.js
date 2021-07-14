const mongoose= require('mongoose');
const playerSchema = mongoose.Schema({
    name:String,
    poste:String,
    number:String,
    age:String,
    img:String
});
const player = mongoose.model('Player', playerSchema);
module.exports= player;