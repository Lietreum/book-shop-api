const express = require('express')

    const app = express()
    const port = 3333

    app.get('/',(req,res) =>{
        res.send("Hello ini express")
    })

    app.get('/EsKopi',(req,res) =>{
        res.send("Hello ini about")
    })

    app.get("/Eskopi/:Vanilla", (req, res) => {
        res.send("Ini tampilan user");
    });

    

    app.listen(port,() => console.log(`Server running on port ${port}`))