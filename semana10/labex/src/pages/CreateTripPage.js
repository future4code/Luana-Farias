import axios from "axios"
import { useForm } from "../hooks/useForm"


export const CreateTripPage = () => {

    const [form, setForm, onChange, resetForm] = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})
    
    const token = window.localStorage.getItem("token");

    const createTrip = (body,token) => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips',
        body,
        {
            headers: {
                'Content-Type' : 'application/json',
                auth: token
            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response))
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }

        createTrip(body, token) //esse token vem da const lá em cima q guarda ele.
    }
    
    
    return (
        <>
        <h1>CreateTripPage</h1>
        <form onSubmit={onSubmitForm}>
            <input placeholder="Nome" onChange={onChange} name="name" value={form.name}/>

            <select onChange={onChange} name="planet" value={form.planet}>
                <option value="Marte">Marte</option>
                <option value="Vênus">Vênus</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Terra">Terra</option>
                <option value="Júpiter">Júpiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
            </select>

            <input id="date" type="date" onChange={onChange} name="date" value={form.date}></input>

            <input placeholder="Duração de dias" onChange={onChange} name="durationInDays" value={form.durationInDays}/>

            <textarea onChange={onChange} name="description" value={form.description}></textarea>

            <button>Criar</button>
        </form>
        </>
    )
}

