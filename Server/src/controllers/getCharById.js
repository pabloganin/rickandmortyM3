const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const { data } = await axios(`${URL_BASE}${id}`);

    const { name, gender, species, origin: { name: origen }, image, status } = data;
    const character = { id, name, gender, species, origin: origen, image, status };

    return name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;

//     .then(({ data }) => {
//       const { id, status, name, species, origin, image, gender } = data;
//       const character = { id, status, name, species, origin, image, gender };
//       return character.name
//         ? res.status(200).json(character)
//         : res.status(404).send("Not found");
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// };

// module.exports = getCharById;

// const axios = require("axios");

// const getCharById = async (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const {
//         id,
//         name,
//         gender,
//         species,
//         origin: { name: origin },
//         image,
//         status
//       } = data;

//       let character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// };

// module.exports = getCharById
