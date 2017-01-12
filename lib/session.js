'use strict';


function init(options){

  // обработчик использования модуля как роутера
  return {
    handler: function( name, app ) {
      console.log( "explosion-session: сработал handler" );
      app.use(
        "/system/onconnect",
        function (req, res, next) {
          req.session = {};
          console.log("explosion-session: новое подключение");
          next();
        }
      );
    }
  };
}

module.exports = init;
