import SearchBar from "./SearchBar"

function NavBar({onSearch}){
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BookShelf</a>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    )
}

export default NavBar