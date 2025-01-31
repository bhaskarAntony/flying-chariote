import React from 'react';

function RefundPolicy() {
    return (
        <section className="container py-4">
            <div className="card p-4">
                <h1 className="fw-bold text-center">Refund Policy</h1>

                <p className="mt-3">
                    At <strong>Flying Chariot Clothing</strong>, we recognize that you might occasionally need to return or exchange a product.
                    To maintain the highest standards of quality and ensure the convenience of our community, we have
                    implemented a strict quality check procedure for all returns and exchanges. Please read the detailed
                    policy below to understand our return and exchange processes better.
                </p>

                <div className="mt-4">
                    <h4 className="fw-bold">Initiation Window</h4>
                    <p>Exchanges can be initiated within <strong>48 hours</strong> of delivery.</p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">How to Initiate</h4>
                    <p>
                        To start an exchange, please navigate to the <strong>‘My Orders’</strong> section under the
                        <strong> ‘My Account’</strong> page and click on the return option.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Tote Bags Policy</h4>
                    <p><strong>No Return/Exchange:</strong> Tote Bags are not eligible for return, exchange, or refund, except in cases of manufacturing defects.</p>
                    <p><strong>Defect Procedure:</strong> In the event of a manufacturing defect, you must provide an opening video of the package that clearly shows the invoice, the opening process, and the defect.</p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Quality Check and Charges</h4>
                    <ul>
                        <li><strong>Hygiene Standards:</strong> All exchanged items will undergo a quality check by our team.</li>
                        <li><strong>Approval Process:</strong> Exchanges will be approved or declined based on the quality check.</li>
                        <li><strong>Exchange Fee:</strong> An exchange fee of <strong>INR 200/-</strong> will be charged.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Conditions for Non-Acceptance</h4>
                    <p>We reserve the right to refuse exchanges if:</p>
                    <ul>
                        <li>The products have been <strong>used</strong>.</li>
                        <li>The products are <strong>damaged</strong>.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Refund Processing</h4>
                    <p>
                        Once we receive the returned item and it passes the quality check, we will process the refund
                        within <strong>2 business days</strong>, credited to the <strong>Wallet only</strong>.
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="fw-bold">Return Limit</h4>
                    <p>
                        Returns are limited to <strong>size changes or product exchanges only</strong>; cash or bank refunds
                        are not available. Each item can be returned or exchanged only once.
                    </p>
                    <p>
                        For any further questions or assistance, please contact our customer support team.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RefundPolicy;
