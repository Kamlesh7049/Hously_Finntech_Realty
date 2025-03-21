import React from 'react';
import { Divide as LucideIcon } from 'lucide-react';

const DashboardCard = ({ title, value, change, isPositive, Icon, color, gradient }) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <p className="text-muted mb-1">{title}</p>
          <h3 className="fw-bold">{value}</h3>
          <p className={`mt-2 d-flex align-items-center ${isPositive ? 'text-success' : 'text-danger'}`}>
            <span className="fs-5 me-1">{isPositive ? '↑' : '↓'}</span>
            {change}
          </p>
        </div>
        <div className={`rounded-circle d-flex align-items-center justify-content-center ${gradient}`} style={{ width: '56px', height: '56px', backgroundColor: color }}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
