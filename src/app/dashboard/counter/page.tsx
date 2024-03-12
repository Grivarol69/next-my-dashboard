import { CartCounter } from "@/shopping-cart/components/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito Compras",
  description: "Contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito</span>

      <CartCounter value={10} />
    </div>
  );
}
