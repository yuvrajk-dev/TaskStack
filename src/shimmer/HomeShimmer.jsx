const HomeShimmer = () => {
  const columns = ["Planning", "In Progress", "Done"];

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar Skeleton */}
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
        <div className="h-7 w-28 rounded bg-(--bg) animate-pulse" />

        {/* Profile */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="h-9 w-9 rounded-full bg-(--bg) animate-pulse" />

          <div
            className="
            flex items-center gap-3
            px-3 py-2
            rounded-2xl
          "
          >
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-(--bg) animate-pulse" />

            {/* Username */}
            <div className="hidden sm:flex flex-col gap-2">
              <div className="h-3 w-20 rounded bg-(--bg) animate-pulse" />
            </div>

            {/* Arrow */}
            <div className="h-5 w-5 rounded bg-(--bg) animate-pulse" />
          </div>
        </div>
      </nav>

      {/* header shimmer */}

      <section className="w-23/24 mx-auto p-4">
        <div
          className="
          bg-(--surface)
          border
          border-(--border)
          rounded-2xl
          p-3
        "
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-10 rounded-xl bg-(--bg) animate-pulse" />
              <div className="h-10 rounded-xl bg-(--bg) animate-pulse" />
            </div>

            {/* Center */}
            <div className="flex-2">
              <div className="h-23 rounded-xl bg-(--bg) animate-pulse" />
            </div>

            {/* Right */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-10 rounded-xl bg-(--bg) animate-pulse" />

              <div className="h-10 rounded-xl bg-(--bg) animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}

      <section
        className="
      w-[96%]  min-h-0   mx-auto flex-1 p-5 mb-2 border-(--border) border rounded-xl  bg-(--surface)  md:flex-row flex flex-col gap-5 overflow-y-auto justify-start items-center md:justify-center md:items-start scrollbar-hide 
      "
      >
        {columns.map((column) => (
          <div
            key={column}
            className="
            md:w-[30%]
            w-[95%]
            flex
            flex-col
            gap-5
          "
          >
            {/* Column Header */}
            <div className="p-4 border-b border-(--border)">
              <div className="h-5 w-28 mx-auto rounded bg-(--bg) animate-pulse" />
            </div>

            {/* Fake Cards */}
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="
                bg-(--background)
                border
                border-(--border)
                rounded-lg
                p-4
                animate-pulse
              "
              >
                <div className="h-5 w-3/4 rounded bg-(--bg) mb-3" />

                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-(--bg)" />
                  <div className="h-3 w-5/6 rounded bg-(--bg)" />
                  <div className="h-3 w-2/3 rounded bg-(--bg)" />
                </div>

                <div className="flex justify-between mt-4">
                  <div className="h-6 w-16 rounded-full bg-(--bg)" />
                  <div className="h-6 w-20 rounded-full bg-(--bg)" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeShimmer;
