import React from 'react';

function ShippingPolicy() {
    return (
        <section className="container py-4">
            <div className="card p-4">
                <h1 className="fw-bold text-center">Shipping Policy</h1>

                <p className="mt-3">
                    At <strong>Flying Chariot Clothing</strong>, we strive to provide you with a seamless and efficient shipping experience. 
                    Please read our shipping policy below for detailed information:
                </p>

                <div className="mt-4">
                    <h4 className="fw-bold">Delivery Timings</h4>
                    <p>
                        <strong>Standard Delivery:</strong> Our products are usually delivered within <strong>5-7 working days</strong> 
                        from the date of order placement. Please note that delivery times may vary based on your location and other external factors.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Shipping Partners</h4>
                    <p>To ensure reliable and timely delivery, we have partnered with the following reputable shipping companies:</p>
                    <ul>
                        <li><strong>Delhivery</strong></li>
                        <li><strong>Amazon Shipping</strong></li>
                        <li><strong>DTDC</strong></li>
                        <li><strong>Shiprocket</strong></li>
                        <li><strong>Xpressbees</strong></li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Order Tracking</h4>
                    <p>
                        Once your order has been shipped, you will receive a confirmation email and text message 
                        with tracking details from the respective shipping partner. You can use these details 
                        to monitor the status and estimated delivery time of your order.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Shipping Charges</h4>
                    <p>
                        Shipping charges, if applicable, will be calculated and displayed at checkout. 
                        The charges may vary based on the shipping destination and the weight of the package.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Delivery Address</h4>
                    <p>
                        Please ensure that the delivery address provided at the time of order placement 
                        is accurate and complete. <strong>Flying Chariot Clothing</strong> is not responsible for delays or 
                        non-delivery due to incorrect or incomplete addresses.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">International Shipping</h4>
                    <p>
                        Currently, we do not offer international shipping. Our services are limited to addresses within India. 
                        For international orders, please contact us through Instagram: <strong>@Flying Chariot ClothingCLOTHING</strong>.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Delivery Delays</h4>
                    <p>
                        While we strive to deliver your order within the specified time frame, unforeseen circumstances such as 
                        weather conditions, transportation delays, or other external factors may affect delivery times. 
                        We appreciate your understanding and patience in such situations.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Contact Us</h4>
                    <p>
                        If you have any questions or concerns regarding your shipment, please feel free to contact 
                        our customer support team. We are here to assist you.
                    </p>
                </div>

                <div className="mt-4 text-center">
                    <h4 className="fw-bold">Thank You!</h4>
                    <p>Thank you for choosing <strong>Flying Chariot Clothing</strong>. We look forward to serving you!</p>
                </div>
            </div>
        </section>
    );
}

export default ShippingPolicy;
