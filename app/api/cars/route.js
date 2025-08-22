let cars = []; // in-memory store

// GET (Read all cars)
export async function GET() {
  return new Response(JSON.stringify(cars), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST (Add new car)
export async function POST(req) {
  const body = await req.json();
  
  const newCar = {
    id: Date.now(),
    brand: body.brand,          
    model: body.model,         
    year: body.year,           
    price: body.price,          
    mileage: body.mileage,   
    description: body.description, 
    image: body.image,          
  };

  cars.push(newCar);

  return new Response(JSON.stringify(newCar), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
