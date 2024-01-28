import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import { Home, CompletePurchase } from "./pages"
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
        </Routes>
      </ProductProvider>
    </div>
  </Router>
)
