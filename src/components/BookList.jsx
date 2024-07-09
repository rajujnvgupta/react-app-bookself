
import BookCard from "./BookCard"

function BookList({ books, onSeeMore }) {
  return (
    <div className="row">
      {books.map((book) => (
        // <BookCard></BookCard>
        <BookCard  key={book.id} book={book} onSeeMore={onSeeMore}/>
        // <p key={book.id}>{book.volumeInfo.title}</p>
      ))}
    </div>
  );
}

export default BookList;
