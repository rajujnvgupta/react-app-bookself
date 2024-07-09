import SearchBar from "./SearchBar"
function BookCard({book, onSeeMore}) {
    const {
        title = 'no title available',
        authors = ['unknown authors'],
        imageLinks = {},
        discription = 'no discription',
    } = book.volumeInfo
    const thumbnail = imageLinks.thumbnail || 'https://placehold.co/189x280'
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={thumbnail} alt={title}></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{authors.join(", ")}</p>
                    <button onClick={() => onSeeMore(book)} className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard;