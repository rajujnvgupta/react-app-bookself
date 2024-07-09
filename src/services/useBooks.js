import { useEffect, useState } from "react";
 import fetchBooks from "./api-client";
function useBooks(initialQuery){   
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState(initialQuery)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const contoller = new AbortController();
        async function fetchBooksData(query){
            setLoading(true)
            try{
                const items = await fetchBooks(query, contoller)
                setBooks(items)
            }catch(error){
                if(error.name !== 'AbortError'){

                }
            }finally {
                setLoading(false)
            }
        }
        if(searchTerm){
            fetchBooksData(searchTerm)
        }
        // return () => {contoller.abort();}
    }, [searchTerm]);
    return {books, loading, setSearchTerm}
}

export default useBooks;

