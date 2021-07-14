const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
    name: String,
      staduim:String,
      fondation:String,
      img:String
});
const team = mongoose.model('Team',teamSchema);
module.exports=team;