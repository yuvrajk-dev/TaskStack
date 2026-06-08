import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import DropDown from "./DropDown";
import ThemeToggleButton from "./ThemeToggleButton";
import { useNavigate } from "react-router";

const Navbar = ({ username, email }) => {
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();

  return (
    <nav
      className="
        w-full h-16 px-8
        flex justify-between items-center
        border-b
        border-(--border)
        bg-(--surface)
      "
    >
      {/* Logo */}
      <h1 className="text-xl font-bold " onClick={() => navigate("dashboard")}>
        TaskStack
      </h1>

      {/* Profile Dropdown */}
      <div className="relative flex justify-center gap-3 items-center    ">
        <ThemeToggleButton />

        <button
          onClick={() => setDropDown((prev) => !prev)}
          className="
          
            flex items-center gap-3
            px-3 py-2
            rounded-2xl
            hover:bg-(--bg)
            transition
          "
        >
          {/* Avatar */}
          <div
            className="
            
              w-9 h-9
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

          {/* User Info */}
          <div className="text-left hidden sm:block ">
            <p className="text-sm font-medium capitalize">{username}</p>
            {/* <p className="text-xs text-(--text-muted)">@yuvraj</p> */}
          </div>

          {dropDown ? (
            <RiArrowUpSLine size={20} className="text-(--text-muted)" />
          ) : (
            <RiArrowDownSLine size={20} className="text-(--text-muted)" />
          )}
        </button>

        {dropDown && (
          <DropDown
            setDropDown={setDropDown}
            username={username}
            email={email}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
