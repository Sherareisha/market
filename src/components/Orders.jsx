import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newOrder, setNewOrder] = useState({
    item: "",
    customer: "",
    date: "",
    total: "",
    status: "Pending",
    paymentStatus: "Unpaid",
  });

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (confirmed) {
      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
    }
  };

  const handleAddOrder = () => {
    if (!newOrder.item || !newOrder.customer || !newOrder.date || !newOrder.total) {
      alert("All fields are required!");
      return;
    }

    const newId = orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1;
    const newOrderData = { ...newOrder, id: newId };

    setOrders([...orders, newOrderData]);
    setNewOrder({ item: "", customer: "", date: "", total: "", status: "Pending", paymentStatus: "Unpaid" });
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!selectedOrder) return;

    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === selectedOrder.id ? { ...selectedOrder } : order))
    );

    setIsEditing(false);
    setSelectedOrder(null);
  };

  const handlePayment = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, paymentStatus: "Paid" } : order
      )
    );
  };

  const handleInputChange = (e, isEditingMode = false) => {
    const { name, value } = e.target;
    if (isEditingMode) {
      setSelectedOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    } else {
      setNewOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">📦 Manage Orders</h2>

      <div className="mb-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-purple-600">Add New Order</h3>
        <input type="text" name="item" placeholder="Item" value={newOrder.item} onChange={handleInputChange} className="border p-2 rounded w-full mb-2" />
        <input type="text" name="customer" placeholder="Customer" value={newOrder.customer} onChange={handleInputChange} className="border p-2 rounded w-full mb-2" />
        <input type="date" name="date" value={newOrder.date} onChange={handleInputChange} className="border p-2 rounded w-full mb-2" />
        <input type="text" name="total" placeholder="Total Price" value={newOrder.total} onChange={handleInputChange} className="border p-2 rounded w-full mb-2" />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleAddOrder}>Add Order</button>
      </div>

      <table className="w-full table-auto text-center border-collapse mb-6">
        <thead>
          <tr className="bg-purple-200 text-white">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Payment</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className={index % 2 === 0 ? "bg-purple-50" : "bg-purple-100"}>
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.item}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">{order.total}</td>
              <td className="px-4 py-2">{order.status}</td>
              <td className="px-4 py-2">{order.paymentStatus}</td>
              <td className="px-4 py-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600" onClick={() => handleEdit(order)}>Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => handleDelete(order.id)}>Delete</button>
                {order.paymentStatus === "Unpaid" && (
                  <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2 hover:bg-blue-600" onClick={() => handlePayment(order.id)}>Mark as Paid</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
