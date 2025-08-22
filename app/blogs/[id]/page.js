import Button from "@/app/Components/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import skyTower from "@/public/Images/Screenshot 2025-07-26 140144.png";

export default function BlogDetails({ params }) {
  const { id } = params;

  if (id === "3") {
    notFound();
  }
  return (
    <div>
      <p className="mb-5">The blog id is {id}</p>

      <Button></Button>

      <div className="w-[400px]">
        <Image placeholder="blur" className="mt-5" src={skyTower} alt="skyTower image"></Image>
      </div>
    </div>
  );
}
