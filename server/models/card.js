export default (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    number: DataTypes.INTEGER,
    color: DataTypes.INTEGER,
    shading: DataTypes.INTEGER,
    symbol: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Card.associate = (models) => {
  };
  return Card;
};
