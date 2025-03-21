import React from 'react';

const orders = [
  {
    id: '#APL-0001',
    customer: 'John Doe',
    product: 'MacBook Pro M2',
    amount: '$2,299.00',
    status: 'Completed',
    date: '2024-03-15'
  },
  {
    id: '#APL-0002',
    customer: 'Jane Smith',
    product: 'iPhone 15 Pro',
    amount: '$999.00',
    status: 'Pending',
    date: '2024-03-14'
  },
  {
    id: '#APL-0003',
    customer: 'Robert Johnson',
    product: 'iPad Air',
    amount: '$599.00',
    status: 'Processing',
    date: '2024-03-14'
  },
  {
    id: '#APL-0004',
    customer: 'Emily Davis',
    product: 'AirPods Pro',
    amount: '$249.00',
    status: 'Completed',
    date: '2024-03-13'
  },
  {
    id: '#APL-0005',
    customer: 'Michael Wilson',
    product: 'Apple Watch',
    amount: '$399.00',
    status: 'Processing',
    date: '2024-03-13'
  }
];

const tableHeaders = ['Order ID', 'Customer', 'Product', 'Amount', 'Date', 'Status'];

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed':
      return 'badge bg-success';
    case 'Pending':
      return 'badge bg-warning text-dark';
    default:
      return 'badge bg-primary';
  }
};

const RecentOrders = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Recent Orders</h5>
        <button className="btn btn-link text-decoration-none">View All Orders</button>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="text-primary fw-bold">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td className="fw-semibold">{order.amount}</td>
                  <td className="text-muted">{order.date}</td>
                  <td>
                    <span className={getStatusClass(order.status)}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
