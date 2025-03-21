import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOffer } from '../Redux/Slice/offerSlice';
import OfferModal from './OfferModal';
import { Modal } from 'react-bootstrap';
import OfferForm from './OfferForm';

const ShowOffers = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [showOfferForm, setShowOfferForm] = useState(false);
    const dispatch = useDispatch();
    const offers = useSelector(state => state.offer.offers);

    useEffect(() => {
        dispatch(getAllOffer());
    }, [dispatch]);

    const handleShowOffer = (offer) => {
        setSelectedOffer(offer);
        setShowModal(true);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm">
                <h3 className="mb-0 text-primary fw-bold">Available Offers</h3>
                <button
                    onClick={() => setShowOfferForm(true)}
                    className="btn btn-primary fw-semibold shadow-sm px-4 py-2 rounded-pill 
                   transition-transform hover:scale-105"
                >
                    + Create Offer
                </button>
            </div>


            {/* Offers Container with Wrapping */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Wrap items instead of forcing a horizontal scroll
                    gap: "20px",
                    justifyContent: "center",
                    marginTop: "20px"
                }}
            >
                {offers?.map((offer) => (
                    <div
                        key={offer._id}
                        onClick={() => handleShowOffer(offer)}
                        style={{
                            cursor: "pointer",
                            width: "100%", // Full width on small screens
                            maxWidth: "300px", // Limit width for better responsiveness
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            background: "#fff",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <h4 style={{ marginBottom: "10px", color: "#007bff" }}>{offer.title}</h4>
                        <p style={{ color: "#666", fontSize: "14px", marginBottom: "10px" }}>{offer.description}</p>
                        <span style={{
                            background: "#ffd700",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            fontSize: "14px"
                        }}>
                            {offer.discount}% OFF
                        </span>
                    </div>
                ))}
            </div>

            {/* Offer Modal */}
            {selectedOffer && (
                <OfferModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    offer={selectedOffer}
                />
            )}

            {/* Offer Form Modal */}
            <Modal show={showOfferForm} onHide={() => setShowOfferForm(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OfferForm setShowoffer={setShowOfferForm} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ShowOffers;
