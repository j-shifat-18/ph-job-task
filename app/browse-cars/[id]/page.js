"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CarDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single car from Express API
  useEffect(() => {
    async function fetchCar() {
      try {
        const res = await fetch(`http://localhost:5000/cars/${id}`);
        const data = await res.json();
        setCar(data);
      } catch (err) {
        console.error("Error fetching car:", err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <p className="text-lg font-medium text-gray-600">Loading car details...</p>
      </div>
    );
  }

  if (!car || car.error) {
    return (
      <div className="flex flex-col items-center h-80 justify-center">
        <p className="text-red-500 text-lg">Car not found.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6"
    >
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Car Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-80 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Car Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {car.brand} <span className="font-normal">{car.model}</span>
            </h1>
            <p className="text-lg text-gray-600 mt-1">Year: {car.year}</p>
            <p className="text-xl font-semibold text-green-600 mt-2">
              ${car.price.toLocaleString()}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Mileage:</span> {car.mileage}
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Description:</span> {car.description}
            </p>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Contact Seller
          </button>
        </div>
      </div>
    </motion.div>
  );
}
