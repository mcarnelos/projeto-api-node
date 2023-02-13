//importações
require("express-async-errors")

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")

const express = require("express")
const routes = require("./routes")

migrationsRun()

//inicializando o express
const app = express()
app.use(express.json())

//envia o avatar para a pasta uploads 
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use(( error, request, response, next ) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

//definindo a porta que será utilizada
const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
