//import express Module
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// create express application
const path = require('path');
const multer = require('multer');
const app = express();
//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
 extension;
  cb(null, imgName);
  }
 });

//import mongoose  Module
const mongoose = require('mongoose');
//connect DB and create education(nom de la base de donnee) DB
mongoose.connect('mongodb://localhost:27017/sportDB', { useNewUrlParser: true, useUnifiedTopology: true });
//importer les modeles dans app.js (match = match.js)
const Match = require('./models/match');
const Player = require('./models/player');
const Team = require('./models/team');
const User = require('./models/user');
const bcrypt = require('bcrypt');
//security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// /: http://localhost:3003/matchs
// traitement logique de Add match
app.post('/matchs', multer({ storage: storage }).single('img'), (req, res) => {
  console.log('Here into Add match');
  // get json Object from FE
  url = req.protocol + '://' + req.get('host');
  console.log('Here object From FE', req.body);
  // parser le body et l'enregistrer dans le modele 
  const match = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    img: url + '/images/' + req.file.filename
  })
  match.save();
});
app.get('/matchs', (req, res) => {
  console.log('Here into get All matchs');
  //get All matchs objects from DB 
  console.log('Here In Get All Objects');
  Match.find((err, docs) => {
    if (err) {
      console.log('err With DB');
    } else {
      res.status(200).json({
        findedMatches: docs
      });

    }
  }
  )

  // findedCourses: attribut et courses: value(tableau objet )

});
app.get('/matchs/:id', (req, res) => {
  let id = req.params.id;
  console.log('Here into get By Id matchs', id);
  Match.findOne({ _id: id }).then(
    (result) => {
      res.status(200).json({
        findedMatches: result
      });
    }
  )

});
app.put('/matchs/:id', (req, res) => {
  console.log('Here into put By Id');
  let newMatch = new Match({
    _id: req.body._id,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo
  });
  Match.updateOne({ _id: req.body._id }, newMatch).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: 'Match Edited with Success'
        })
      }
    }
  );
});
app.delete('/matchs/:id', (req, res) => {
  console.log('Here into delete By Id ');
  let id = req.params.id;
  Match.deleteOne({ _id: id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: 'Deleted with success'
        })
      }
    }
  )
});
// traitement logique de Add players

app.post('/players', multer({ storage: storage }).single('img'), (req, res) => {
  console.log('Here into Add Player');
  url = req.protocol + '://' + req.get('host');
  console.log('Here Object from FE', req.body);
  const player = new Player({
    name: req.body.name,
    poste: req.body.poste,
    number: req.body.number,
    age: req.body.age,
    img: url + '/images/' + req.file.filename

  });
  player.save();
});
app.get('/players', (req, res) => {
  console.log('Here into get All players');
  //get All players objects from DB (static)
  console.log('Here Get All Players');
  Player.find((err, docs) => {
    if (err) {
      console.log('erreur with DB');
    } else {
      // findedPlayers: attribut et players: value(tableau objet )

      res.status(200).json({
        findedPlayers: docs
      });
    }

  }
  )

});
app.get('/players/:id', (req, res) => {
  let id = req.params.id;
  console.log('Here into get By Id players', id);
  Player.findOne({ _id: id }).then(
    (result) => {
      res.status(200).json({
        findedPlayers: result
      });
    }

  )

});
app.put('/players/:id', (req, res) => {
  console.log('Here into put By Id');
  let newPlayer = new Player({
    _id: req.body._id,
    name: req.body.name,
    poste: req.body.poste,
    number: req.body.number,
    age: req.body.age
  });
  Player.updateOne({ _id: req.body._id }, newPlayer).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: 'Player Edited with Success'
        })
      }
    }
  );
});
app.delete('/players/:id', (req, res) => {
  console.log('Here into delete By Id ');
  let id = req.params.id;
  Player.deleteOne({ _id: id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: 'Deleted with success'
        })
      }
    }
  )
});
// traitement logique de Add Teams

app.post('/teams', multer({ storage: storage }).single('img'), (req, res) => {
  console.log('Here into Add team');
  url = req.protocol + '://' + req.get('host');
  console.log('Here Object from BE', req.body);
  const team = new Team({
    name: req.body.name,
    staduim: req.body.staduim,
    fondation: req.body.fondation,
    img: url + '/images/' + req.file.filename

  });
  team.save();
});
app.get('/teams', (req, res) => {
  console.log('Here into get All teams');
  console.log('Here into to getAllTeams');
  // findedTeams: attribut et teams: value(tableau objet )
  Team.find((err, docs) => {
    if (err) {
      console.log('erreur with DB');
    } else {
      res.status(200).json({
        findedTeams: docs
      });
    }
  })

});
app.get('/teams/:id', (req, res) => {
  let id = req.params.id;
  console.log('Here into get By Id Teams', id);
  Team.findOne({ _id: id }).then(
    (result) => {
      res.status(200).json({
        findedTeams: result
      });
    }
  )

});
app.put('/teams/:id', (req, res) => {
  console.log('Here into put By Id');
  let newTeam = new Team({
    _id: req.body._id,
    name: req.body.name,
    staduim: req.body.staduim,
    fondation: req.body.fondation
  });
  Team.updateOne({ _id: req.body._id }, newTeam).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: 'Team Edited with Success'
        })
      }
    }
  );

});
app.delete('/teams/:id', (req, res) => {
  console.log('Here into delete By Id ');
  let id = req.params.id;
  Team.deleteOne({ _id: id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: 'Deleted with success'
        })
      }
    }
  )
});
// traitement logique de signup
app.post('/users/signup', multer({ storage: storage }).single('avatar') , (req, res) => {
  console.log('Here into Add User');
  url = req.protocol + '://' + req.get('host');
  // get json object from FE
  console.log('Here Object', req.body);
  bcrypt.hash(req.body.password, 10).then(
    (cryptedPwd) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,// mot de passe crypted
        role: req.body.role,
        avatar: url + '/images/' + req.file.filename


      });
      user.save().then(
        (result) => {
          if (result) {
            res.status(200).json(
              {
                message: 'user added with success'
              }
            );
          }
        }
      );
    }
  )


});
app.post('/users/login', (req, res) => {
  User.findOne({ email: req.body.email }).then((findedUser) => {
    if (!findedUser) {
      res.status(200).json({
        message: "0",
      });
    }
    return bcrypt.compare(req.body.password, findedUser.password);
  })
    .then((correctUserPwd) => {
      console.log("correctUserPwd", correctUserPwd);
      if (!correctUserPwd) {
        res.status(200).json({
          message: "1",
        });
      }
      User.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          firstName: finalUser.firstName,
          lastName: finalUser.lastName,
          //  role: finalUser.role,
        };
        res.status(200).json({
          user: user,
          message: "2",
        });
      });
    });
});
module.exports = app;