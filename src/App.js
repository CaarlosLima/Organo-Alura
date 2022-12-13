import { useState } from 'react'
import { Banner } from './components/Banner'
import { Form } from './components/Form'
import { Team } from './components/Team'

function App() {
  const teams = [
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Sciense',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [cards, setCards] = useState([])

  const onSubmit = card => {
    setCards([...cards, card])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        onSubmit={card => onSubmit(card)}
        teams={teams.map(team => team.name)}
      />
      {teams.map(team => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          cards={cards.filter(card => card.team === team.name)}
        />
      ))}
    </div>
  )
}

export default App
