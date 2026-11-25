
import {
  ArrowUpRight,
  Sparkles,
  Shield,
  Users,
  Brain,
  Files,
  Activity,
  Check,
  Menu,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">

      {/* ANIMATIONS */}
      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.08); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-glow {
          animation: glow 7s ease-in-out infinite;
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>


      {/* NAVBAR */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-violet-400 rounded-xl flex items-center justify-center">
            <Sparkles size={19} className="text-black" />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            pulseworks<span className="text-violet-400">.ai</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition duration-300">
            Features
          </a>

          <a href="#about" className="hover:text-white transition duration-300">
            About
          </a>

          <a href="#security" className="hover:text-white transition duration-300">
            Security
          </a>
        </div>

        <div className="flex items-center gap-4">

          <a
            href="/login"
            className="hidden sm:block text-sm text-zinc-300 hover:text-white transition"
          >
            Log in
          </a>

          <a
            href="/signup"
            className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-violet-200 transition duration-300"
          >
            Get started
            <ArrowUpRight size={15} className="inline ml-1" />
          </a>

          <button className="md:hidden text-zinc-300">
            <Menu size={22} />
          </button>

        </div>

      </nav>


      {/* HERO */}
      <section className="relative min-h-[650px] flex items-center">

        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full animate-glow pointer-events-none" />

        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-purple-500/[0.06] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 w-full">

          <div className="max-w-3xl mx-auto text-center">

            {/* BADGE */}
            <div className="animate-fade-up inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] rounded-full px-4 py-2 text-sm text-zinc-400 mb-8 backdrop-blur-sm">
              <Sparkles size={14} className="text-violet-400" />
              Intelligence for modern teams
            </div>


            {/* HEADLINE */}
            <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.05em] leading-[1.05]">
              Less busywork.
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500">
                More meaningful work.
              </span>
            </h1>


            {/* DESCRIPTION */}
            <p className="animate-fade-up delay-200 text-zinc-400 text-base md:text-lg max-w-xl mx-auto mt-7 leading-8">
              Projects, people and AI — finally in one place.
              PulseWorks helps teams focus on what matters
              and move work forward.
            </p>


            {/* BUTTONS */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row justify-center gap-3 mt-9">

              <a
                href="/signup"
                className="bg-violet-400 text-black font-medium px-6 py-3.5 rounded-xl hover:bg-violet-300 hover:-translate-y-0.5 transition duration-300"
              >
                Start building
                <ArrowUpRight size={17} className="inline ml-1" />
              </a>

              <a
                href="#features"
                className="border border-white/10 bg-white/[0.03] px-6 py-3.5 rounded-xl text-zinc-300 hover:bg-white/[0.07] hover:border-white/20 transition duration-300"
              >
                Discover PulseWorks
              </a>

            </div>


            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap justify-center gap-6 mt-7 text-xs text-zinc-500">

              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-violet-400" />
                Built for teams
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-violet-400" />
                AI-powered
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-violet-400" />
                Secure by design
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section id="features" className="border-t border-white/5 py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-xl">

            <p className="text-xs tracking-[0.2em] text-violet-400 uppercase">
              Everything connected
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">
              Your work.
              <span className="text-zinc-500"> In sync.</span>
            </h2>

            <p className="text-zinc-400 leading-7 mt-5">
              A thoughtfully connected system that removes friction
              from your everyday workflow.
            </p>

          </div>


          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">

            <Feature
              icon={<Activity />}
              title="Project intelligence"
              description="See progress, priorities and project health without digging through endless updates."
            />

            <Feature
              icon={<Users />}
              title="Team collaboration"
              description="Bring people, conversations and responsibilities into one shared workspace."
            />

            <Feature
              icon={<Brain />}
              title="AI that works with you"
              description="Summarize tasks, understand documents and turn information into action."
            />

            <Feature
              icon={<Files />}
              title="Document intelligence"
              description="Keep your files organized and ask questions about your documents."
            />

            <Feature
              icon={<Sparkles />}
              title="Workflows that flow"
              description="Stay connected with real-time updates and activity notifications."
            />

            <Feature
              icon={<Shield />}
              title="Security at its core"
              description="Role-based permissions, protected accounts and workspace activity tracking."
            />

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <p className="text-xs tracking-[0.2em] uppercase text-violet-400">
              A better way to work
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 leading-tight">
              Clarity creates
              <br />
              <span className="text-zinc-500">momentum.</span>
            </h2>

            <p className="text-zinc-400 leading-7 mt-6">
              We believe great work happens when teams spend less
              time managing work and more time doing it.
              PulseWorks brings your workspace together so
              your team can focus, collaborate and grow.
            </p>

          </div>


          {/* RIGHT */}
          <div className="border border-white/10 rounded-2xl bg-[#111114] p-7">

            <div className="space-y-6">

              <AboutItem
                number="01"
                title="One connected workspace"
                text="Projects, tasks, documents and communication."
              />

              <AboutItem
                number="02"
                title="Intelligence built in"
                text="AI assistance exactly where your workflow needs it."
              />

              <AboutItem
                number="03"
                title="Designed for focus"
                text="Less clutter, better visibility and purposeful work."
              />

            </div>

          </div>

        </div>

      </section>


      {/* SECURITY */}
      <section id="security" className="border-t border-white/5 py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-8 md:p-12 flex flex-col md:flex-row justify-between gap-8 items-center">

            {/* LEFT */}
            <div className="max-w-xl">

              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <Shield size={17} />
                Security first
              </div>

              <h2 className="text-3xl font-semibold mt-4">
                Your workspace.
                <br />
                Your control.
              </h2>

              <p className="text-zinc-400 mt-4 leading-7">
                Secure authentication, controlled access and
                transparent activity monitoring.
              </p>

            </div>


            {/* SECURITY ITEMS */}
            <div className="grid grid-cols-2 gap-3 w-full md:w-auto">

              <SecurityItem text="Role-based access" />
              <SecurityItem text="Secure login" />
              <SecurityItem text="Activity logs" />
              <SecurityItem text="Protected files" />

            </div>

          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <Sparkles className="text-violet-400 mx-auto" size={26} />

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
            Make room for
            <span className="text-violet-400"> better work.</span>
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-7">
            Your team's next chapter starts with a workspace
            built to move you forward.
          </p>

          <a
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-medium mt-8 hover:bg-violet-200 hover:-translate-y-0.5 transition duration-300"
          >
            Get started
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/5 py-7">

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between gap-4">

          <span className="font-semibold">
            pulseworks<span className="text-violet-400">.ai</span>
          </span>

          <p className="text-xs text-zinc-600">
            © 2026 PulseWorks AI. Built for meaningful work.
          </p>

          <div className="flex gap-5 text-xs text-zinc-500">

            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#security" className="hover:text-white transition">
              Security
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}


/* FEATURE COMPONENT */
function Feature({ icon, title, description }) {
  return (
    <div className="group border border-white/5 bg-white/[0.02] rounded-2xl p-6 hover:border-violet-400/20 hover:bg-white/[0.04] hover:-translate-y-1 transition duration-300">

      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-400/10 text-violet-300 group-hover:bg-violet-400/15 transition">
        {icon}
      </div>

      <h3 className="font-medium mt-5">
        {title}
      </h3>

      <p className="text-sm text-zinc-500 leading-6 mt-3">
        {description}
      </p>

    </div>
  );
}


/* ABOUT COMPONENT */
function AboutItem({ number, title, text }) {
  return (
    <div className="flex gap-4">

      <span className="text-xs text-violet-400 pt-1">
        {number}
      </span>

      <div>
        <h3 className="font-medium">
          {title}
        </h3>

        <p className="text-sm text-zinc-500 mt-2">
          {text}
        </p>
      </div>

    </div>
  );
}


/* SECURITY COMPONENT */
function SecurityItem({ text }) {
  return (
    <div className="border border-white/5 bg-white/[0.03] rounded-xl p-4 flex items-center gap-2 text-xs text-zinc-300 whitespace-nowrap hover:border-violet-400/20 transition">

      <Check size={14} className="text-violet-400" />

      {text}

    </div>
  );
}

export default App;
