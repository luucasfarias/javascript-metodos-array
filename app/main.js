let books = []
const URL_API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBooks()

async function getBooks() {
  const result = await fetch(URL_API)

  books = await result.json();
  
  let discountedBooks = applyDiscountBooks(books)

  buildBooksOnView(discountedBooks)
}
