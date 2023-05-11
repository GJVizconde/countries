const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountriesByName = async (name) => {
  const bddCountries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [Activity],
  });
  return bddCountries;
};

module.exports = getCountriesByName;

// const iconv = require('iconv-lite');

// const getCountriesByName = async (name) => {
//   const bddCountries = await Country.findAll({
//     where: {
//       [Op.and]: [
//         sequelize.where(sequelize.fn('lower', sequelize.col('name')), 'LIKE', `%${iconv.decode(iconv.encode(name, 'latin1'), 'ascii').toLowerCase()}%`)
//       ]
//     },
//   });
//   return bddCountries;
// };

// const getCountriesByName = async (name) => {
//   const bddCountries = await Country.findAll({
//     where: {
//       name: {
//         [Op.iLike]: `%${name}%`,
//       },
//     },
//   });
//   return bddCountries;
// };
