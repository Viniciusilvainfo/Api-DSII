const axios = require('axios');

class PessoaController {
    async buscarPessoa(req, res) {
        const { gender } = req.body;
        var pessoas = await buscaPessoaAPI();
        while(1 == 1) {
            if(pessoas.registered.age < 6 || pessoas.gender != gender) {
                pessoas = await buscaPessoaAPI();
            }else {
                return res.render('pessoas', { pessoas:pessoas });
            }
        }
    }
}

const buscaPessoaAPI = async () => {
    const URL = `https://randomuser.me/api/`;
    try {
        const resposta = await axios.get(URL);
        return resposta.data.results[0];
    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { PessoaController }