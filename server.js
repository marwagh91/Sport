//import app
const app = require ('./backend/app');
// serveur backend ecoute sur le port 3003 
app.listen(3003, ()=>{
    console.log('APP Listening  Port 3003');

});