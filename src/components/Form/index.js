import { useState } from 'react'
import { Button } from '../Button'
import { GlobalList } from '../GlobalList'
import { InputText } from '../InputText'
import './Form.css'

export const Form = props => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = event => {
    event.preventDefault()
    props.onSubmit({ name, role, image, team })
    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          required={true}
          label="Name"
          placeholder="name"
          value={name}
          onChange={value => setName(value)}
        />
        <InputText
          required={true}
          label="Role"
          placeholder="role"
          value={role}
          onChange={value => setRole(value)}
        />
        <InputText
          label="Image"
          placeholder="url"
          value={image}
          onChange={value => setImage(value)}
        />
        <GlobalList
          required={true}
          label={'Team'}
          items={props.teams}
          value={team}
          onChange={value => setTeam(value)}
        />
        <Button>Generate card</Button>
      </form>
    </section>
  )
}
