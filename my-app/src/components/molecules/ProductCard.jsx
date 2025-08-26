import Button from '../atoms/Button'

/**
 * Molecule: ProductCard
 * ---------------------
 * Combines atoms to display a product.
 * Demonstrates prop drilling and events.
 */
export default function ProductCard({ product, onAdd }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h3>{product.title}</h3>
      {/* Returning events to parent via props */}
      <Button onClick={() => onAdd(product)}>Add to Cart</Button>
    </div>
  )
}
