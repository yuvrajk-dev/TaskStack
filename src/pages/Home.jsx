import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import supabase from "../utils/supabase";
import HomeShimmer from "../shimmer/HomeShimmer";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const getData = async () => {
    try {
      const {
        data: {
          user: { id, email },
        },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;
      // console.log();

      setEmail(email);

      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", id)
        .single();

      if (error) throw error;
      setId(id);

      if (data) setUsername(data.username);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <HomeShimmer />;
  }

  if (!loading) {
    return (
      <div className="flex flex-col    h-screen ">
        <Navbar username={username} email={email} />
        <Outlet context={[username, id, getData]} />
      </div>
    );
  }
};

export default Home;
