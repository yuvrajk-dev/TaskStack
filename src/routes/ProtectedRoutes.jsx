import { useEffect } from "react";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";
import HomeShimmer from "../shimmer/HomeShimmer";
import { useState } from "react";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        navigate("/auth", { replace: true });
      } else {
        setLoading(false);
      }
    };

    init();
  }, [navigate]);

  if (loading) {
    return <HomeShimmer />;
  }

  return children;
};

export default ProtectedRoutes;
