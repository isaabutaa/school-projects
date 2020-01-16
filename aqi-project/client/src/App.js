import React, {useState, useEffect} from "react"
import countries from "./countries"
import axios from "axios"

require("dotenv").config()

export default function App() {
    const [country, setCountry] = useState("")
    const [states, setStates] = useState([])
    // const [cities, setCities] = useState([])
    // const [city, setCity] = useState("")
    // useState: mySearch { country, state, city }

    // const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        

        
    }, [country, states])
    
    // function handleCountryChange(e) {
    //     console.log(e.target.value)
    //     setCountry(e.target.value)
    //     getStates()
    // }

    // function getCountries() {
    //     axios.get("/countries/")
    //         .then(res => setCountries([...res.data.data]))
    //         .catch(err => console.log(err, "this is an error getCountries"))
    // }

    // function getStates() {
    //     axios.get(`/states/${country}`)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err, "this is an error in getStates"))
    // }

    // function getCities() {
    //     axios.get("/cities")
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err, "this is an error in getCities"))
    // }

    const countryOptions = countries.map(place => {
        const country = place.country
        return (
            <option key={country} value={country}>{country}</option>
        )
    })

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
                        {countryOptions}
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