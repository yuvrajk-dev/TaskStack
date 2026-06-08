import React, { useState } from "react";
import { useOutletContext } from "react-router";
import supabase from "../utils/supabase";
import toast from "react-hot-toast";

const Profile = () => {
  const [username, id, getData] = useOutletContext();

  const [loading, setLoading] = useState(false);
  const currentUsername = username;
  const [ChangeUsername, setChangeUsername] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = async () => {
    try {
      setLoading(true);
      if (!ChangeUsername.trim()) {
        setErrors("Username cannot be empty.");

        return;
      }
      if (ChangeUsername.trim() === currentUsername) {
        setErrors("New username must be different from your current username.");

        return;
      }

      const { error } = await supabase
        .from("profiles")
        .update({ username: ChangeUsername.trim() })
        .eq("id", id);

      if (error) throw error;
      await getData();
      setChangeUsername("");
      setErrors("");
      toast.success("Username updated");
    } catch (error) {
      setErrors(error.message);
      toast.error("Failed to update username");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="  flex-1   flex justify-center items-center">
      <div className=" p-5 w-100 mx-2 bg-(--surface) rounded-2xl border flex flex-col gap-5  border-(--border) ">
        <div className="flex items-center gap-3 justify-between">
          <span>Current Username</span>
          <div
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
              
            "
          >
            {currentUsername}
          </div>
        </div>

        <div className="flex items-center gap-3 justify-between ">
          <span>New username</span>
          <input
            value={ChangeUsername}
            onChange={(e) => {
              setErrors("");
              setChangeUsername(e.target.value);
            }}
            type="text"
            maxLength={15}
            placeholder="New username"
            className={`
                  
               text-center
              h-11
            w-40
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              ${ChangeUsername.length === 15 ? "border-red-500" : ""}
              outline-none
              
            `}
          />
        </div>

        <div>
          {errors && (
            <p className=" text-red-500 pb-1 text-center mb-1 wrap-break-word text-xs mx-2">
              {errors}
            </p>
          )}
          <div className="flex items-center gap-3 justify-center ">
            <button
              type="button"
              disabled={loading || !ChangeUsername.trim()}
              onClick={handleChange}
              className="
                w-full
              h-11
              rounded-xl
              bg-(--text)
              disabled:cursor-not-allowed
              disabled:text-(--bg)/70
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
    </div>
  );
};

export default Profile;
