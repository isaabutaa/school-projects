import React, {useState, useEffect} from "react"

require("dotenv").config()

export default function App() {
    const [countries, setCountries] = useState([])
    // const [states, setStates] = useState([])
    // const [cities, setCities] = useState([])

    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        getCountries()
    })

    function getCountries() {
        fetch(`https://vschool-cors.herokuapp.com?url=https://api.airvisual.com/v2/countries?key=${apiKey}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res.data)
                setCountries([ ...res.data])
            })
    }

    return (
        <div>
            <form>
                <label>
                    Choose a country:
                    <select>
                        {countries.map(country => <option key={country.country}>{country.country}</option>)}
                    </select>
                    Choose a state:
                    <select>
                        <option></option>
                    </select>
                    Choose a city:
                    <select>
                        <option></option>
                    </select>
                </label>
            </form>
        </div>
    )
}