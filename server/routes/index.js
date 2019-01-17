import Cards from '../controllers/card';

 export default (app) => {

   app.get('/api/cards', Cards.list);

   app.get('/api', (req, res) => res.status(200).send({
      message: 'api',
    }));

};
