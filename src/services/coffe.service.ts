import type { Coffee } from "../interfaces/coffee";

export const getAllCoffees = async () => {
  const url = import.meta.env.API_URL;
  const request = await fetch(url);
  const response: Coffee[] = await request.json();
  return response;
}

export const getAvailableCoffees = async () => {
  const coffees = await getAllCoffees();
  const availableCoffees = coffees.filter(({ available }) => available === true);
  return availableCoffees;
} 