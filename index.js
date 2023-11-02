const express = require("express");
// const { Client } = require("pg");

const app = express();
// app.use(express.json());
const port = 3333;

const route = require("./routes/index");
app.use(route);

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "book_store_api",
//   password: "1234",
//   port: 3333,
// });

// client
//   .connect()
//   .then(() => {
//     console.log("Terhubung ke database Postgre");
//   })
//   .catch((error) => {
//     console.error("Gagal terhubung ke postgre");
//   });

// app.get("/users", async (req, res) => {
//   let id = parseInt(req.params.id);

//   //konek dengan database
//   client
//     .connect()
//     .then(() => {
//       console.log("Terhubung ke database Postgre");
//     })
//     .catch((error) => {
//       console.error("Gagal terhubung ke postgre");
//     });

//   //ambil data
  // client.query(
  //   "SELECT user_id, nama, alamat FROM public.users",
  //   [id],
  //   (req, result) => {
  //     res.json(result.rows);
  //   }
  // );

//   // //tampilkan data
//   // res.json({
//   //     massage: "data user",
//   //     data : data,
//   // });
// });

// app.get("/users/:id", async (req, res) => {});

// app.post("/users/", async (req, res) => {
//   let data = req.body;

//   const query =
//     "INSERT INTO public.users(user_id, nama, alamat) VALUES ($1, $2, $3);";

//   client.query(query, [data.user_id, data.nama, data.alamat], (err, result) => {
//     if (err) {
//       console.error("Error executing insert:", err);
//       return res.status(500).json({ error: "Terjadi kesalahan " + err });
//     } else {
//       res.json({
//         message: "Data berhasil dimasukan",
//       });
//     }
//   });
// });

app.listen(port, () => console.log(`Server running on port ${port}`));

// const data_users = [
//     { id: 1, name: "Ijong", komentar: "Bantuin dong" },
//     { id: 2, name: "Yuuichi", komentar: "gantiin gw" },
//     { id: 3, name: "Misterius", komentar: "Jakarta keren ya" },
//     { id: 4, name: "Lala", komentar: "Pusing banget" },
// ];

// app.get("/users", (req, res) => {
//     //mendapatkan data dari database
//     const Data = data_users;

//     //memberikan respon json data
//     let result = {
//         status: 200,
//         data: Data,
//     };

//     res.json(result);
// });

// app.get("/users/:id", (req, res) => {

//     let id = parseInt(req.params.id);

//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     }  else {
//         res.status(404).json({ error: "User not found" });
//     }
//     res.json(result);
// });
