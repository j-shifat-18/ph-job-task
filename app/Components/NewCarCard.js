"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NewCarCard({ car }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
    >
      {/* Car Image */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Featured Badge */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
        ⭐ Featured
      </span>

      {/* Car Info */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h2 className="text-2xl font-bold">
          {car.brand} {car.model}
        </h2>
        <p className="text-sm opacity-90">{car.year} • {car.mileage}</p>
        <p className="mt-1 text-lg font-semibold text-yellow-300">
          ${car.price.toLocaleString()}
        </p>
        <button
          onClick={() => router.push(`/browse-cars/${car._id}`)}
          className="mt-3 bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
