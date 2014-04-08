var Perguntas = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Pergunta.all(function(err, perguntas) {
      if (err) {
        throw err;
      }
      self.respondWith(perguntas, {type:'Pergunta'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , pergunta = geddy.model.Pergunta.create(params);

    if (!pergunta.isValid()) {
      this.respondWith(pergunta);
    }
    else {
      pergunta.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(pergunta, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Pergunta.first(params.id, function(err, pergunta) {
      if (err) {
        throw err;
      }
      if (!pergunta) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(pergunta);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Pergunta.first(params.id, function(err, pergunta) {
      if (err) {
        throw err;
      }
      if (!pergunta) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(pergunta);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Pergunta.first(params.id, function(err, pergunta) {
      if (err) {
        throw err;
      }
      pergunta.updateProperties(params);

      if (!pergunta.isValid()) {
        self.respondWith(pergunta);
      }
      else {
        pergunta.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(pergunta, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Pergunta.first(params.id, function(err, pergunta) {
      if (err) {
        throw err;
      }
      if (!pergunta) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Pergunta.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(pergunta);
        });
      }
    });
  };

};

exports.Perguntas = Perguntas;
