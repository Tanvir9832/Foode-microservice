import express,{Request,Response} from "express"

const app = express();


app.use('/',(req : Request ,res : Response) =>{
    res.json("Hello From food Order Backend");
    return;
})

app.listen(4000,()=>{
    console.log("running at 4000 port");
})