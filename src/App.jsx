import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import GiftCardRates from "./pages/GiftCardRates";
import Redemptions from "./pages/Redemptions";
import Transactions from "./pages/Transactions";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/giftcard-rates" element={<GiftCardRates />}/>
          <Route path="/redemptions" element={<Redemptions />}/>
          <Route path="/transactions" element={<Transactions />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
