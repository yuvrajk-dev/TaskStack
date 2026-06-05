const AuthShimmer = () => {
  return (
    <section className="min-h-screen flex justify-center items-center p-4">
      <div
        className="
          w-full
          max-w-70
          p-6
          bg-(--surface)
          shadow-(--shadow-m)
          animate-pulse
        "
      >
        {/* Logo */}
        <div className="h-8 w-32 mx-auto rounded bg-(--bg)" />

        {/* Subtitle */}
        <div className="h-4 w-24 mx-auto mt-3 mb-6 rounded bg-(--bg)" />

        {/* Username */}
        <div className="h-11 w-full rounded-xl bg-(--bg) mb-4" />

        {/* Email */}
        <div className="h-11 w-full rounded-xl bg-(--bg) mb-4" />

        {/* Password */}
        <div className="h-11 w-full rounded-xl bg-(--bg) mb-4" />

        {/* Confirm Password */}
        <div className="h-11 w-full rounded-xl bg-(--bg) mb-4" />

        {/* Button */}
        <div className="h-11 w-full rounded-xl bg-(--bg) mt-2" />

        {/* Bottom text */}
        <div className="h-4 w-40 mx-auto mt-6 rounded bg-(--bg)" />
      </div>
    </section>
  );
};

export default AuthShimmer;
