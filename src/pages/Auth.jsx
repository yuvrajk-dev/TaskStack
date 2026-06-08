import { useEffect, useState } from "react";
import BgSvg from "../utils/BgSvg";
import ThemeToggleButton from "../components/ThemeToggleButton";
import authValidation from "../utils/authValidation";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isLogin, setisLogin] = useState(() => {
    const stored = localStorage.getItem("isLogin");

    return stored === null ? true : stored === "true";
  });

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [SupabaseErrors, setSupabaseErrors] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  return (
    <>
      <section
        className={`min-h-screen flex   justify-center relative items-center p-4 `}
      >
        <div className="absolute  right-5 bottom-0 ">
          <ThemeToggleButton />
        </div>

        <BgSvg />

        <div className="w-full max-w-70 shadow-(--shadow-m) p-6    bg-(--surface)">
          <h1 className="text-2xl font-bold text-center ">TaskStack</h1>

          <p className="text-sm  text-center mb-6">
            {isLogin ? "Welcome Back" : "Register Yourself"}
          </p>

          <form
            noValidate
            className="flex flex-col  gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              const errors = authValidation(
                username,
                email,
                password,
                confirmPassword,
                isLogin,
              );

              setErrors(errors);
              try {
                if (Object.keys(errors).length === 0) {
                  if (isLogin) {
                    const { error } = await supabase.auth.signInWithPassword({
                      email,
                      password,
                    });
                    if (error) {
                      setSupabaseErrors(error.message);
                    } else {
                      navigate("/home", { replace: true });
                    }
                  } else {
                    const { data: authData, error } =
                      await supabase.auth.signUp({
                        email,
                        password,
                      });
                    if (error) {
                      setSupabaseErrors(error.message);
                    } else {
                      const { error: profileError } = await supabase
                        .from("profiles")
                        .insert({ id: authData.user.id, username });

                      if (profileError) throw profileError;

                      navigate("/home", { replace: true });
                    }
                  }
                }
              } catch {
                setSupabaseErrors("something went wrong");
              } finally {
                setLoading(false);
              }
            }}
          >
            {/* username */}

            {!isLogin && (
              <div>
                <input
                  maxLength={15}
                  value={username}
                  onChange={(e) => {
                    setErrors((prev) => {
                      const { username, ...rest } = prev;
                      return rest;
                    });
                    setUsername(e.target.value);
                    setSupabaseErrors("");
                  }}
                  type="text"
                  placeholder="Username"
                  className="
                  w-full
              h-11
              capitalize
              px-3
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              outline-none
            "
                />

                {errors.username && (
                  <p className=" text-red-500  text-xs ml-2">
                    {errors.username}
                  </p>
                )}
                {username.length >= 15 && (
                  <p className=" text-red-500  text-xs ml-2">
                    max 15 characters allowed
                  </p>
                )}
              </div>
            )}

            {/* email  */}

            <div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);

                  setErrors((prev) => {
                    const { email, ...rest } = prev;
                    return rest;
                  });
                  setSupabaseErrors("");
                }}
                type="email"
                placeholder="Email"
                className="
              h-11
              w-full
              px-3
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              outline-none
            "
              />
              {errors.email && (
                <p className=" text-red-500  text-xs ml-2">{errors.email}</p>
              )}
            </div>

            {/* password  */}
            <div className="">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => {
                    const { password, ...rest } = prev;
                    return rest;
                  });
                  setSupabaseErrors("");
                }}
                type="password"
                placeholder="Password"
                className="
              h-11
              px-3 w-full
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              outline-none
            "
              />

              {errors.password && (
                <p className=" text-red-500  text-xs ml-2">{errors.password}</p>
              )}
            </div>

            {/* confirmPassword */}

            {!isLogin && (
              <div className=" ">
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors((prev) => {
                      const { confirmPassword, ...rest } = prev;
                      return rest;
                    });
                    setSupabaseErrors("");
                  }}
                  type="password"
                  placeholder="Confirm Password"
                  className={`
              h-11 w-full
              px-3 
              ${confirmPassword && password !== confirmPassword && "border-red-500"}
              rounded-xl
              border
              border-(--border)
              bg-(--bg)
              outline-none
            `}
                />

                {/* {confirmPassword && password !== confirmPassword && (
                  <p className=" text-red-500  text-xs ml-2">
                    Password did't match
                  </p>
                )} */}

                {errors.confirmPassword && (
                  <p className=" text-red-500  text-xs ml-2">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            <div className="">
              {SupabaseErrors && (
                <p className=" text-red-500 mb-1 wrap-break-word text-xs mx-2">
                  {SupabaseErrors}
                </p>
              )}
              <button
                disabled={loading}
                type="submit"
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
                {loading ? "loading..." : isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              onClick={() => {
                setisLogin((prev) => !prev);
                setConfirmPassword("");
                setUsername("");
                setErrors({});
                setEmail("");
                setPassword("");
              }}
              type="button"
              className="text-blue-500 ml-1 hover:text-blue-700 cursor-pointer"
            >
              {isLogin ? " Register" : "Login"}
            </button>
          </p>
        </div>
      </section>
      <footer
        className="
        bg-(--surface)
    text-center
    text-xs
    text-(--text-muted)
    z-10
    border-t 
    border-(--border)
    py-1
  "
      >
        <p className=" ">
          Built by
          <a
            href="https://github.com/yuvrajk-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1  hover:text-(--text)"
          >
            Yuvraj Kumar
          </a>
        </p>

        <p className="">TaskStack • React • Tailwind CSS • Supabase</p>
      </footer>
    </>
  );
};

export default Auth;
