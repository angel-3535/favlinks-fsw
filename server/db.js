const Pool = require('pg').Pool

const pool = new Pool({
    user: 'angel',
    host: 'localhost',
    database: 'linksapi',
    password: '7777',
    port: 5432,
})


const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createLink = (req, res) => {
    const { name, url } = req.body;

    pool.query('INSERT INTO favlinks (name, url) VALUES($1, $2)', [name, url], (error, results) => {
        if (error) {
            throw error
        }
            res.status(201).send('Link created successfully');
        
    })
}

const updateLink = (req, res) => {
    const id = req.params.id;
    const { name, url } = req.body;

    pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3', [name, url, id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Link with ID ${id} updated successfully`)
    })
}

const deleteLink = (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM favlinks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Link with ID ${id} deleted successfully`)
    })
}

module.exports = {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
}