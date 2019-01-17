import model from '../models';

const { Card } = model;

class Cards {

  static list(req, res) {
    return Card.findAll()
      .then((cards) => res.status(200).send(cards))
      .catch((error) => { res.status(400).send(error) })
  }

}

export default Cards;
