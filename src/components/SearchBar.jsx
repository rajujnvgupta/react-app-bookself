import { useState } from "react"


function SearchBar({onSearch}) {
    
    const [searchTerm, setSearchTerm] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        console.log('search term', searchTerm)
        onSearch(searchTerm)
        setSearchTerm("")
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <input className="form-control me-3" type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="search book"/>
        </form>
    )
}

export default SearchBar