import { useEffect } from "react";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";
import { useState } from "react";
import AuthShimmer from "../shimmer/AuthShimmer";

const PublicRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setLoading(false);
        return;
      }

      if (data.user) {
        navigate("/home", { replace: true });
      }
      setLoading(false);
    };

    init();
  }, [navigate]);

  if (loading) {
    return <AuthShimmer />;
  }

  return children;
};

export default PublicRoutes;
