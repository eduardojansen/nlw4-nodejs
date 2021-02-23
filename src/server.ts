import express from 'express';

const app = express();

// GET http://localhost:3333
app.get("/", (request, response) => {
  // Retornando mensagem como texto na página
  // return response.send('Hello!')

  // Retornando mensagem como JSON
  return response.json({message: 'Hello!'})

})

// POST http://localhost:3333
app.post("/", (request, response) => {
  return response.json({message: "Dados foram salvo com sucesso."})
})

app.listen(3333,() => console.log('server is running...'));