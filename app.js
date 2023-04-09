let app = require('./config/server')

app.listen(8181, (err, result) => {
  if(err)throw err;
  console.log('Servidor on! http://localhost:8181')
})