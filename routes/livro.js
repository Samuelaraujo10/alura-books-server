const { Router } = require('express')
const { getLivros, getLivro, postLivro } = require('../controller/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

// TODO: Implement patch
router.patch('/', (req, res) => {
    res.send('Você fez uma requisição PATCH')
})

// TODO: Implement delete
router.delete('/', (req, res) => {
    res.send('Você fez uma requisição DELETE')
})



module.exports = router