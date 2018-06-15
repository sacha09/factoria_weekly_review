// Cargar los programas necesarios para esta app
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Fijar path estático
app.use(express.static('files'));

//Registrar handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Responde al requisito de la página raiz
app.get('/', function(req, res){
  res.render('index');
});

// Carga servidor en puerto definido
app.listen(5000, function() {
  console.log('Servidor funcionando, accede a través de http://localhost:5000');
});
