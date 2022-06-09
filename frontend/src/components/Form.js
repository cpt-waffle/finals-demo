import './Form.css';

const Form = props => {
  return (<form className="form">
    <p>First Name<input type='text' name="name"/></p>
    <p>Last Name<input type='text' name="name"/></p>
    <button> Submit</button>
  </form>);
}


export default Form;
