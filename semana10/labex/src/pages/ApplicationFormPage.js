import { useHistory } from "react-router"
import { useEffect, useState } from 'react' 
import axios from 'axios'
import { useForm } from '../hooks/useForm'
import ApplicationForm from '../components/ApplicationForm/ApplicationForm'



export const ApplicationFormPage = () => {
    const history = useHistory();

    const [tripList, setTripList] = useState([]);
    const [form, onChange, resetForm] = useForm({name: "", applicationText: "", profession: "", age: null, country: "", select: ""});
    const [country, setCountry] = useState('')
    

    useEffect(() => {
        getTrips()
    }, [form])
 

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips')
        .then(r => setTripList(r.data.trips))
        .catch(err => console.log(err))
    }

    const makePostRequest = (body,id) => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips/${id}/apply`,
        body,
        {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response))
     }


    const onSubmitForm = (e) => {
        e.preventDefault()

        const body = {
            name: form.name, 
            profession: form.profession, 
            age: form.age, 
            applicationText: form.applicationText,
            country: country
        }
        
        makePostRequest(body, form.select)   
    }


    return (
        <>
        <h1>application Form</h1>

        <ApplicationForm tripList={tripList}
                        form={form}
                        country={country}
                        setCountry={setCountry}
                        onChange={onChange}
                        resetForm={resetForm}
                        onSubmitForm={onSubmitForm}
                        />

        <button onClick={history.goBack}>Voltar</button>

        </>
    )
}


// auto complete https://medium.com/how-to-react/create-an-autocomplete-input-box-in-react-js-46724fe6e417