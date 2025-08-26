import { Link, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Button from './components/atoms/Button'
import { useThemeStore } from './store/useThemeStore'

/**
 * App component
 * -------------
 * Sets up routing and demonstrates Zustand for theme state.
 */
export default function App() {
  const { theme, toggle } = useThemeStore()

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        background: theme === 'light' ? '#fff' : '#202124',
        color: theme === 'light' ? '#202124' : '#fff',
        minHeight: '100vh',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
          background: '#4285F4',
          color: '#fff',
        }}
      >
        <nav style={{ display: 'flex', gap: 16 }}>
          {/* React Router links */}
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Products
          </Link>
          <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
            Cart
          </Link>
        </nav>
        {/* Using Zustand global state */}
        <Button onClick={toggle} style={{ background: '#0F9D58' }}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  )
}
