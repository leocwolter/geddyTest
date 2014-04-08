var CreatePerguntas = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('titulo', 'string');
          t.column('descricao', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('pergunta', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('pergunta', callback);
  };
};

exports.CreatePerguntas = CreatePerguntas;
