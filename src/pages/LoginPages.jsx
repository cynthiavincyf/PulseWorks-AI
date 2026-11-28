import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import AuthLayout from "@/components/AuthLayout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login UI submitted! Backend authentication is not connected yet.");
  };

  return (
    <AuthLayout
      eyebrow="Your workspace awaits"
      title={
        <>
          Make room for
          <br />
          <span className="italic text-[#E8C8B9]">meaningful work.</span>
        </>
      }
      description="Your ideas, your team, your progress. Everything comes together in one thoughtful workspace."
      footer={
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Check size={17} />
          </div>
          <div>
            <p className="text-sm font-medium">A better way to work</p>
            <p className="mt-1 text-xs text-[#F0DCD5]/70">
              Organised. Connected. Focused.
            </p>
          </div>
        </div>
      }
    >
      <div className="mb-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7B1D20]">
          Welcome back
        </p>
        <h2 className="font-serif text-4xl text-[#292323]">Sign in.</h2>
        <p className="mt-3 text-sm leading-6 text-[#776D68]">
          Pick up right where you left off. Your workspace is waiting.
        </p>
      </div>

      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="hidden">
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#413735]">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="h-12 border-[#DED4CB] bg-white text-[#292323] placeholder:text-[#A69A94] focus-visible:ring-[#7B1D20]"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[#413735]">
                Password
              </Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="h-12 border-[#DED4CB] bg-white pr-12 text-[#292323] placeholder:text-[#A69A94] focus-visible:ring-[#7B1D20]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#887A74] transition hover:text-[#7B1D20]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember and Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-[#776D68]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-[#7B1D20]"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="font-medium text-[#7B1D20] transition hover:text-[#A13A3D]"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="h-12 w-full bg-[#7B1D20] text-white transition hover:bg-[#641619]"
            >
              Sign In
              <ArrowUpRight size={17} className="ml-2" />
            </Button>
          </form>

          <div className="mt-8 border-t border-[#DED4CB] pt-7 text-center">
            <p className="text-sm text-[#776D68]">
              New to PulseWorks?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#7B1D20] transition hover:text-[#A13A3D]"
              >
                Create an account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}