import React, {useState, useEffect} from "react"
import axios from "axios"

require("dotenv").config()

export default function App() {
    const [countries, setCountries] = useState([])
    // const [country, setCountry] = useState("")
    // const [states, setStates] = useState([])
    // const [cities, setCities] = useState([])

    // const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        getCountries()
    }, [])
    
    // function handleCountryChange(e) {
    //     setCountry(e.target.value)
    //     getCities()
    // }

    function getCountries() {
        axios.get("/")
            .then(res => console.log(res))
            .catch(err => console.log(err, "this is an error"))
    }

    // function getCities() {
    //     fetch(`https://vschool-cors.herokuapp.com?url=https://api.airvisual.com/v2/states?country=${country}key=${apiKey}`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setStates([...res.data])
    //         })
    // }

    // const countryOptions = countries.map(place => {
    //     const country = place.country
    //     return (
    //         <option key={country} value={country}>{country}</option>
    //     )
    // })

    // const stateOptions = states.map(place => {
    //     const state = place.state
    //     return (
    //         <option key={state} value={state}>{state}</option>
    //     )
    // })

    return (
        <div>
            <form>
                <label>
                    Choose a country:
                    <select>
                        {/* {countryOptions} */}
                    </select>
                    Choose a state:
                    <select>
                        {/* {stateOptions} */}
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