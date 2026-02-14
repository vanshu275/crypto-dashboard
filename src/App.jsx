import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transaction/Transaction";
import Contact from "./pages/contact/Contact";


const App = () => {



  return (
    <div className="overflow-hidden h-screen">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
