//-----------------------------------------------------------------------------------------------------------------------------
//metodo:findindex()
//Função: retorna a posição (Indice 0, 1, 2...) do primeiro item que atende à condição. Se não encontrar, retorna -1
//------------------------------------------------------------------------------------------------------------------------------

console.log("--- Exemplo 1: Posição do primeiro maior de idade (Básico)---");

const idades = [12, 15, 17, 20, 25];

const indiceMaiorDeIdade = idades.findIndex((idade) => idade >= 18);

console.log("Idades:", idades);
console.log('Primeiro maior de idade está no indice: ${indiceMaiorDeIdade} (Valor: ${idades[indiceMaiorDeIdade]})`);
console.log("\n");

//-----------------------------------------
// exemplo 2- localizar posição do usúario por Id
//------------------------------------------

console.log("==== Exemplo 2: posição de objeto por id (Intermediario)===");

const ususarios = [
    {id: 10, nome: "Carla"},
    {id: 25, nome: "Diego"},
    {id: 32, nome: "Fernanda"},
];

const indiceDiego = usuariosBanco.findIndex((u) => u.id === 25);

console.log("Índice do usuário por ID 25:", indiceDiego);
console.log("Elemento encontrado na posição:", usuarios[indiceDiego]);
console.log("\n");

//================================================
//Exemplo 3 (Back-End Real): Exclusão em rota DELETE/ produtos/:id com splice()
//=================================================
console.log("--- Exemplo 3: Remover item do banco simulado (Back-End Real) ---");

const estoque = [
    {id: 101, nome: "Teclado", preco: 150},
    {id: 102, nome: "Mouse", preco: 89},
    {id: 103, nome: "Mousepad", preco: 40}
];

function deletarProdutoPorId(id) {
    const index = estoque.findIndex((item) => item.id == id);

    if (index === -1) {
        return { status: 404, mensagem: "Produto não localizado para exclusão" };     
    }

    //Remove exatamente 1 elemento na posição encontrada

    const [removido] = estoque.splice(index, 1);

    return {
        status: 200,
        mensagem: `produto '${removido.nome}' removido com sucesso!´,
        estoqueAtualizado: estoque
    };
}
    console.log(deletarProdutoPorId(102));
