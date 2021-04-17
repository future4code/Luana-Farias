import axios from "axios"
import { useForm } from "../hooks/useForm"
import CreateTrip from '../components/CreateTrip/CreateTrip'


export const CreateTripPage = () => {

    const [form, onChange, resetForm] = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})
    
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
        <CreateTrip 
                    form={form}
                    onChange={onChange}
                    onSubmitForm={onSubmitForm}
                    />
        </>
    )
}

