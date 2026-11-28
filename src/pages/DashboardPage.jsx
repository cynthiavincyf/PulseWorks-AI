import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  Users,
  Settings,
  LogOut,
  Sparkles,
  Plus,
  Menu,
  X,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample data: replace with API data when the backend is ready
const tasks = [
  { id: 1, title: "Design onboarding flow", employee: "Employee 1", priority: "High", due: "Dec 2, 2026", status: "In Progress" },
  { id: 2, title: "Prepare Q4 project report", employee: "Employee 2", priority: "Medium", due: "Dec 5, 2026", status: "Pending" },
  { id: 3, title: "Review security checklist", employee: "Employee 3", priority: "High", due: "Nov 30, 2026", status: "In Progress" },
  { id: 4, title: "Update team documentation", employee: "Employee 1", priority: "Low", due: "Dec 10, 2026", status: "Pending" },
  { id: 5, title: "Client feedback summary", employee: "Employee 2", priority: "Medium", due: "Nov 25, 2026", status: "Completed" },
  { id: 6, title: "Set up activity logs", employee: "Employee 3", priority: "Low", due: "Nov 22, 2026", status: "Completed" },
];

const employees = ["Employee 1", "Employee 2", "Employee 3"];
const filters = ["All", "Pending", "In Progress", "Completed"];

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Create Task", icon: ListTodo, to: "/create-task" },
  { label: "Team", icon: Users, to: "#" },
  { label: "Settings", icon: Settings, to: "#" },
];

const priorityStyle = {
  High: "border-[#7B1D20] text-[#7B1D20]",
  Medium: "border-[#C9892B] text-[#C9892B]",
  Low: "border-[#A69B93] text-[#A69B93]",
};

