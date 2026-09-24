//--------some()--------------

console.log("=== EXEMPLOS COM some() ===\n");

//---------------------------------------------
//Exemplo 1- Verificar existência de número negativo
//---------------------------------------------
console.log("----Exemplo 1: Há número negativo? ---");

const temperaturas = [23, 19, 28, -2, 31];

const temCongelamento = temperaturas.some((temp) => temp < 0);

console.log("Temperaturas:", temperaturas);
console.log("Houve temperatura abaixo de zero? ---");
console.log("\n");

//-----------------------------------------------
//Exemplo 2- Checar pendência cadastral de usuários
//-----------------------------------------------
console.log("----Exemplo 2: Há usuários inativos? ----");

const usuarios = [
    {id: 1, nome: "Lucas", ativo: true},
    {id: 2, nome: "Mariana", ativo: false},
    {id: 3, nome: "Carlos", ativo: true},
];

const haInativos = usuarios.some((u) => !u.ativo);

console.log("Existe algum usuário inativo?", haInativos);

//----------------------------------------------------
//Exemplo 3- Alerta de reposição de estoque
//----------------------------------------------------
console.log("Exemplo 3- Alerta de estoque esgotado");

const inventario = [
    {id: 101, nome:"Monitor 24pol", estoque: 6},
     {id: 102, nome:"Cabo HDMI 2.0", estoque: 0},
      {id: 103, nome:"Webcan HD", estoque: 15}
];

function checarNecessidadeDeReposicao(produtos) {
    const temEsgotado = produtos.some((p) => p.estoque === 0);

    if (temEsgotado) {
        return "ALERTA: há produtos esgotados no armazém. Acionar compras!";  
    }
    return "OK: todos os produtos possuem estoque.";
}

console.log(checarNecessidadeDeReposicao(inventario))