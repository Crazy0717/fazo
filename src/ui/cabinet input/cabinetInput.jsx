import "./cabinetInput.scss"

const cabinetInput = ({ state, setState, title, change, isPhoneNumber, placeholder="" }) => {
  return (
    <div className="cabinetInput">
      <h3>
        {title}: {isPhoneNumber ? "+" : ""}
        <input
          type={isPhoneNumber ? "number" : "text"}
          disabled={change ? false : true}
          value={state}
          onChange={(e) => setState(e.target.value)}
          id={title}
          placeholder={placeholder}
        />
      </h3>
    </div>
  )
}

export default cabinetInput