const statusStyle = {
  Pending: "bg-[#E5DDD5] text-[#625758]",
  "In Progress": "bg-[#7B1D20]/10 text-[#7B1D20]",
  Completed: "bg-[#7B1D20] text-white",
};

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const count = (s) => tasks.filter((t) => t.status === s).length;
  const visible = filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  const stats = [
    { label: "Total tasks", value: tasks.length, icon: ListTodo },
    { label: "In progress", value: count("In Progress"), icon: Loader2 },
    { label: "Pending", value: count("Pending"), icon: Clock },
    { label: "Completed", value: count("Completed"), icon: CheckCircle2 },
  ];

  const completion = Math.round((count("Completed") / tasks.length) * 100);

  return (
    <div className="flex min-h-screen bg-[#F0EBE5] text-[#292323]">

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 transform flex-col justify-between bg-[#7B1D20] p-6 text-[#FAF5EF] transition-transform duration-300 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                <Sparkles size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight">
                PulseWorks <span className="text-[#E8C8B9]">AI</span>
              </span>
            </Link>
            <button className="md:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <p className="mb-3 mt-10 text-[10px] uppercase tracking-[0.25em] text-[#E8C8B9]">
            Workspace
          </p>

          <nav className="space-y-1">
            {nav.map(({ label, icon: Icon, to }) => {
              const active = label === "Dashboard";
              return (
                <Link
                  key={label}
                  to={to}
                  className={`flex items-center gap-3 px-3 py-3 text-sm transition ${
                    active ? "bg-white/15 font-semibold" : "text-[#F0DCD5] hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <div className="mb-5 h-px w-full bg-white/20" />
          <Link to="/login" className="flex items-center gap-3 px-3 py-3 text-sm text-[#F0DCD5] transition hover:bg-white/10">
            <LogOut size={18} />
            Log out
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <div className="min-w-0 flex-1">

        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-[#D5CBC3] bg-[#F0EBE5]/95 px-5 backdrop-blur-xl md:px-10">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>

          <p className="hidden text-xs uppercase tracking-[0.22em] text-[#9A7770] md:block">
            Workspace / Dashboard
          </p>

          <div className="flex items-center gap-4">
            <Button asChild className="h-auto rounded-none bg-[#7B1D20] px-5 py-3 text-sm font-medium text-white hover:bg-[#5D1518]">
              <Link to="/create-task">
                <Plus size={16} /> New task
              </Link>
            </Button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7B1D20] text-xs font-semibold text-white">
              FC
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl space-y-10 px-5 py-10 md:px-10">

          {/* Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#7B1D20]">Overview</p>
            <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
              Good to see you,
              <span className="italic text-[#7B1D20]"> Cynthia.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#746967]">
              Here is where your team's work stands today.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="group rounded-none border-[#CFC2B9] bg-[#FAF8F5] shadow-none transition hover:-translate-y-1 hover:border-[#7B1D20]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#7B1D20]/10 text-[#7B1D20] transition group-hover:bg-[#7B1D20] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#9A8882]">{label}</span>
                  </div>
                  <p className="mt-6 font-serif text-5xl tracking-tight">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Task list */}
            <section className="lg:col-span-2">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-serif text-3xl tracking-tight">
                  Your <span className="italic text-[#7B1D20]">tasks.</span>
                </h2>

                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`border px-3 py-2 text-xs transition ${
                        filter === f
                          ? "border-[#7B1D20] bg-[#7B1D20] text-white"
                          : "border-[#CFC2B9] bg-white text-[#443532] hover:border-[#7B1D20]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 divide-y divide-[#D5CBC3] border border-[#CFC2B9] bg-[#FAF8F5]">
                {visible.length === 0 && (
                  <p className="p-6 text-sm text-[#746967]">No tasks in this view.</p>
                )}

                {visible.map((t) => (
                  <div key={t.id} className="flex flex-wrap items-center justify-between gap-4 p-5">
                    <div className="min-w-0">
                      <p className="font-serif text-xl tracking-tight">{t.title}</p>
                      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#746967]">
                        <span>{t.employee}</span>
                        <span className="flex items-center gap-1">
                          <CalendarDays size={12} /> {t.due}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`border-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${priorityStyle[t.priority]}`}>
                        {t.priority}
                      </span>
                      <span className={`px-3 py-1 text-xs ${statusStyle[t.status]}`}>{t.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Right column */}
            <aside className="space-y-8">

              {/* Overall progress */}
              <Card className="rounded-none border-[#CFC2B9] bg-[#FAF8F5] shadow-none">
                <CardContent className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#7B1D20]">Overall progress</p>
                  <p className="mt-4 font-serif text-5xl tracking-tight">{completion}%</p>
                  <div className="mt-4 h-1.5 w-full bg-[#DED4CB]">
                    <div className="h-full bg-[#7B1D20] transition-all duration-700" style={{ width: `${completion}%` }} />
                  </div>
                  <p className="mt-3 text-xs text-[#746967]">
                    {count("Completed")} of {tasks.length} tasks completed
                  </p>
                </CardContent>
              </Card>

              {/* Team workload */}
              <Card className="rounded-none border-[#CFC2B9] bg-[#FAF8F5] shadow-none">
                <CardContent className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#7B1D20]">Team workload</p>

                  <div className="mt-5 space-y-5">
                    {employees.map((e, i) => {
                      const n = tasks.filter((t) => t.employee === e).length;
                      return (
                        <div key={e}>
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-2">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B1D20]/10 text-[10px] font-semibold text-[#7B1D20]">
                                E{i + 1}
                              </span>
                              {e}
                            </span>
                            <span className="text-[#746967]">{n} tasks</span>
                          </div>
                          <div className="mt-2 h-1.5 w-full bg-[#DED4CB]">
                            <div className="h-full bg-[#7B1D20]" style={{ width: `${(n / tasks.length) * 100 * 2}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Pulse AI tip */}
              <div className="bg-[#292323] p-6 text-[#F0EBE5]">
                <div className="flex items-center gap-2 text-[#D99AA8]">
                  <Sparkles size={16} />
                  <span className="text-[10px] uppercase tracking-[0.2em]">Pulse AI</span>
                </div>
                <p className="mt-4 flex gap-2 font-serif text-xl leading-snug tracking-tight">
                  <AlertCircle size={20} className="mt-1 shrink-0 text-[#D99AA8]" />
                  Review security checklist is high priority and due soon.
                </p>
                <p className="mt-3 text-xs leading-6 text-[#C5B8B0]">
                  Concept preview · AI functionality requires backend integration
                </p>
              </div>

            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}