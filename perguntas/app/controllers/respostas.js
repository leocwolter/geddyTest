var Respostas = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Resposta.all(function(err, respostas) {
      if (err) {
        throw err;
      }
      self.respondWith(respostas, {type:'Resposta'});
    });
  };

  this.add = function (req, resp, params) {
    var self = this;
    geddy.model.Pergunta.all(function(err, perguntas){
      if(err) throw err;

      self.respond({params: params, perguntas: perguntas});
    })
  };

  this.create = function (req, resp, params) {
    var self = this
      , resposta = geddy.model.Resposta.create(params);

    if (!resposta.isValid()) {
      this.respondWith(resposta);
    }
    else {
      resposta.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(resposta, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Resposta.first(params.id, function(err, resposta) {
      if (err) {
        throw err;
      }
      if (!resposta) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(resposta);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Resposta.first(params.id, function(err, resposta) {
      if (err) {
        throw err;
      }
      if (!resposta) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Pergunta.all(function(err, perguntas){
          if (err) throw err;
          self.respond({resposta:resposta,perguntas: perguntas});
        })
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Resposta.first(params.id, function(err, resposta) {
      if (err) {
        throw err;
      }
      resposta.updateProperties(params);

      if (!resposta.isValid()) {
        self.respondWith(resposta);
      }
      else {
        resposta.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(resposta, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Resposta.first(params.id, function(err, resposta) {
      if (err) {
        throw err;
      }
      if (!resposta) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Resposta.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(resposta);
        });
      }
    });
  };

};

exports.Respostas = Respostas;
