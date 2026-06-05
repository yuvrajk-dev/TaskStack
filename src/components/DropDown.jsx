import React from "react";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

const DropDown = ({ username, email }) => {
  const navigate = useNavigate();

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
      <button
        className="   w-full
                text-left
                px-4 py-3
                text-sm
                hover:bg-(--bg)
                transition
             
              "
      >
        Profile
      </button>

      <button
        className="
                w-full
                text-left
                px-4 py-3
                text-sm
                hover:bg-(--bg)
                transition
              "
      >
        Settings
      </button>

      <button
        onClick={async () => {
          const { error } = await supabase.auth.signOut();
          if (error) {
            console.log(error.message);
          } else {
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
