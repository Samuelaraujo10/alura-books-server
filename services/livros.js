const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const livroFiltrado = livros.filter(livro => String(livro.id) === String(id))[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    try {
        const livros = JSON.parse(fs.readFileSync('livros.json'))
        const novaListaLivros = [...livros, livroNovo]
        fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros))
    } catch (error) {
        throw error
    }
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}