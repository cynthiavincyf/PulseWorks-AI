// Save as: src/components/AuthLayout.jsx
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";
import LeafBackground from "@/components/LeafBackground";

/**
 * Shared shell for Login, Register and Forgot Password.
 * Props:
 *  - eyebrow:     small uppercase text on the burgundy panel
 *  - title:       heading node for the burgundy panel
 *  - description: paragraph under the heading
 *  - footer:      node shown at the bottom of the burgundy panel
 *  - minHeight:   tailwind min-height class for the panel on desktop
 *  - children:    the right-hand form content
 */
export default function AuthLayout({
  eyebrow,
  title,
  description,
  footer,
  minHeight = "md:min-h-[650px]",
  children,
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F0EBE5] px-4 py-10 text-[#292323]">
      <LeafBackground />

      <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-2xl border border-[#DED4CB] bg-[#FAF8F5] shadow-2xl shadow-[#5A2525]/10 md:grid-cols-2">

        {/* Left Editorial Panel */}
        <div
          className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#7B1D20] p-9 text-[#FAF5EF] md:p-12 ${minHeight}`}
        >
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 top-36 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <Link to="/" className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10">
              <Sparkles size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              PulseWorks <span className="text-[#E8C8B9]">AI</span>
            </span>
          </Link>

          <div className="relative z-10 my-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8C8B9]">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#F0DCD5]/80">
              {description}
            </p>
          </div>

          <div className="relative z-10">
            <div className="mb-6 h-px w-full bg-white/20" />
            {footer}
            <p className="mt-10 text-xs tracking-wide text-[#F0DCD5]/50">
              © {new Date().getFullYear()} PulseWorks AI
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center px-6 py-12 md:px-12">
          <div className="w-full max-w-sm">
            {children}

            <Link
              to="/"
              className="mt-8 flex items-center justify-center gap-2 text-sm text-[#887A74] transition hover:text-[#7B1D20]"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}