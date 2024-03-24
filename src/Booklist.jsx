import Yash1 from "./Book"
import { books } from "./data"

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, i) => {
        return <Yash1 {...book} key={i} />
      })}
    </section>
  )
}

export default BookList