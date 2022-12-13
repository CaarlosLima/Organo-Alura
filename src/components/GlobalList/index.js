import './GlobalList.css'

export const GlobalList = props => {
  return (
    <div className="globalList">
      <label>{props.label}</label>
      <select
        onChange={event => props.onChange(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value="" />
        {props.items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
