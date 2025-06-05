import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

const Index = () => {
  const navigate = useNavigate();

  // You can uncomment this if you want to redirect to ApplicationView by default
  // useEffect(() => {
  //   navigate('/application');
  // }, [navigate]);

  return <Dashboard />;
};

export default Index;
