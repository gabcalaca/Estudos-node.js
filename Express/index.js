const express = require("express"); //importando o framework Express
const app = express(); //chamando(iniciando) o Express


app.get("/",function(req,res){ // Primeira Rota(caminho) da aplicação
    res.send("pinto"); // Resposta da rota
});

app.get("/home",function(req,res){ //rota que leva a pagina home
    res.send("bem vindo a home");
});

app.get("/tipos/tipo1",function(req,res){ //rota que leva ao tipo1 da pagina tipos
    var tipo = req.query["tipo"]; //pega um parametro passado através de query pela url e depois imprime ele
    
    if(tipo){
        res.send(tipo);                       //testa se um parâmetro foi passado se não informa ao usuário
    }else{
        res.send("nenhum parâmetro passado");
    }
    
  


});

app.get("/bomdia/:nome/:time",function(req,res){
    // OBJETO REQ = PEGA OS PARAMETROS PASSADOS PELO USUÁRIO
    // OBJETO RES = RESPOSTA QUE SERÁ ENVIADA PRO USUÁRIO
    var nome = req.params.nome;
    var time = req.params.time;
    res.send("Bom dia " +  nome +" que torce para o "+ time + "!" );

});

app.listen(8181,function(erro){                     //função express que inicia o servidor na porta 8181 e verifica se tem erro , caso tenha imprime "Ocorreu um erro"
    if(erro){                                       // se não, imprime "servidor iniciado"
        console.log("Ocorreu um erro");

    }else{
        console.log("servidor iniciado");
    }
});