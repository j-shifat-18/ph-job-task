"use client";

import Link from 'next/link';
import React from 'react';


const DreamCarsLogo = () => {
    return (
        <Link href='/' className="text-black font-extrabold text-2xl md:text-3xl">Dream<span className="text-red-600">Cars</span></Link>
    );
};

export default DreamCarsLogo;