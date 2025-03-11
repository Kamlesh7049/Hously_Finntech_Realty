import { Button } from 'bootstrap'
import React from 'react'
import { Modal } from 'react-bootstrap'

function Signup() {
    return (
        <div>
            {/* Admin Login Modal */}
            <Modal show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>Admin Login Area</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        {['userName', 'email', 'mobileNumber', 'password'].map((field, idx) => (
                            <div className="form-group mb-3" key={idx}>
                                <label style={{ fontWeight: "500" }}>Enter {field}:</label>
                                <input
                                    type={field === 'password' ? 'password' : field === 'mobileNumber' ? 'number' : 'text'}
                                    className="form-control"
                                    value={signupData[field]}
                                    name={field}
                                    onChange={handleInputChange}
                                    placeholder={`Enter ${field}`}
                                />
                            </div>
                        ))}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                            <Button type="submit" variant="primary">Create Account</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Signup
