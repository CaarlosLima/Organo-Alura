import './InputText.css'

export const InputText = props => {
  const placeholder = `Type your ${props.placeholder}`

  const onDigit = event => {
    props.onChange(event.target.value)
  }

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onDigit}
        required={props.required}
        placeholder={placeholder}
      />
    </div>
  )
}
