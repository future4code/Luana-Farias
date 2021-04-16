import { useHistory } from "react-router"
import { useEffect, useState } from 'react' 
import axios from 'axios'
import { useForm } from '../hooks/useForm'
import { countries } from '../utils/countries'
import { Hint } from 'react-autocomplete-hint'



export const ApplicationFormPage = () => {
    const history = useHistory();

    const [tripList, setTripList] = useState([]);
    const [form, setForm, onChange, resetForm] = useForm({name: "", applicationText: "", profession: "", age: null, country: "", select: ""});
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
        e.preventDefault();

        const body = {
            name: form.name, 
            profession: form.profession, 
            age: form.age, 
            applicationText: form.applicationText,
            country: country
        }

        makePostRequest(body, form.select)

        
    }

    //renderiza viagens no select
    const renderSelect = tripList.map(item => {
        return (
            <option value={item.id}>{item.name}</option> //coloquei o id no value
        )
    })

    //map no array de países do outro arquivo
    const con = countries.map(res => res.nome_pais)
    
    //filtra o array de países
    const filteredList = con.filter(item => {
        return item.toLowerCase().includes(form.country.toLowerCase())
        })

    // guarda o array de paises pro compontente Hint usar
    const options = filteredList

    console.log(form.select)

    return (
        <>
        <h1>application Form</h1>

        <form onSubmit={onSubmitForm}>

            {tripList ? ( <select name="select" value={form.select} onChange={onChange}> {renderSelect} </select> ) : ( "carregando...") }
        
            <input type="text" placeholder={"Nome"} name="name" onChange={onChange}/>

            <input type="text" placeholder="Profissão" name="profession" onChange={onChange}/>

            <input type="number" placeholder="Idade" name="age" onChange={onChange} />

            <Hint 
                options={options} allowTabFill>
                    <input value={country}
                            placeholder="País"
                            name="country"
                            onChange={e => setCountry(e.target.value)} 
                    />
            </Hint>

            <textarea name="applicationText" onChange={onChange}></textarea>

            <button>Enviar</button>

          {/* <select>
              <option>País</option>
              {renderCountries}
          </select> */} 
        </form>
        <button onClick={() => history.goBack()}>voltar</button>
        </>
    )
}


// auto complete https://medium.com/how-to-react/create-an-autocomplete-input-box-in-react-js-46724fe6e417