const express = require('express');
const app = express();
const port = 3000;

// Middleware per analizzare il corpo delle richieste in formato JSON
app.use(express.json());

// Password nascosta lato server (non nel codice sorgente)
const passwordSegreta = "2024";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const { password } = req.body;

    // Controlla la password (implementa la tua logica di autenticazione)
    if (password === passwordSegreta) {
        res.send('Accesso riuscito!');
    } else {
        res.status(401).send('Credenziali non valide.');
    }
});

app.listen(port, () => {
    console.log(`Il server è in ascolto sulla porta ${port}`);
});
