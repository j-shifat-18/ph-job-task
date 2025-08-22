import CarCard from "../Components/CarCard";

const Pets = async () => {

  const data = await fetch('https://ph-job-task-server-three.vercel.app/cars')
  const cars = await data.json()

    return (
        <div className="max-w-7xl mx-auto my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
            cars.map(car=> <CarCard key={car._id} car={car}></CarCard>)
          }
          </div>
          
        </div>
    );
};

export default Pets;