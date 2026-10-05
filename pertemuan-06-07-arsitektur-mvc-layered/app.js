// Mini Project - Pertemuan 6-7: Menghubungkan Semua Layer
// TODO 4: gunakan express.json() dan hubungkan mahasiswaRoutes pada prefix /mahasiswa.
// Jalankan dengan: npm install && npm start

const express = require('express');
const app = express();
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
 
app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);
 
app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});

