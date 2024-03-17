import "./authInput.scss";

const AuthInput = ({ title, type = "text", id, icon, state, setState }) => {
  return (
    <div className="parentInput">
      <label className="sub_title" htmlFor={id}>
        {icon}
        <p>{title}</p>
      </label>
      <div className="input">
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          type={type}
          id={id}
          required
        />
      </div>
    </div>
  );
};

export default AuthInput;
