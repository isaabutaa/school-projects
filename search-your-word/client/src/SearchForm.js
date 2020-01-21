import React, {useState} from "react"

function SearchForm() {
    const[ searchTerm, setSearchTerm ] = useState("")

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    name="searchTerm" 
                    value={searchTerm} 
                    placeholder="Search Your Word..." 
                    onChange={handleChange} 
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchForm