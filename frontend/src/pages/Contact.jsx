import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function SupportForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        contactNumber: '',
        email: '',
        enquiryType: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form Values:', formValues);

        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitted(true);
    };

    return (
        <Container style={{ maxWidth: '350px', marginTop: '1rem', marginBottom: '1rem', padding: '1rem', backgroundColor: '#fff', borderRadius: '0.3rem', boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)' }}>
            {!isSubmitted ? (
                <>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem' }}>Support</h2>
                    <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                        <Row className="mb-2 w-100">
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    required
                                    style={{ fontSize: '0.9rem', borderRadius: '0.25rem', padding: '0.5rem' }}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-2 w-100">
                            <Col>
                                <Form.Control
                                    type="tel"
                                    name="contactNumber"
                                    value={formValues.contactNumber}
                                    onChange={handleInputChange}
                                    placeholder="Contact Number"
                                    required
                                    style={{ fontSize: '0.9rem', borderRadius: '0.25rem', padding: '0.5rem' }}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-2 w-100">
                            <Col>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    required
                                    style={{ fontSize: '0.9rem', borderRadius: '0.25rem', padding: '0.5rem' }}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3 w-100">
                            <Col>
                                <Form.Select
                                    name="enquiryType"
                                    value={formValues.enquiryType}
                                    onChange={handleInputChange}
                                    required
                                    style={{ fontSize: '0.9rem', borderRadius: '0.25rem', padding: '0.5rem' }}
                                >
                                    <option value="">Enquiring for</option>
                                    <option value="Home Loan">Home Loan</option>
                                    <option value="Disbursement">Disbursement</option>
                                    <option value="After Disbursement">After Disbursement</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mb-3 w-100">
                            <Col>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="message"
                                    value={formValues.message}
                                    onChange={handleInputChange}
                                    placeholder="Message"
                                    required
                                    style={{ fontSize: '0.9rem', borderRadius: '0.25rem', padding: '0.5rem', width: '100%' }}
                                />
                            </Col>
                        </Row>

                        <Button
                            variant="primary"
                            type="submit"
                            style={{ width: '100%', fontSize: '0.9rem', borderRadius: '0.25rem', padding: '0.5rem', backgroundColor: '#007bff', border: 'none' }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                        >
                            Submit
                        </Button>
                    </Form>
                </>
            ) : (
                <div className="text-center">
                    <p>Thank you for contacting us! We will get back to you soon.</p>
                </div>
            )}
        </Container>
    );
}

export default SupportForm;
