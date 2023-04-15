import mysql from "promise-mysql";
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat1'
  });
  connection.connect(function(err) {
    if (err) {
      console.error('Error de conexión: ' + err.stack);
      return;
    }
  
    console.log('Conexión exitosa con ID: ' + connection.threadId);
  });


  connection.query('SELECT * message', function (error, results, fields) {
    if (error) throw error;
    console.log('Los resultados son: ', results);
  });
  connection.end(function(err) {
    if (err) {
      console.error('Error al cerrar la conexión: ' + err.stack);
      return;
    }
  
    console.log('Conexión cerrada exitosamente');
  });



  const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
