import express  from "express";
import  cors  from "cors";
import '@shared/typeorm'

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8080, ()=>{
    console.log("Rodando...🔥");
})
