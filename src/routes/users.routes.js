const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

//instanciando a classe
const usersController = new UsersController()

//rotas
usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports =  usersRoutes