//metodo: every()

console.log("=== EXEMPLOS COM every() ===\n");

//-----------------------------------------
//Exemplo 1- Confirmar se todos os números são positivos
//--------------------------------------
console.log ("---- Exemplo 1: todos os números são positivos? ---");

const notas = [7, 5, 8.0, 9.5, 6.0];

const todasPositivas = notas.every((nota) => nota >= 0);

console.log("Notas:", notas);
console.log("Todas as notas são válidas (>=0)?", todasPositivas);
console.log("\n");

//-----------------------------------------------
//Exemplo 2- Validação de clientes ativos
//-----------------------------------------------
console.log("---------Exemplo 2: toda a turma de clientes está ativa?--------------");

const clientes = [
    {id: 1, nome: "Felipe", ativo: true},
    {id: 2, nome: "Camila", ativo: true},
    {id: 3, nome: "Renato", ativo: true},
];

const todosAtivos = clientes.every((cliente) => cliente.ativo);

console.log("Clientes:", clientes.map(c => `${c.nome}: ${c.ativo ? 'Ativo' : 'Inativo'}`));
console.log("Todos estão ativos?", todosAtivos);
console.log("\n");

//------------------------------------------------
// exemplo 3
//--------------------------------------------
console.log("Exemplo 3");

const itensDoPedido = [
    {produto: "Notebook Gamer", qtdComprada:1, estoqueDisponivel:4 },
    {produto: "Notebook Gamer", qtdComprada:1, estoqueDisponivel:4 },
];

function validarDisponibilidadeCheckout(itens) {
   const pedidoValido = itens.every((item) => {
    return item.qtdComprada <= item.estoqueDisponivel;
  });

  if (pedidoValido) {
    return {
      status: 200,
      autorizado: true,
      mensagem: "Pedido autorizado com sucesso!"
    };
  }

  return {
    status: 400,
    autorizado: false,
    mensagem: "Falha no checkout: Um ou mais itens não possuem estoque suficiente."
  };
}

console.log(validarDisponibilidadeCheckout(itensDoPedido));
//fim
