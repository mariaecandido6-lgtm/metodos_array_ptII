/**
 * ===============================================================================================================================
 * 📌 MÉTODO: find()
 * ===============================================================================================================================
 * Função: Percorre o array e retorna o PRIMEIRO ELEMENTO que satisfaz a condição.
 * Se nenhum for encontrado, retorna undefined.
 *===============================================================================================================================
 */

console.log("=== 🎯 EXEMPLOS COM find() ===\n");

// -------------------------------------------------------------------------------------------------------------------------------
// Exemplo 1 (Básico): Primeiro número acima da média
// -------------------------------------------------------------------------------------------------------------------------------
console.log("--- Exemplo 1: Primeira nota aprovada (Básico) ---");

const notas = [4.5, 5.8, 7.5, 9.0, 6.0];

const primeiraNotaAprovada = notas.find((nota) => nota >= 7.0);

console.log("Primeira nota >= 7.0:", primeiraNotaAprovada);
console.log("\n");

// -------------------------------------------------------------------------------------------------------------------------------
// Exemplo 2 (Intermediário): Buscar usuário pelo nome
// -------------------------------------------------------------------------------------------------------------------------------
console.log("--- Exemplo 2: Buscar cliente por nome (Intermediário) ---");

const clientes = [
    { id: 1, nome: 'Marcos Vinicius', plano: 'Free' },
    { id: 2, nome: 'Juliana Mendes', plano: 'Premium' },
    { id: 3, nome: 'Carlos Eduardo', plano: 'Pro' }
];

const clienteEncontrado = clientes.find((c) => c.nome === "Juliana Mendes");

console.log("Cliente localizado:", clienteEncontrado);
console.log("\n");

// -------------------------------------------------------------------------------------------------------------------------------
// Exemplo 3 (Back-End Real): Simulação de Rota GET /usuarios/:id com Status 200/404
// -------------------------------------------------------------------------------------------------------------------------------
console.log("--- Exexplo 3: Rota GET /usuarios/:id (Back-End Real) ---");

const usuariosBanco = [
    { id: 1, nome: 'Ana Silva', email: 'ana@email.com', cargo: 'Desenvolvedora' },
    { id: 2, nome: 'Bruno Costa', email: 'bruno@email.com', cargo: 'Designer' },
    { id: 3, nome: 'Carla Souza', email: 'carla@email.com', cargo: 'Teach Lead' }
];

function buscarUsuarioPorId(idRequisitado) {
    const usuario = usuariosBanco.find((u) => u.id === idRequisitado);

    if (!usuario) {
        return {
            status: 404,
            mensagem: Erro: Usuário com ID ${idRequisitado} não foi encontrado.
        };
    }

    return {
        status: 200,
        dados: usuario
    };
}

console.log("Buscando ID 2:", buscarUsuarioPorId(2));
console.log("Buscando ID 99 (Inexistente):", buscarUsuarioPorId(99));
//fim