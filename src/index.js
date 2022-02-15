const axios = require('axios');

export default async function getStreetNameByCep(cep) {
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => { return response.data.logradouro })
        .catch(console.log)
}
