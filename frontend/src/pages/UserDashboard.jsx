import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {
    Menu,
    Bell,
    Settings,
    LogOut,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../Redux/Slice/authSlice';
import OfferForm from "./OfferForm";
import { Modal, Button } from "react-bootstrap";

const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4000 },
    { name: "May", sales: 6000 },
];

function UserDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showOffer, setShowOffer] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await dispatch(logoutUser());
        console.log(res);
        if (res.payload.success) {
            navigate("/");
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-gray-900 text-white w-64 p-6 transition-all duration-300 ease-in-out ${sidebarOpen ? "block" : "hidden"} md:block fixed md:relative h-full`}>
                <h1 className="text-2xl font-bold mb-6">w3CRM</h1>
                <nav className="space-y-4">
                    <button onClick={() => setShowOffer(true)} className="flex items-center space-x-3 w-full py-2 px-4 rounded-md hover:bg-gray-700">
                        <span>Create Offer</span>
                    </button>

                    <button onClick={handleLogout} className="flex items-center space-x-3 w-full py-2 px-4 rounded-md mt-10 text-red-400 hover:bg-red-600 hover:text-white">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </nav>
            </aside>

            {/* Offer Modal */}
            <Modal show={showOffer} onHide={() => setShowOffer(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OfferForm setShowoffer={setShowOffer} />
                </Modal.Body>
            </Modal>

            {/* Main Content */}
            <main className="flex-1 flex flex-col p-6 md:ml-64">
                {/* Navbar */}
                <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-6">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
                        <Menu size={24} />
                    </button>
                    <div className="flex space-x-6">
                        <Bell size={24} className="text-gray-700 cursor-pointer hover:text-gray-900" />
                        <Settings size={24} className="text-gray-700 cursor-pointer hover:text-gray-900" />
                    </div>
                </header>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Total Sales", value: "$15,000", color: "text-blue-600" },
                        { title: "New Users", value: "1,250", color: "text-green-500" },
                        { title: "Orders", value: "320", color: "text-purple-500" },
                    ].map((card, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                            <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
                        </div>
                    ))}
                </div>

                {/* Chart Section */}
                <div className="bg-white p-6 mt-8 shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales Overview</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#888888" />
                            <YAxis stroke="#888888" />
                            <Tooltip />
                            <Bar dataKey="sales" fill="#6366F1" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </main>
        </div>
    );
}

export default UserDashboard;
