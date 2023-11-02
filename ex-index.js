const express = require("express");
const { Client } = require("pg");

const app = express();
app.use(express.json());
const port = 5432;

const route = require("./routes/index");
app.use(route);


const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "book_shop_api",
  password: "1234",
  port: 5432,
});

client.connect()
  .then(() => {
    console.log("Terhubung ke database PostgreSQL");
  })
  .catch((error) => {
    console.error("Gagal terhubung ke PostgreSQL", error);
  });

// Buat tabel 'books' jika belum ada
client.query(`
  CREATE TABLE IF NOT EXISTS books (
    judul VARCHAR(255) NOT NULL,
    penerbit VARCHAR(255) NOT NULL,
    deskiripsi TEXT NOT NULL,
    gambar TEXT NOT NULL
  );
`).then(() => console.log("Tabel 'books' berhasil dibuat"))
  .catch(error => console.error("Gagal membuat tabel 'books':", error));

app.get("/books", async (req, res) => {
  try {
    const queryResult = await client.query("SELECT * FROM books");
    res.json(queryResult.rows);
  } catch (error) {
    console.error("Gagal mendapatkan data buku:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
});

app.post("/books", async (req, res) => {
  const { Judul, Penerbit, Deskripsi,Gambar  } = req.body;
  
  try {
    const query = "INSERT INTO books (judul, penerbit, deskripsi, gambar) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [Judul, Penerbit, Deskripsi,Gambar];
    const queryResult = await client.query(query, values);
    res.json(queryResult.rows[0]);
  } catch (error) {
    console.error("Gagal menambahkan buku:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
});

app.get("/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const query = "SELECT * FROM books WHERE book_id = $1";
    const queryResult = await client.query(query, [bookId]);
    if (queryResult.rows.length > 0) {
      res.json(queryResult.rows[0]);
    } else {
      res.status(404).json({ error: "Buku tidak ditemukan" });
    }
  } catch (error) {
    console.error("Gagal mendapatkan detail buku:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
