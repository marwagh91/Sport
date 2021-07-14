// importer le module mongoose(pour utiliser le mot Schema et model)
const mongoose = require('mongoose');
// la definition des attributs du modele
const matchSchema = mongoose.Schema ({
    teamOne:String,
      teamTwo:String,
      scoreOne:String,
      scoreTwo:String,
      img:String
});
// Match: le nom du modele base de donnees qui a deja un ensemble d'attributs
const match = mongoose.model('Match', matchSchema);
//file exportable
module.exports=match;
