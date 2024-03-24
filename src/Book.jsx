const Book = ({ img, title, author }) => {
  return (
    <section className='book'>
      <img src={img} alt='' />
      <h1>title {title} </h1>
      <h4>author {author}</h4>
    </section>
  )
}

export default Book