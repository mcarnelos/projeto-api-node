const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

//instanciando a classe
const usersController = new UsersController()

//rota post
usersRoutes.post("/", usersController.create) 

module.exports =  usersRoutes