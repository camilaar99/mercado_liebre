const express=require("express")
const app=express()
const path=require('path');

const publicPath=path.resolve(__dirname,'./public')
const port = process.env.PORT || 3001;

app.use(express.static(publicPath))

app.listen(port,()=> console.log("Servidor levantado en el puerto ${port} https://localhost:${port}"))

app.get('/',(req,res)=>{
    let ruta=path.resolve(__dirname, './views/home.html')
    res.sendFile(ruta)
})


app.get('/register.html',(req,res)=>{
    let ruta=path.resolve(__dirname, './views/register.html')
    res.sendFile(ruta)
})

app.get('/login.html',(req,res)=>{
    let ruta=path.resolve(__dirname, './views/login.html')
    res.sendFile(ruta)
})

app.use(express.static('public'))