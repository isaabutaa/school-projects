import React, {useState} from "react"

function SearchForm(props) {
    const[ searchTerm, setSearchTerm ] = useState("")
    const [ toggleSearch, setToggleSearch ] = useState(true)

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(toggleSearch) {
            props.searchDictionary(searchTerm)
        } else if(!toggleSearch) {
            props.searchThesaurus(searchTerm)
        }
        setSearchTerm("")
    }

    function handleDictionaryClick() {
        setToggleSearch(true)
    }

    function handleThesaurusClick() {
        setToggleSearch(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text" 
                    name="searchTerm" 
                    value={searchTerm} 
                    placeholder="Search Your Word..." 
                    onChange={handleChange} 
                />
                <button 
                style={{background: toggleSearch ? "royalblue" : "crimson"}} 
                className="button search-btn">
                    Search
                </button>
            </form>
            <div className="btns">
                <button className="button dictionary-btn" onClick={handleDictionaryClick}>Dictionary</button>
                <button className="button thesaurus-btn" onClick={handleThesaurusClick}>Thesaurus</button>
            </div>
        </div>
    )
}

export default SearchForm