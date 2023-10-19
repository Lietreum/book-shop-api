const express = require('express');

const app = express()
const port = 3333

// GET method
app.get('/', (req, res) => {
    res.json({ message: "Hallo ini respon JSON wkwkw" });
})

// POST method
app.post('/', (req, res) => {
    res.send('Sebuah POST request')
})

// PUT method
app.put('/user', (req, res) => {
    res.send('/user')
})

// DELETE method
app.delete('/user', (req, res) => {
    res.send('  DELETE request at /user')
})

app.get('/EsKopi', (req, res) => {
    res.send("pengen drink eskopi")
})

app.get("/Eskopi/:Vanilla", (req, res) => {
    res.send("Ini tampilan user");
});

//  Bagian nomer 5
const data_users = [
    // = port/1 etc
    { id: 1, name: "Ilham Anugrah", alamat: "Sukabumi" },
    { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
    { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
    { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
];

app.get("/users", (req, res) => {
    //mendapatkan data dari database
    const data = data_users; // understablee
    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});

app.get("/users/:id", (req, res) => {
    // get data dari parameter
    let id = parseInt(req.params.id);
    // DARI DATABASE    
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
            status: 200,
            data: user,
        };
    }
    res.json(result);
});

app.get("/users/:id", (req, res) => {
    // get data dari parameter
    let id = parseInt(req.params.id);

    // get data dari database
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
            status: 200,
            data: user,
        };
    } else {
        res.status(404).json({ error: "User not found" });
    }
    res.json(result);
});

app.listen(port, () => console.log(`Server running on port ${port}`))
