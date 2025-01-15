// import React from 'react';

const CustomersDashboard = () => {
    return (
      <div className="bg-gray-100 min-h-screen p-8 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-blue-500 w-8 h-8 rounded-full mr-2"></div> {/* Placeholder for logo */}
            <span className="text-xl font-bold">Delex</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Maureen</span>
            <div className="bg-gray-300 w-6 h-6 rounded-full"></div> {/* Placeholder for user avatar */}
            <span className="text-sm ml-1">Sales Manager</span>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-white rounded-lg p-4 shadow">
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Dashboard</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Products</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Customers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Orders</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Promotion</a></li>
              <li>
                  <details>
                      <summary className="text-gray-700 hover:text-blue-500">Files</summary>
                      <ul className="pl-4 space-y-1">
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">Affiliates</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">Marketing</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">Advertising</a></li>
                      </ul>
                  </details>
              </li>
              <li>
                  <details>
                      <summary className="text-gray-700 hover:text-blue-500">Channels</summary>
                      <ul className="pl-4 space-y-1">
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">#general</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">sales-executive</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">#banner-design</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">#email-marketing</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">facebook-ads</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-500">#expenses</a></li>
                      </ul>
                  </details>
              </li>
            </ul>
            <div className="mt-4 p-2 bg-gray-200 rounded-lg flex items-center">
              <div className="bg-gray-400 w-6 h-6 rounded-full mr-2"></div>
              <span className="text-sm">Maureen<br/>Sales Manager</span>
            </div>
          </div>
  
          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Cards */}
              <div className="bg-blue-500 text-white rounded-lg p-4">10% - 35% returns<br/>My Locked Savings<br/>₦3,130,005</div>
              <div className="bg-purple-500 text-white rounded-lg p-4">10% - 35% returns<br/>My Investments<br/>₦200,000</div>
              <div className="bg-blue-500 text-white rounded-lg p-4">10% - 35% returns<br/>My Locked Savings<br/>₦3,130,005</div>
            </div>
  
            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 shadow">Statics (Placeholder for Chart)</div>
              <div className="bg-white rounded-lg p-4 shadow">Earnings (Placeholder for Chart)</div>
            </div>
  
            {/* Table */}
            <div className="bg-white rounded-lg p-4 shadow overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">S/N</th>
                    <th className="p-2">Name</th>
                    {/* ... more table headers */}
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((_, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-100"}>
                      <td className="p-2">{i+1}</td>
                      <td className="p-2">Maureen Dera</td>
                      {/* ... more table data */}
                      <td className="p-2"><input type="checkbox" /></td>
                    </tr>
                  ))}
                  <tr>
                      <td className="p-2"></td>
                      <td className="p-2">Gidson</td>
                      <td className="p-2">Gidson</td>
                      <td className="p-2">Gidson</td>
                      <td className="p-2">Gidson</td>
                      <td className="p-2">Gidson</td>
                      <td className="p-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomersDashboard;