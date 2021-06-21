import express, { response } from "express";

const app = express();


app.get("/test", (request, response) => {
  
  return response.send("Olá NLW método GET");  
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST");
})

app.listen(5000, () => console.log("Server is running :)"));
