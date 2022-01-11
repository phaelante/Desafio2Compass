const database = require('../models')

class ClienteController {
 
 
    //Puxa Todos os Clientes
  static async pegaTodosOsClientes(req, res){
    try {
      const todosOsClientess = await database.clientes.findAll()
      return res.status(200).json(todosOsClientess)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

//Puxa apenas um Cliente
static async pegaUmCliente(req, res) {
  const { id } = req.params
  try {
    const UmCliente = await database.clientes.findOne( { 
      where: { 
        id: Number(id) 
      }
    })
    return res.status(200).json(UmCliente)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}


//Cria Registro de cliente
static async criacliente(req, res) {
  const novoclinte = req.body
  try {
    const novoclienteCriado = await database.clientes.create(novaoCliente)
    return res.status(200).json(novoclienteCriado)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

//Atualiza um cliente,
static async atualizacliente(req, res) {
const { id } = req.params
const novasInfos = req.body

try {
  await database.clientes.update(novasInfos,{ where: {id: Number(id)} })
  const clienteAtualizado = await database.clientes.findOne( { where: { id: Number(id)}})
  return res.status(200).json(clienteAtualizado)
} catch (error) {
  return res.status(500).json(error.message)
}
}

//Deleta um cliente
 static async apagacliente(req, res) {
const { id } = req.params
try {
  await database.clientes.destroy( { where: { id: Number(id)}})
  return res.status(200).json({mensagem:`id ${id} deletado`})

} catch (error) {
  return res.status(500).json(error.message)
}
}





}


module.exports = ClienteController
