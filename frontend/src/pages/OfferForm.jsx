import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { data, useNavigate } from "react-router-dom";
import { createOffer } from "../Redux/Slice/offerSlice";

function OfferForm({ setShowoffer }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth); // Assuming `auth` slice has `loading` and `error`

    const [offerData, setOfferData] = useState({
        title: "",
        desc: "",
    });

    const handleChange = (e) => {
        setOfferData({ ...offerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!offerData.title || !offerData.desc) {
            alert("Please enter both Title and Description.");
            return;
        }

        try {
            const res = await dispatch(createOffer(offerData))
            console.log(res)
        } catch (err) {
            console.error("Offer creation failed:", err);
        }
    };

    const handleClose = () => {
        setShowoffer(false);
        setOfferData({ title: "", desc: "" });
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Create a New Offer</h2>
            <p className="text-gray-500 text-sm mb-4">
                Provide details for the new offer below.
            </p>

            <Form>
                {/* Title Field */}
                <Form.Group controlId="offerTitle" className="mb-3">
                    <Form.Label className="font-medium text-gray-700">Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={offerData.title}
                        onChange={handleChange}
                        placeholder="Enter offer title"
                        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                </Form.Group>

                {/* Description Field */}
                <Form.Group controlId="offerDesc" className="mb-3">
                    <Form.Label className="font-medium text-gray-700">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="desc"
                        value={offerData.desc}
                        onChange={handleChange}
                        placeholder="Enter offer description"
                        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                </Form.Group>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </Form>

            {/* Modal Footer */}
            <Modal.Footer className="mt-4 flex justify-end space-x-2">
                <Button variant="secondary" onClick={handleClose} disabled={loading} className="px-4 py-2">
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all"
                >
                    {loading ? "Creating..." : "Create Offer"}
                </Button>
            </Modal.Footer>
        </div>
    );
}

export default OfferForm;
