var Resposta = function () {
  this.defineProperties({
    descricao: {type: 'string'}
  });

  this.validatesPresent('descricao');
  this.validatesLength('descricao', {min:15});

  this.belongsTo('Pergunta');
};


Resposta = geddy.model.register('Resposta', Resposta);
