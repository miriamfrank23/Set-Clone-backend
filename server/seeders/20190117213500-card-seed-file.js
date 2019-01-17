'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cards', [{	number: 1,	color: '1',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '1',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '1',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '1',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '2',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '2',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '2',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '1',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '2',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '3',	symbol: '1',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '1',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '2',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '3',	symbol: '2',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '1',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '2',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 1,	color: '3',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 2,	color: '3',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	},
  {	number: 3,	color: '3',	shading: '3',	symbol: '3',	createdAt: new Date(),	updatedAt: new Date()	}], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cards')

  }
};