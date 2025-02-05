import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function OrderSuccess() {
    return (
        <Container className="p-3 p-md-5 text-center">
         <div className="row">
            <div className="col-md-5 m-auto">
            <Card className="shadow p-5 text-center">
                <img src="https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif" alt="" className="w-100" />
                <h2 className="text-success">Order Successful</h2>
                <p className="text-muted">Thank you for your purchase! Your order will be delivered soon.</p>
                <div className="text-center">
                <Button variant="dark" className="w-50" href="/">Go to Home</Button>
                </div>
            </Card>
            </div>
         </div>
        </Container>
    );
}