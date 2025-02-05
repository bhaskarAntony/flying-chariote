import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function PaymentPage() {
    const navigate = useNavigate();
    const handlePaymentDone = () => {
        navigate('/order-success');
    };

    return (
        <Container className="p-3 p-md-5">
           <div className="row">
            <div className="col-md-5 m-auto">
            <Card className="shadow p-4 text-center">
                <h2 className="mb-4">Payment Page</h2>
                <p className="text-muted">Choose your preferred payment method:</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Check type="radio" label="Credit/Debit Card" name="paymentMethod" />
                        <Form.Check type="radio" label="UPI Payment" name="paymentMethod" />
                        <Form.Check type="radio" label="Cash on Delivery" name="paymentMethod" />
                    </Form.Group>
                    <Button variant="success" className="w-100 p-2" onClick={handlePaymentDone}>Complete Payment</Button>
                </Form>
            </Card>
            </div>
           </div>
        </Container>
    );
}
