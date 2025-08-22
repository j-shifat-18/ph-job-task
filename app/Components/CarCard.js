"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CarCard({ car }) {
  const router = useRouter();

  return (
    <div
      className="w-full"
    >
      <div className="overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl transition">
        {/* Car Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={car.image}
            width={400}
            height={400}
            alt={`${car.brand} ${car.model}`}
            className="h-full w-full object-cover transform hover:scale-110 transition duration-300"
          />
          <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-lg">
            {car.year}
          </span>
        </div>

        {/* Car Content */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">
              {car.brand} <span className="font-normal">{car.model}</span>
            </h2>
            <p className="text-lg font-semibold text-green-600">
              ${car.price.toLocaleString()}
            </p>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">
            {car.description}
          </p>

          <div className="flex justify-between items-center text-gray-500 text-sm">
            <span>🚙 {car.mileage}</span>
            <span>📅 {car.year}</span>
          </div>

          {/* Button */}
          <button
            onClick={() => router.push(`/browse-cars/${car._id}`)}
            className="mt-3 w-full bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
