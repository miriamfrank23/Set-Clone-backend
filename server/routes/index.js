import Cards from '../controllers/card';

 export default (app) => {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

   app.get('/api/cards', Cards.list);

   app.get('/api', (req, res) => res.status(200).send({
      message: 'api',
    }));

};
