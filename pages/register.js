import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Registering...");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const contact = e.target.contact.value;
        const cardno = e.target.cardno.value;
        const expiry = e.target.expiry.value;
        const city = e.target.city.value;
        const state = e.target.state.value;
        const pin = e.target.pin.value;
        e.target.reset();
        console.log(email, password, name, contact, cardno, expiry, city, state, pin);
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                info : {
                    password: password,
                    name: name,
                    contact: contact,
                    cardno: cardno,
                    expiry: expiry,
                    city: city,
                    state: state,
                    pin: pin
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

  return (
    <div style={{
        width: '80%',
        margin: 'auto',
        marginTop: '50px',
    }}>
        <h2>Register</h2>
    <Form onSubmit={handleRegister}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="John Doe" name='name' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control placeholder="9131313131" name='contact' required/>
      </Form.Group>

    <Row>
      <Form.Group as={Col} className="mb-3" controlId="formGridCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control placeholder="1234 5678 9012" name='cardno' required/>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formGridExpiry">
        <Form.Label>Expiry</Form.Label>
        <Form.Control placeholder="01-01-2001" name='expiry' type='date'/>
      </Form.Group>
    </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>City</Form.Label>
          <Form.Control name='city'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" >
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name='state'>
            <option>Choose...</option>
            <option>Karnatka</option>
            <option>Maharashtra</option>
            <option>Bihar</option>
            <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPin" >
          <Form.Label>Pin Code</Form.Label>
          <Form.Control name='pin'/>
        </Form.Group>
      </Row>

      <Button type="submit" style={{
        backgroundColor: 'rgba(157, 0, 255, 0.329)',
        border: 'none',
      }}>
        Register
      </Button>
    </Form>
    </div>
  );
}

export default Register;