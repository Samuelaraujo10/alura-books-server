const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('Aqui está seu livro')
})

module.exports = router