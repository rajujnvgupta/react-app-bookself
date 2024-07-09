import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BookList from './components/BookList'
import fetchBooks from './services/api-client'
import useBooks from './services/useBooks'
import BookDetails from './components/BookDetails'
function App() {
  const [selectedBook, setSelectedBook] = useState(null)
  const {books, loading, setSearchTerm} = useBooks('fiction')
  // const [books, setBooks] = useState([])
  // cosnt [MediaQueryList, setQuery] = useState
  //url https://www.googleapis.com/books/v1/volumes?q=javascript
/*
  useEffect(() => {
    fetchData()
    console.log("books", books)
  }, [searchTerm]);
  const fetchData = async () => {
    setLoading(true);
    try{
      const items = await fetchBooks(searchTerm)
      // console.log(data)
      setBooks(items || []);
      // setLoading(false);
    }catch(error){
      if(error.name !== 'AbordError'){
        console.log("Failed to fetch books", error)
      }
    } finally{
      setLoading(false);
    }
    // const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    // const data = await res.json();
  }
*/
  function handleSearch(query){
    setSearchTerm(query);
    console.log("updated search term:", query)
  }

  function handleSeeMore(book){
    setSelectedBook(book)
  }
  function handleCloseModel(){
    setSelectedBook(null)
  }
  return (
    <>
    <NavBar onSearch={handleSearch}/>
    {loading ? (<p class='placeholder-glow display-3 text-body-secondary'> <span class="placeholder col-12">Loading</span></p>): (<BookList books={books} onSeeMore={handleSeeMore}/>)}
    {selectedBook && <p>{selectedBook.volumeInfo.title}</p>}
    <Footer/> 
    {selectedBook && (<BookDetails book={selectedBook} onClose={handleCloseModel}/>)}
    </>
  )
}

export default App
