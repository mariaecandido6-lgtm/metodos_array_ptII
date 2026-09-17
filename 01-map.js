//MÉTODO: map()
//=================================================
//Função: Percorrer o array e TRANSFORMA cada item, retornando um NOVO aaray com o mesmo tamanho do original.
//=================================================

console.log("=== EXEMPLOS COM map() === \n");

//=======================================================
//Exemplo 1 (Básico): Dobrar valores numéricos
//=======================================================
console.log("--- Exemplo 1: Dobro de Números (Básico) ---");

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((num) => {
    return num * 2
});

console.log("Original:", numeros);
console.log("Dobrados:", dobrados);
console.log("\n");

//========================================================
//Exemplo 2 (Intermediário): Extração de propriedades em array de objetos
//=========================================================
console.log("--- Exemplo 2: Extrair apenas os nomes (Intemediário) ---");

const usuarios = [
    {id: 1, nome: "Ana Silva", idade: 22},
    {id: 2, nome: "Bruno Costa", idade: 17},
    {id: 3, nome: "Carlos Silva", idade: 30}
];

const apenasNomes = usuarios.map((usuario) => usuario.nome);

console.log("Lista de Nomes:", apenasNomes);
console.log("\n");

//=======================================================
//Exemplo 3 (Back-End Real): Sanitização e formatação de DTO para resposta de API
//=======================================================
console.log("--- Exemplo 3: DTO e Sanitização de Dados de API (back-end real) ---");

const produtosBanco = [
    {id: 101, nome: "Teclado Mecânico RGB", preco: 250.0, estoque: 15, custoInterno: 120.0},
    {id: 102, nome: "Mouse Gamer 16000 DPI", preco: 120.0, estoque: 0, custoInterno: 700.0}
];

//Regra de Back-End: formatar preço para o cliente e omitir dados sensíveis (custo interno)
const respostaApiPublica = produtosBanco.map ((produto) => {
    return {
        id: produto.id,
        titulo: produto.nome.toUpperCase(),
        precoFormatado: `R$ ${produto.preco.toFixed(2)}`,
        disponivel: produto.estoque > 0 
    };
});

console.log("Resposta da API (Sem custo interno):");
console.log(respostaApiPublica);
//fim