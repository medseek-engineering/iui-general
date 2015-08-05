var rootDir = __dirname + '/';

module.exports = {
  
  config: function(conf) {
    console.log('Using iui-general directive');
    conf.client.head.scripts.push(conf.client.app.root + '$iui-general/dist/core-module-setup.js');
    conf.client.head.scripts.push(conf.client.app.root + '$iui-general/dist/iui-general.min.js');
  },

  app: function(app, conf) {
    app.get('/\\$iui-general/*', function(req, res) {
      res.sendfile(rootDir + req.params[0]);
    });
  }
};