import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import { Home, CompletePurchase } from "./pages"

export const App: React.FC = () => (
  <Router basename="/app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/purchases" element={<CompletePurchase />} />
    </Routes>
  </Router>
)
