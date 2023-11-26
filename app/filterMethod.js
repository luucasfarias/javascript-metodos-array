const buttonsFilterBooks = document.querySelectorAll('.btn')

buttonsFilterBooks.forEach(button => {
  button.addEventListener('click', filterBooks)
})

function filterBooks() {
  const currentButtonClicked = document.getElementById(this.id)
  const category = currentButtonClicked.value

  let filteredBooks = books.filter(book => {
    return book.categoria === category
  })

  buildBooksOnView(filteredBooks)
}