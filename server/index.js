const express = require("express");
const cors = require("cors");
const bcrypt = require('bcryptjs'); // Importar bcrypt
const jwt = require('jsonwebtoken'); // Importar jsonwebtoken
const PORT = 5000;
const app = express();
const { Pool } = require('pg');


const pool = new Pool({
    user: 'joaco',
    host: 'localhost',
    database: 'usuarios',
    password: 'Jdv030903@',
    port: 5432,
});


app.use(express.json());
app.use(cors());
app.disable('x-powered-by');

// instale dependencias de bcryptjs para encriptar las contraseñas.
// y jsonwebtoken para crear tokens de autenticación.

app.get("/", (req, res) => {
    res.send("API para crear y autenticar usuarios")
})


//codigo copiado y pegado 

// Ruta para crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
    const { username,email, password } = req.body;
    console.log(`Username: "${username}" (Length: ${username.length})`);
    
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña
        const result = await pool.query('INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3) RETURNING id', [username, email, hashedPassword]);
        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  });
  
  // Ruta para validar un usuario
  app.post('/usuarios/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);
      const user = result.rows[0];
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Generar un token si la validación es exitosa
        const token = jwt.sign({ id: user.id }, 'tu_secreto_jwt', { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error('Error al validar el usuario:', error);
      res.status(500).json({ error: 'Error al validar el usuario' });
    }
  });
  



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
