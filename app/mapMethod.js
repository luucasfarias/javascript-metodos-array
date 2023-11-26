function applyDiscountBooks(books) {
  const discountedBooks = books.map(book => {
    return {...book, preco: calculateDiscount(book.preco)}
  })

  return discountedBooks
}

function calculateDiscount(priceBook) {
  const discount = 0.3

  return (priceBook - (priceBook * discount)).toFixed(2)
}