import supabase from "../utils/supabase";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";

const DropDown = ({ username, email, setDropDown }) => {
  const navigate = useNavigate();

  const buttons = [
    { title: "DashBoard", link: "dashboard" },
    { title: "Profile", link: "profile" },
    // { title: "Settings", link: "settings" },
  ];

  return (
    <div
      className="
              absolute
              right-0
              top-full
              mt-2
              w-60
              bg-(--surface)
              border
              border-(--border)
              rounded-2xl
              overflow-hidden
              z-60
              shadow-(--shadow-m)
            "
    >
      {/* Profile Section */}
      <div className="p-4 border-b border-(--border)">
        <div className="  flex items-center gap-3">
          <div
            className="
                
                    w-10 h-10
                    rounded-full
                    bg-(--primary)
                    text-(--bg)
                    flex items-center justify-center
                    font-semibold
                    capitalize
                  "
          >
            {username.charAt(0)}
          </div>

          <div>
            <p className="font-medium capitalize ">{username}</p>
            <p className="text-sm text-(--text-muted)">{email}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}

      {buttons.map((button) => {
        return (
          <NavLink
            key={button.link}
            to={button.link}
            onClick={() => {
              // e.preventDefault();
              setDropDown(false);
            }}
            className={({ isActive }) => `w-full
                text-left
                px-4 py-3
                text-sm
                hover:bg-(--bg)
                transition
                block
                ${isActive ? "bg-(--bg)" : ""}`}
          >
            {button.title}
          </NavLink>
        );
      })}

      <button
        onClick={async () => {
          const { error } = await supabase.auth.signOut();
          if (error) {
            toast.error("Failed to logout");
          } else {
            toast.success("Logged out");
            setDropDown(false);
            navigate("/auth", { replace: true });
          }
        }}
        className="
       w-full
                text-left
                px-4 py-3
                text-sm
                hover:bg-(--warning)/40
                transition
  "
      >
        Logout
      </button>
    </div>
  );
};

export default DropDown;
