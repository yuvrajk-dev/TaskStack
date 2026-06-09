import { useNavigate } from "react-router";
import ThemeToggleButton from "../components/ThemeToggleButton";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📋",
      title: "Task Management",
      description:
        "Create, edit, organize and track tasks through every stage of your workflow.",
    },
    {
      icon: "🚀",
      title: "Drag & Drop",
      description:
        "Move tasks seamlessly between Planning, In Progress and Done.",
    },
    {
      icon: "🔐",
      title: "Secure Accounts",
      description:
        "Authentication and user-specific task management powered by Supabase.",
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      description:
        "Switch between light and dark themes with a clean modern interface.",
    },
  ];

  const fakeTask = [
    {
      title: "Planning",
      tasks: ["Design UI", "Create Database"],
    },
    {
      title: "In Progress",
      tasks: ["Build Dashboard", "Add Authentication"],
    },
    {
      title: "Done",
      tasks: ["Setup React", "Configure Supabase"],
    },
  ];

  return (
    <section className="min-h-screen bg-(--bg) relative overflow-hidden">
      <nav className="w-[95%] mx-auto py-6 flex justify-between items-center relative z-10">
        <h1 className="text-2xl font-bold">TaskStack</h1>

        <div className="flex items-center gap-3">
          <ThemeToggleButton />

          <button
            onClick={() => navigate("/auth")}
            className="
              px-5
              py-2
              rounded-xl
              bg-(--text)
              text-(--bg)
              font-medium
              cursor-pointer
            "
          >
            Login
          </button>
        </div>
      </nav>

      <div className="relative z-10 w-[95%] mx-auto">
        <div className="min-h-[80vh]  flex flex-col justify-center items-center text-center">
          <div
            className="
              px-4
              py-2
              rounded-full
              border
              border-(--border)
              bg-(--surface)
              text-sm
              mb-6
            "
          >
            Organize • Track • Complete
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              max-w-5xl
            "
          >
            Manage Your Tasks
            <br />
            Without The Chaos
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-(--text-muted)
              text-lg
            "
          >
            TaskStack helps you organize projects, manage workflows, and stay
            productive with drag-and-drop task tracking, authentication, and a
            clean modern interface.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/auth")}
              className="
                px-8
                py-4
                rounded-xl
                bg-(--text)
                text-(--bg)
                font-medium
                cursor-pointer
                hover:scale-105
                transition-transform
              "
            >
              Get Started
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                px-8
                py-4
                rounded-xl
                border
                border-(--border)
                bg-(--surface)
                cursor-pointer
              "
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className="
            grid
            
            md:grid-cols-3
            gap-5
            pb-24
          "
        >
          {fakeTask.map((column) => (
            <div
              key={column.title}
              className="
                bg-(--surface)
                border
                border-(--border)
                rounded-2xl
                p-4
              "
            >
              <h3 className="font-semibold text-center mb-4">{column.title}</h3>

              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <div
                    key={task}
                    className="
                      bg-(--bg)
                      border
                      border-(--border)
                      rounded-xl
                      p-3
                    "
                  >
                    {task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section id="features" className=" pb-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  bg-(--surface)
                  border
                  border-(--border)
                  rounded-2xl
                  p-6
                "
              >
                <div className="text-3xl mb-3">{feature.icon}</div>

                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>

                <p className="text-(--text-muted)">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className=" pb-24">
          <div
            className="
              bg-(--surface)
              border
              border-(--border)
              rounded-3xl
              p-10
              text-center
            "
          >
            <h2 className="text-4xl font-bold">Ready to Get Organized?</h2>

            <p className="text-(--text-muted) mt-4">
              Start managing your tasks and projects with TaskStack today.
            </p>

            <button
              onClick={() => navigate("/auth")}
              className="
                mt-8
                px-8
                py-4
                rounded-xl
                bg-(--text)
                text-(--bg)
                font-medium
                hover:scale-105

                cursor-pointer
              "
            >
              Start Now
            </button>
          </div>
        </section>
      </div>

      <footer
        className="
        
    border-t
    border-(--border)
    bg-(--surface)
    py-8
  "
      >
        <div
          className="
      w-[95%]
      mx-auto
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-4
    "
        >
          <div>
            <h3 className="font-bold text-lg text-center md:text-left">
              TaskStack
            </h3>
            <p className="text-sm text-(--text-muted)">
              Organize tasks. Track progress. Stay productive.
            </p>
          </div>

          <div className="flex gap-5 text-sm">
            <a
              href="https://github.com/yuvrajk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--text)/70"
            >
              GitHub
            </a>
            <a
              href="mailto:yuvrajk.dev@gmail.com"
              className="hover:text-(--text)/70"
            >
              Contact
            </a>
          </div>
        </div>

        <div
          className="
      mt-6
      pt-4
      border-t
      border-(--border)
      text-center
      text-xs
      text-(--text-muted)
    "
        >
          © {new Date().getFullYear()} TaskStack • Built by Yuvraj Kumar
        </div>
      </footer>
    </section>
  );
};

export default LandingPage;
