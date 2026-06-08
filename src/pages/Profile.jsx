import React, { useState } from "react";
import { useOutletContext } from "react-router";

const Profile = () => {
  const [username] = useOutletContext();

  const [currentUsername, setCurrentUsername] = useState(username);
  const [ChangeUsername, setChangeUsername] = useState("");

  return (
    <div className="  flex-1   flex justify-center items-center">
      <div className=" p-5 mx-2 bg-(--surface) rounded-2xl border flex flex-col gap-5  border-(--border) ">
        <div className="flex items-center gap-3 justify-between">
          <span>Current Username</span>
          <div
            value={currentUsername}
            type="text"
            placeholder="current username"
            className="
                  flex
                  justify-center
                  items-center
              h-11
            w-40
            cursor-not-allowed
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              text-(--text-muted)
              outline-none
              capitalize
            "
          >
            {currentUsername}
          </div>
        </div>
        <div className="flex items-center gap-3 justify-between ">
          <span>New Username</span>
          <div
            value={currentUsername}
            type="text"
            placeholder="current username"
            className="
                  flex
                  justify-center
                  items-center
              h-11
            w-40
            cursor-not-allowed
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              outline-none
              capitalize
            "
          >
            {currentUsername}
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center ">
          <button
            type="text"
            className="
                w-full
              h-11
              rounded-xl
              bg-(--text)
              disabled:bg-(--text)/70
              text-(--bg)
              font-medium
              cursor-pointer
            "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
