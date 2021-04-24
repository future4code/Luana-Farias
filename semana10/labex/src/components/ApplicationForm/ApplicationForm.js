
import { Hint } from 'react-autocomplete-hint'
import { countries } from '../../utils/countries' 

const ApplicationForm = (props) => {

    // const [country, setCountry] = useState('')

    const tripList = props.tripList
    const form = props.form
    const country = props.country
    const setCountry = props.setCountry
    const onChange = props.onChange
    const resetForm = props.resetForm
    const onSubmitForm = props.onSubmitForm

   

        //renderiza viagens no select
        const renderSelect = tripList.map(item => {
            return (
                <option key={item.id} value={item.id}>{item.name}</option> //coloquei o id no value
            )
        })

      //map no array de países do outro arquivo
      const renderCountries = countries.map(res => res.nome_pais)
    
      //filtra o array de países
      const filteredList = renderCountries.filter(item => {
          return item.toLowerCase().includes(form.country.toLowerCase())
          })
  
      // guarda o array de paises pro compontente Hint usar
      const options = filteredList

    return (
        <>
        <form onSubmit={onSubmitForm}>

            {tripList ? ( 
            <select name="select" value={form.select} onChange={onChange}> 
            <option>Selecione a viagem</option>
            {renderSelect} 
            </select> 
            ) : ( 
                "carregando...") }

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

        </form>
        </>
    )
}

export default ApplicationForm;