"use client";
import { useState } from "react";

export default function AddCarForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess("✅ Car added successfully!");
      setFormData({
        brand: "",
        model: "",
        year: "",
        price: "",
        mileage: "",
        description: "",
        image: "",
      });
    } else {
      setSuccess("❌ Failed to add car.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Add a Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="brand"
          placeholder="Brand (e.g., Toyota)"
          value={formData.brand}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="model"
          placeholder="Model (e.g., Corolla)"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="number"
          name="year"
          placeholder="Year (e.g., 2022)"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="number"
          name="price"
          placeholder="Price (e.g., 18000)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="mileage"
          placeholder="Mileage (e.g., 25,000 km)"
          value={formData.mileage}
          onChange={handleChange}
        />
        <textarea
          className="w-full border p-2 rounded"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          {loading ? "Adding..." : "Add Car"}
        </button>
      </form>
      {success && <p className="mt-4 text-center">{success}</p>}
    </div>
  );
}
