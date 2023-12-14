const express = require('express');
const path = require('path');
const db = require('./db')


const app = express();

const PORT = 3000;
const clientPath = path.resolve(__dirname, '../client/dist');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true,}));
app.use(express.static(clientPath));

app.get('/',(req , res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));

});

app.get('/api/links', db.getLinks)

app.post('/api/links', db.createLink);

app.put('/api/links/:id', db.updateLink);

app.delete('/api/links/:id', db.deleteLink);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
