import './Form.css';

const Form = props => {
  return (<form className="form">
    <p>First Name<input type='text' name="name"/></p>
    <p>Last Name<input type='text' name="name"/></p>
    <p>Credit Card<input type='text' name="card"/></p>

    <button>Submit</button>
  </form>);
}


export default Form;
