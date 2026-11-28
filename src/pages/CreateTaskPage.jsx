import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Sparkles, CalendarDays, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const employees = [
  { value: "Employee 1", initials: "E1" },
  { value: "Employee 2", initials: "E2" },
  { value: "Employee 3", initials: "E3" },
];

const priorities = [
  { value: "Low", dot: "bg-[#A69B93]" },
  { value: "Medium", dot: "bg-[#C9892B]" },
  { value: "High", dot: "bg-[#7B1D20]" },
];

const statuses = ["Pending", "In Progress", "Completed"];

const progressByStatus = {
  Pending: 12,
  "In Progress": 55,
  Completed: 100,
};

// Treats an unselected radio group (null/undefined) as an empty string,
// then checks the value is one of the allowed options.
const choice = (options, message) =>
  z.preprocess(
    (v) => v ?? "",
    z
      .string()
      .min(1, message)
      .refine((v) => options.includes(v), message)
  );

const taskSchema = z.object({
  taskTitle: z
    .string()
    .trim()
    .min(1, "Task title is required")
    .min(3, "Task title must be at least 3 characters")
    .max(100, "Task title must be 100 characters or fewer"),

  description: z
    .string()
    .trim()
    .min(1, "Description is required")
    .max(500, "Description must be 500 characters or fewer"),

  assignedEmployee: choice(
    employees.map((e) => e.value),
    "Please select an employee"
  ),

  priority: choice(
    priorities.map((p) => p.value),
    "Please select a priority (Low, Medium or High)"
  ),

  dueDate: z
    .string()
    .min(1, "Please select a due date")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Please enter a valid date")
    .refine((v) => {
      const due = new Date(`${v}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return due >= today;
    }, "Due date cannot be in the past"),

  taskStatus: choice(statuses, "Please select a task status"),
});

function formatDate(value) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function daysLeft(value) {
  if (!value) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${value}T00:00:00`);
  const diff = Math.round((due - today) / 86400000);
  if (diff < 0) return `${Math.abs(diff)} day${Math.abs(diff) === 1 ? "" : "s"} overdue`;
  if (diff === 0) return "Due today";
  return `${diff} day${diff === 1 ? "" : "s"} left`;
}

function CreateTaskPage() {
  const [filed, setFiled] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    mode: "onTouched",
    defaultValues: {
      taskTitle: "",
      description: "",
      assignedEmployee: "",
      priority: "",
      dueDate: "",
      taskStatus: "Pending",
    },
  });

  const values = watch();
  const progress = progressByStatus[values.taskStatus] ?? 12;
  const employee = employees.find((e) => e.value === values.assignedEmployee);

  const onSubmit = (data) => {
    console.log("Task Created Successfully:", data);
    setFiled(true);
    setTimeout(() => {
      setFiled(false);
      reset();
    }, 2600);
  };

  const fieldClass =
    "h-12 rounded-md border-[#DED4CB] bg-white text-[#292323] placeholder:text-[#A69B93] focus-visible:ring-2 focus-visible:ring-[#7B1D20]";
  const labelClass =
    "text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7B1D20]";
  const errorClass = "text-xs text-red-700";

  const chipBase =
    "flex cursor-pointer items-center justify-center gap-2 rounded-md border border-[#DED4CB] bg-white px-4 py-3 text-sm text-[#443532] transition hover:border-[#7B1D20] peer-checked:border-[#7B1D20] peer-checked:bg-[#7B1D20] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#7B1D20] peer-focus-visible:ring-offset-2";

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5]">
      <div className="grid min-h-screen w-full md:grid-cols-2">

        {/* LEFT: BURGUNDY PANEL WITH LIVE TASK CARD */}
        <section className="relative flex flex-col justify-between overflow-hidden bg-[#7B1D20] px-8 py-10 text-[#FAF8F5] sm:px-12 md:sticky md:top-0 md:h-screen md:px-14 md:py-12">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 top-44 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#8E3032]/40" />

          {/* Branding */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
              <Sparkles size={20} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">
              PulseWorks AI
            </p>
          </div>

          {/* Heading */}
          <div className="relative z-10 my-8 max-w-lg md:my-0">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#E8C8B9]">
              Plan · Assign · Accomplish
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl">
              Turn plans into
              <span className="block italic text-[#E8C8B9]">
                meaningful progress.
              </span>
            </h1>
          </div>

          {/* LIVE TASK CARD */}
          <div className="relative z-10 mx-auto w-full max-w-sm">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#E8C8B9]">
              Live preview
            </p>

            <div
              className={`relative bg-[#F0EBE5] text-[#292323] shadow-[8px_8px_0px_rgba(0,0,0,0.18)] transition duration-500 ${
                filed ? "rotate-0" : "-rotate-2 hover:rotate-0"
              }`}
            >
              {/* Top */}
              <div className="p-6 pb-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9A7770]">
                    Task / New
                  </p>

                  {values.priority && (
                    <span
                      className={`-rotate-6 border-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                        values.priority === "High"
                          ? "border-[#7B1D20] text-[#7B1D20]"
                          : values.priority === "Medium"
                          ? "border-[#C9892B] text-[#C9892B]"
                          : "border-[#A69B93] text-[#A69B93]"
                      }`}
                    >
                      {values.priority}
                    </span>
                  )}
                </div>

                <h3
                  className={`mt-4 font-serif text-3xl leading-tight tracking-tight ${
                    values.taskTitle ? "" : "italic text-[#B9AAA3]"
                  }`}
                >
                  {values.taskTitle || "Your task title"}
                </h3>

                <p
                  className={`mt-3 line-clamp-3 text-xs leading-6 ${
                    values.description ? "text-[#746967]" : "text-[#B9AAA3]"
                  }`}
                >
                  {values.description ||
                    "A short description will appear here as you type."}
                </p>
              </div>

              {/* Perforation */}
              <div className="relative">
                <div className="mx-6 border-t-2 border-dashed border-[#CFC2B9]" />
                <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#7B1D20]" />
                <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-[#7B1D20]" />
              </div>

              {/* Bottom */}
              <div className="p-6 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-semibold ${
                        employee
                          ? "bg-[#7B1D20] text-white"
                          : "border border-dashed border-[#B9AAA3] text-[#B9AAA3]"
                      }`}
                    >
                      {employee ? employee.initials : "?"}
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[#9A7770]">
                        Assigned to
                      </p>
                      <p className="text-xs font-medium">
                        {employee ? employee.value : "Unassigned"}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="flex items-center justify-end gap-1 text-[9px] uppercase tracking-[0.18em] text-[#9A7770]">
                      <CalendarDays size={11} /> Due
                    </p>
                    <p className="text-xs font-medium">
                      {formatDate(values.dueDate) || "No date"}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#746967]">
                    <span>{values.taskStatus || "Pending"}</span>
                    <span>{daysLeft(values.dueDate) || `${progress}%`}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-[#DED4CB]">
                    <div
                      className="h-full bg-[#7B1D20] transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* FILED STAMP */}
              <div
                className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F0EBE5]/70 transition duration-500 ${
                  filed ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`-rotate-12 border-4 border-[#7B1D20] px-6 py-2 font-serif text-3xl italic text-[#7B1D20] transition duration-500 ${
                    filed ? "scale-100" : "scale-150"
                  }`}
                >
                  Filed ✓
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 mt-8 md:mt-0">
            <div className="mb-4 h-px w-20 bg-[#E8C8B9]" />
            <p className="text-sm text-[#F0DCD4]/80">
              Make room for meaningful work.
            </p>
          </div>
        </section>

        {/* RIGHT: FORM PANEL */}
        <section className="flex min-h-screen items-center justify-center bg-[#FAF8F5] px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-2xl">

            {/* Heading */}
            <div className="mb-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7770]">
                Workspace / New task
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#292323] sm:text-5xl">
                Create a
                <span className="italic text-[#7B1D20]"> new task.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#82756F] sm:text-base">
                Fill in the details and watch your task card take shape.
              </p>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
            >

              {/* 01 TASK TITLE */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="taskTitle" className={labelClass}>
                  01 / Task title
                </Label>

                <Input
                  id="taskTitle"
                  placeholder="What needs to get done?"
                  {...register("taskTitle")}
                  className={fieldClass}
                />

                {errors.taskTitle && (
                  <p className={errorClass}>{errors.taskTitle.message}</p>
                )}
              </div>

              {/* 02 DESCRIPTION */}
              <div className="space-y-2 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="description" className={labelClass}>
                    02 / Description
                  </Label>
                  <span className="text-[10px] tracking-widest text-[#A69B93]">
                    {values.description?.length || 0} chars
                  </span>
                </div>

                <textarea
                  id="description"
                  placeholder="Describe the task..."
                  {...register("description")}
                  className="min-h-32 w-full resize-y rounded-md border border-[#DED4CB] bg-white p-3 text-sm text-[#292323] outline-none transition placeholder:text-[#A69B93] focus:ring-2 focus:ring-[#7B1D20]"
                />

                {errors.description && (
                  <p className={errorClass}>{errors.description.message}</p>
                )}
              </div>

              {/* 03 ASSIGNED EMPLOYEE */}
              <div className="space-y-3 sm:col-span-2">
                <Label className={labelClass}>03 / Assigned employee</Label>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {employees.map((emp) => (
                    <label key={emp.value} className="relative">
                      <input
                        type="radio"
                        value={emp.value}
                        className="peer sr-only"
                        {...register("assignedEmployee")}
                      />
                      <span className={`${chipBase} justify-start`}>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B1D20]/10 text-[10px] font-semibold">
                          {emp.initials}
                        </span>
                        {emp.value}
                      </span>
                    </label>
                  ))}
                </div>

                {errors.assignedEmployee && (
                  <p className={errorClass}>
                    {errors.assignedEmployee.message}
                  </p>
                )}
              </div>

              {/* 04 PRIORITY */}
              <div className="space-y-3 sm:col-span-2">
                <Label className={labelClass}>04 / Priority</Label>

                <div className="grid grid-cols-3 gap-3">
                  {priorities.map((p) => (
                    <label key={p.value} className="relative">
                      <input
                        type="radio"
                        value={p.value}
                        className="peer sr-only"
                        {...register("priority")}
                      />
                      <span className={chipBase}>
                        <span className={`h-2 w-2 rounded-full ${p.dot} ring-1 ring-white/60`} />
                        {p.value}
                      </span>
                    </label>
                  ))}
                </div>

                {errors.priority && (
                  <p className={errorClass}>{errors.priority.message}</p>
                )}
              </div>

              {/* 05 DUE DATE */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="dueDate" className={labelClass}>
                  05 / Due date
                </Label>

                <Input
                  id="dueDate"
                  type="date"
                  {...register("dueDate")}
                  className={fieldClass}
                />

                {errors.dueDate && (
                  <p className={errorClass}>{errors.dueDate.message}</p>
                )}
              </div>

              {/* 06 TASK STATUS */}
              <div className="space-y-3 sm:col-span-2">
                <Label className={labelClass}>06 / Task status</Label>

                <div className="grid grid-cols-3 overflow-hidden rounded-md border border-[#DED4CB] bg-white">
                  {statuses.map((s) => (
                    <label key={s} className="relative">
                      <input
                        type="radio"
                        value={s}
                        className="peer sr-only"
                        {...register("taskStatus")}
                      />
                      <span className="flex h-12 cursor-pointer items-center justify-center gap-2 border-r border-[#DED4CB] px-2 text-center text-xs text-[#443532] transition last:border-r-0 hover:bg-[#F0EBE5] peer-checked:bg-[#7B1D20] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-inset peer-focus-visible:ring-[#E8C8B9] sm:text-sm">
                        {values.taskStatus === s && <Check size={14} />}
                        {s}
                      </span>
                    </label>
                  ))}
                </div>

                {errors.taskStatus && (
                  <p className={errorClass}>{errors.taskStatus.message}</p>
                )}
              </div>

              {/* SUBMIT */}
              <div className="pt-2 sm:col-span-2">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-md bg-[#7B1D20] text-white transition hover:bg-[#641619]"
                >
                  Create Task
                  <ArrowUpRight size={17} className="ml-2" />
                </Button>
              </div>
            </form>

            <p className="mt-8 text-center text-xs text-[#A69B93]">
              PulseWorks AI · Make room for meaningful work.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateTaskPage;