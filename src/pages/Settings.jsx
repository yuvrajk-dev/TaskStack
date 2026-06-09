import { useState } from "react";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError("");

      alert("Account deletion not implemented yet");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div
        className="
          p-5
          w-100
          mx-2
          bg-(--surface)
          rounded-2xl
          border
          border-(--border)
          flex
          flex-col
          gap-5
        "
      >
        <div>
          <h2 className="text-lg font-semibold">Delete Account</h2>

          <p className="text-sm text-(--text-muted) mt-2">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
        </div>

        {error && <p className="text-red-500 text-xs text-center">{error}</p>}

        <button
          type="button"
          disabled={loading}
          onClick={handleDelete}
          className="
            w-full
            h-11
            rounded-xl
            bg-red-500
            text-white
            font-medium
            cursor-pointer
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? "Deleting..." : "Delete Account"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
