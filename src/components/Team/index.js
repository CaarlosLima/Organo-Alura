import { Card } from '../Card'
import './Team.css'

export const Team = props => {
  const css = { backgroundColor: props.secondaryColor }

  return props.cards.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="cards">
        {props.cards.map(card => (
          <Card
            backgroundColor={props.primaryColor}
            key={card.name}
            name={card.name}
            role={card.role}
            image={card.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  )
}
