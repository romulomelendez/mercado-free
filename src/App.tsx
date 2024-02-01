import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import { Home, CompletePurchase, Payment } from "./pages"
import { Header } from "./components"

import { ProductProvider } from "./providers"

export const App: React.FC = () => (
  <Router basename="/app">
    <div className="flex flex-col h-screen">
      <ProductProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchases" element={<CompletePurchase />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
      </ProductProvider>
    </div>
  </Router>
)
