import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


// simple form component, functionality handled by react-bootstrap
const Login = () => {
    return (
        <Form>
            <h5 className="display-5 text-danger ms-3">Login</h5>
            <Form.Group className="border border-danger rounded m-3 p-2">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" />
                <div className="d-flex flex-row justify-content-between">
                    <Button className="my-2" variant="danger" type="submit" disabled={"disabled"}>Login</Button>
                    <p className="text-secondary" style={{ fontSize: "10pt", margin: "7px 0 0 0", maxWidth: "90px" }}><strong className="text-danger">*</strong>demo - login disabled</p>
                </div>
            </Form.Group>
        </Form>
    )
}

export default Login