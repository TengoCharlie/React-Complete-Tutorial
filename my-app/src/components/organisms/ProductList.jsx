import ProductCard from '../molecules/ProductCard'

/**
 * Organism: ProductList
 * ---------------------
 * Larger structures composed of molecules.
 * Receives data via props (prop drilling example).
 */
export default function ProductList({ products, onAdd }) {
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  )
}
