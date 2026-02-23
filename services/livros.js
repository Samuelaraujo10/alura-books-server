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

function modificaLivro(modificacao, id) {
    try {
        let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
        const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

        const conteudoModificado = {...livrosAtuais[indiceModificado], ...modificacao}

        livrosAtuais[indiceModificado] = conteudoModificado
        fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
    } catch (error) {
        throw error
    }
}

function deletaLivro(id) {
    try {
        let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
        

        const indice = livrosAtuais.findIndex(livro => String(livro.id) === String(id))

        if (indice === -1) {
            return
        }

        livrosAtuais.splice(indice, 1)
        fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
    } catch (error) {
        throw error
    }
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}