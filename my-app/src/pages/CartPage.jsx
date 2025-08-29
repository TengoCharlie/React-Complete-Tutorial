import { useCart } from '../context/CartContext'
import Button from '../components/atoms/Button'

/**
 * Page: Cart
 * -----------
 * Reads global state from Context and renders items.
 */
export default function CartPage() {
  const { items, removeFromCart } = useCart()

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 && <p>No items yet.</p>}
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: 8 }}>
          {item.title}{' '}
          <Button style={{ background: '#DB4437' }} onClick={() => removeFromCart(item.id)}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  )
}
