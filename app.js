const express=require("express")
const app=express()
const path=require('path');

const publicPath=path.resolve(__dirname,'./public')

app.use(express.static(publicPath))

app.listen(3030,()=> console.log("Servidor levantado en el puerto 3030 https://localhost:3030"))

app.get('/',(req,res)=>{
    let ruta=path.resolve(__dirname, './views/home.html')
    res.sendFile(ruta)
})

app.use(express.static('public'))