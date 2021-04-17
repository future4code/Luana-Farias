
const CreateTrip = (props) => {

    const form = props.form
    const onChange = props.onChange
    const onSubmitForm = props.onSubmitForm

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

export default CreateTrip;