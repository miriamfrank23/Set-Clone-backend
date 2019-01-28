'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cards', [{	number: 1,	color: 1,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1111.svg'},
  {	number: 2,	color: 1,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1121.svg'},
  {	number: 3,	color: 1,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1131.svg'},
  {	number: 1,	color: 1,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1211.svg'},
  {	number: 2,	color: 1,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1221.svg'},
  {	number: 3,	color: 1,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1231.svg'},
  {	number: 1,	color: 1,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1311.svg'},
  {	number: 2,	color: 1,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1321.svg'},
  {	number: 3,	color: 1,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(),image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1331.svg'},
  {	number: 1,	color: 1,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1112.svg'},
  {	number: 2,	color: 1,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1122.svg'},
  {	number: 3,	color: 1,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1132.svg'},
  {	number: 1,	color: 1,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1212.svg'},
  {	number: 2,	color: 1,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1222.svg'},
  {	number: 3,	color: 1,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1232.svg'},
  {	number: 1,	color: 1,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1312.svg'},
  {	number: 2,	color: 1,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1322.svg'},
  {	number: 3,	color: 1,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1332.svg'},
  {	number: 1,	color: 1,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1113.svg'},
  {	number: 2,	color: 1,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1123.svg'},
  {	number: 3,	color: 1,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1133.svg'},
  {	number: 1,	color: 1,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1213.svg'},
  {	number: 2,	color: 1,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1223.svg'},
  {	number: 3,	color: 1,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1233.svg'},
  {	number: 1,	color: 1,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1313.svg'},
  {	number: 2,	color: 1,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1323.svg'},
  {	number: 3,	color: 1,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/1333.svg'},
  {	number: 1,	color: 2,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2111.svg'},
  {	number: 2,	color: 2,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2121.svg'},
  {	number: 3,	color: 2,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2131.svg'},
  {	number: 1,	color: 2,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2211.svg'},
  {	number: 2,	color: 2,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2221.svg'},
  {	number: 3,	color: 2,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2231.svg'},
  {	number: 1,	color: 2,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2311.svg'},
  {	number: 2,	color: 2,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2321.svg'},
  {	number: 3,	color: 2,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2331.svg'},
  {	number: 1,	color: 2,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2112.svg'},
  {	number: 2,	color: 2,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2122.svg'},
  {	number: 3,	color: 2,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2132.svg'},
  {	number: 1,	color: 2,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2212.svg'},
  {	number: 2,	color: 2,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2222.svg'},
  {	number: 3,	color: 2,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2232.svg'},
  {	number: 1,	color: 2,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2312.svg'},
  {	number: 2,	color: 2,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2322.svg'},
  {	number: 3,	color: 2,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2332.svg'},
  {	number: 1,	color: 2,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2113.svg'},
  {	number: 2,	color: 2,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2123.svg'},
  {	number: 3,	color: 2,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2133.svg'},
  {	number: 1,	color: 2,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2213.svg'},
  {	number: 2,	color: 2,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2223.svg'},
  {	number: 3,	color: 2,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2233.svg'},
  {	number: 1,	color: 2,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2313.svg'},
  {	number: 2,	color: 2,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2323.svg'},
  {	number: 3,	color: 2,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/2333.svg'},
  {	number: 1,	color: 3,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3111.svg'},
  {	number: 2,	color: 3,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3121.svg'},
  {	number: 3,	color: 3,	shading: 1,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3131.svg'},
  {	number: 1,	color: 3,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3211.svg'},
  {	number: 2,	color: 3,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3221.svg'},
  {	number: 3,	color: 3,	shading: 2,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3231.svg'},
  {	number: 1,	color: 3,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3311.svg'},
  {	number: 2,	color: 3,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3321.svg'},
  {	number: 3,	color: 3,	shading: 3,	symbol: 1,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3331.svg'},
  {	number: 1,	color: 3,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3112.svg'},
  {	number: 2,	color: 3,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3122.svg'},
  {	number: 3,	color: 3,	shading: 1,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3132.svg'},
  {	number: 1,	color: 3,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3212.svg'},
  {	number: 2,	color: 3,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3222.svg'},
  {	number: 3,	color: 3,	shading: 2,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3232.svg'},
  {	number: 1,	color: 3,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3312.svg'},
  {	number: 2,	color: 3,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3322.svg'},
  {	number: 3,	color: 3,	shading: 3,	symbol: 2,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3332.svg'},
  {	number: 1,	color: 3,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3113.svg'},
  {	number: 2,	color: 3,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3123.svg'},
  {	number: 3,	color: 3,	shading: 1,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3133.svg'},
  {	number: 1,	color: 3,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3213.svg'},
  {	number: 2,	color: 3,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3223.svg'},
  {	number: 3,	color: 3,	shading: 2,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3233.svg'},
  {	number: 1,	color: 3,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3313.svg'},
  {	number: 2,	color: 3,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date(), image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3323.svg'},
  {	number: 3,	color: 3,	shading: 3,	symbol: 3,	createdAt: new Date(),	updatedAt: new Date()	, image: 'https://s3.us-east-2.amazonaws.com/set-clone-images/3333.svg'}], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cards')

  }
};
