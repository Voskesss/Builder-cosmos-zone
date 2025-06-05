import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

const Index = () => {
  const navigate = useNavigate();

  // Redirect to ApplicationView by default to showcase the new component
  useEffect(() => {
    navigate("/application");
  }, [navigate]);

  return <Dashboard />;
};

export default Index;
