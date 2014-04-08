var CreateRespostas = function () {
  this.up = function (next) {
    var def = function (t) {
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
    this.createTable('resposta', def, callback);
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
    this.dropTable('resposta', callback);
  };
};

exports.CreateRespostas = CreateRespostas;
