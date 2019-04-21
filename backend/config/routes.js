// definição de rota para acessar os usuários pela url /clientes usando o metodo http POST.
module.exports = app => {
  app.route('/clientes')
    .post(app.api.cliente.saveCliente)
    .get(app.api.cliente.getCliente)
  // .post vai associar qual metodo será chamado quando ele receber uma requisição nessa rota usando post.
  // consign usa o caminho app.api.cliente.save para chamar a instancia, acessar a api, entrar no arquivo cliente e pegar a função save retornada pelo modulo.

  app.route('/clientes/:login')
    .put(app.api.cliente.saveCliente)
    .get(app.api.cliente.getClienteByLogin)
  // o método save serve tanto para inserir quanto para alterar um usuário, por isso a diferença entre o POST e o PUT está no parâmetro fornecido na url (no caso o :id ou a ausencia dele), é assim que o método descobri qual tipo de requisição está sendo feita
}

// um exemplo da mesma configuração, sem usar o consign:
// const cliente = require('../api.cliente')
// module.exports = app => {
//   app.route('/clientes')
//     .post(cliente.save)
// }