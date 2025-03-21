import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOffer, getAllOffer } from "../Redux/Slice/offerSlice";

const OfferModal = ({ show, onHide, offer }) => {
    if (!offer) return null;

    const dispatch = useDispatch();

    async function handleDeleteOffer() {
        const res = await dispatch(deleteOffer(offer._id));

        if (res?.payload?.success) {
            onHide();  // ✅ Close modal
            dispatch(getAllOffer()); // ✅ Refresh offer list
        }
    }

    async function handleUpdateOffer() {

    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Offer Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{offer.title}</h5>
                <p>{offer.description}</p>
                <p><strong>Discount:</strong> {offer.discount}%</p>
                <p><strong>Valid Until:</strong> {new Date(offer.expiryDate).toLocaleDateString()}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={handleUpdateOffer}>update</Button>
                <Button variant="danger" onClick={handleDeleteOffer}>Delete</Button>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OfferModal;
