import React from 'react';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Suppliers', 'Manufacturers', 'Distributors', 'Pharmacies'].map((section) => (
          <div key={section} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <p className="text-gray-600">Manage all {section.toLowerCase()} here.</p>
            <button className="mt-4 btn-primary">View {section}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
