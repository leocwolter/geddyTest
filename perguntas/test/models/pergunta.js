var assert = require('assert')
  , tests
  , Pergunta = geddy.model.Pergunta;

tests = {

  'after': function (next) {
    // cleanup DB
    Pergunta.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var pergunta = Pergunta.create({});
    pergunta.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
