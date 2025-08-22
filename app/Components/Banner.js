import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Find Your Dream Car</h1>
          <p className="mb-5">
            Explore a wide range of cars, from sleek sports models to reliable
            family vehicles. Browse, compare, and find the perfect car for your
            lifestyle today.
          </p>
          <Link
            href="browse-cars"
            className="btn shadow-none border-none text-white bg-red-500 hover:bg-red-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
