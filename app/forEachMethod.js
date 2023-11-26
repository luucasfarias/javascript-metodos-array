const bookElement = document.getElementById('livros')

function buildBooksOnView(books) {
  clearBookList()

  books.forEach(book => {
    bookElement.innerHTML += `
      <div class="livro">
        <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}"/>
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
    `
  });
}

function clearBookList() {
  bookElement.innerHTML = ''
}