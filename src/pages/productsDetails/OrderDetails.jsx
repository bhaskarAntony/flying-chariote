import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OrderDetails() {
    const navigate = useNavigate();
    const handleProceedToPayment = () => {
        navigate('/payment');
    };

    return (
        <Container className="p-3 p-md-5">
           <div className="row">
            <div className="col-md-5 m-auto">
            <Card className="shadow p-4">
                <h2 className="text-center mb-4">Order Details</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                    <Button variant="dark" className="w-100 p-2" onClick={handleProceedToPayment}>Proceed to Payment</Button>
                </Form>
            </Card>
            </div>
           </div>
        </Container>
    );
}
export default OrderDetails;