import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/api/produtos.json");

  if (!response.ok) {
    throw new Error("Erro ao buscar os produtos.");
  }

  const data = await response.json();

  return data.products ?? [];
}