import React from "react";

const Header = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="gap-3">
        <form
          className="
            bg-(--surface)
            border
            border-(--border)
            rounded-2xl
            p-3
            transition-colors
          "
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Project name..."
              className="
                h-10
                px-3
                rounded-xl
                bg-(--bg)
                border
                border-(--border)
                text-(--text)
                placeholder:text-(--text-muted)
                outline-none
              "
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Quick note..."
                className="
                  flex-1
                  h-10
                  px-3
                  rounded-xl
                  bg-(--bg)
                  border
                  border-(--border)
                  text-(--text)
                  placeholder:text-(--text-muted)
                  outline-none
                "
              />

              <select
                className="
                  h-10
                  px-3
                  rounded-xl
                  bg-(--bg)
                  border
                  border-(--border)
                  text-(--text)
                "
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <select
                className="
                  h-10
                  px-3
                  rounded-xl
                  bg-(--bg)
                  border
                  border-(--border)
                  text-(--text)
                "
              >
                <option>Planned</option>
                <option>Coding</option>
                <option>Testing</option>
                <option>Done</option>
              </select>

              <button
                type="submit"
                className="
                  h-10
                  px-4
                  rounded-xl
                  bg-(--primary)
                  text-(--bg)
                  text-sm
                  font-medium
                  transition-opacity
                  hover:opacity-90
                "
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Header;
