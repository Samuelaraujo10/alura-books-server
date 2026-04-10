function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse( fs.readFileSync('favoritos.json') )

    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync('Favoritos.json', JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync('livros.json') )
    const favoritos = JSON.parse( fs.readFileSync('favoritos.json') )

    const livroIserido = livros.find( livro => livro.id === id )
    const novaListaLivrosFavoritos = [...favoritos, livroIserido]
    fs.writeFileSync('Favoritos.json', JSON.stringify(novaListaLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito,
}