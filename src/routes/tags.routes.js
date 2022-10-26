const { Router } = require("express")

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router()

//instanciando a classe
const tagsController = new TagsController()

//rotas
tagsRoutes.get("/:user_id", tagsController.index)

module.exports =  tagsRoutes