var assert = require('assert')
  , tests
  , Resposta = geddy.model.Resposta;

tests = {

  'after': function (next) {
    // cleanup DB
    Resposta.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var resposta = Resposta.create({});
    resposta.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
