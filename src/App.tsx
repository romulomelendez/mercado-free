import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import { Home, CompletePurchase } from "./pages"
import { Header } from "./components"

export const App: React.FC = () => (
  <Router basename="/app">
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchases" element={<CompletePurchase />} />
      </Routes>
    </div>
  </Router>
)
