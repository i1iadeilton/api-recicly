const ReciclService = require('../Services/ReciclService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let recicly = await ReciclService.buscarTodos();

        for(let i in recicly){
            json.result.push({
                codigo: recicly[i].codigo,
                descricao: recicly[i].nomeItem
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo; //para pegar o parametro
        let recicly = await ReciclService.buscarUm(codigo);

        if(recicly){
            json.result = recicly; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nomeItem = req.body.nomeItem;
        let tipo = req.body.tipo;

        if (nomeItem && tipo){
            let ReciclCodigo = await ReciclService.inserir(nomeItem, tipo);
            json.result = {
                codigo: ReciclCodigo,
                nomeItem,
                tipo
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nomeItem = req.body.nomeItem;
        let tipo = req.body.tipo;

        if (codigo && nomeItem && tipo){
            await ReciclService.alterar(codigo, nomeItem, tipo);
            json.result = {
                codigo,
                nomeItem,
                tipo
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await ReciclService.excluir(req.params.codigo);
        
        res.json(json);
    },

}