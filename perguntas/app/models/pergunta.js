var Pergunta = function () {

  this.defineProperties({
    titulo: {type: 'string'},
    descricao: {type: 'string'}
  });

  this.validatesPresent('titulo');
  this.validatesLength('titulo', {min:8});

  this.validatesPresent('descricao');
  this.validatesLength('descricao', {min:15});

  this.hasMany('Respostas');

  /*
  this.property('login', 'string', {required: true});
  this.property('password', 'string', {required: true});
  this.property('lastName', 'string');
  this.property('firstName', 'string');

  this.validatesPresent('login');
  this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
  this.validatesLength('login', {min: 3});
  // Use with the name of the other parameter to compare with
  this.validatesConfirmed('password', 'confirmPassword');
  // Use with any function that returns a Boolean
  this.validatesWithFunction('password', function (s) {
      return s.length > 0;
  });

  // Can define methods for instances like this
  this.someMethod = function () {
    // Do some stuff
  };
  */

};

/*
// Can also define them on the prototype
Pergunta.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
Pergunta.someStaticMethod = function () {
  // Do some other stuff
};
Pergunta.someStaticProperty = 'YYZ';
*/

Pergunta = geddy.model.register('Pergunta', Pergunta);
