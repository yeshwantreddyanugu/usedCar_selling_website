import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export interface Car {
  id: number;
  name: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
  featured: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Sporty Red SUV",
    year: 2022,
    price: 28500,
    mileage: 24000,
    fuelType: "Petrol",
    transmission: "Automatic",
    image: car1,
    featured: true,
  },
  {
    id: 2,
    name: "BMW 4 Series Coupe",
    year: 2021,
    price: 42000,
    mileage: 18500,
    fuelType: "Petrol",
    transmission: "Automatic",
    image: car2,
    featured: true,
  },
  {
    id: 3,
    name: "Tesla Model 3",
    year: 2023,
    price: 38900,
    mileage: 12000,
    fuelType: "Electric",
    transmission: "Automatic",
    image: car3,
    featured: true,
  },
  {
    id: 4,
    name: "Mercedes AMG Coupe",
    year: 2022,
    price: 55000,
    mileage: 15000,
    fuelType: "Petrol",
    transmission: "Automatic",
    image: car4,
    featured: true,
  },
  {
    id: 5,
    name: "Audi A4 Sedan",
    year: 2021,
    price: 32500,
    mileage: 28000,
    fuelType: "Diesel",
    transmission: "Automatic",
    image: car5,
    featured: false,
  },
  {
    id: 6,
    name: "Jeep Wrangler",
    year: 2020,
    price: 36000,
    mileage: 35000,
    fuelType: "Petrol",
    transmission: "Manual",
    image: car6,
    featured: false,
  },
];
