import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowUpRight, Users, Brain, Layers } from "lucide-react";

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

const inputClass =
  "h-12 border-[#DED4CB] bg-white text-[#292323] placeholder:text-[#A69A94] focus-visible:ring-[#7B1D20]";
const labelClass = "text-sm font-medium text-[#413735]";
const eyeClass =
  "absolute right-3 top-1/2 -translate-y-1/2 text-[#887A74] transition hover:text-[#7B1D20]";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    alert("Registration UI submitted! Backend is not connected yet.");
  };

  const highlights = [
    { icon: Users, text: "Bring your team together" },
    { icon: Brain, text: "Make smarter decisions" },
    { icon: Layers, text: "Keep everything organised" },
  ];

  return (
    <AuthLayout
      minHeight="md:min-h-[750px]"
      eyebrow="Begin something better"
      title={
        <>
          Every great
          <br />
          workflow starts
          <br />
          <span className="italic text-[#E8C8B9]">somewhere.</span>
        </>
      }
      description="Create your space, bring your team together, and discover a more thoughtful way to get things done."
      footer={
        <div className="space-y-5">
          {highlights.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Icon size={17} />
              </div>
              <span className="text-sm text-[#F0DCD5]">{text}</span>
            </div>
          ))}
        </div>
      }
    >
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7B1D20]">
          Get started
        </p>
        <h2 className="font-serif text-4xl text-[#292323]">Create account.</h2>
        <p className="mt-3 text-sm leading-6 text-[#776D68]">
          Set up your account and make room for better work.
        </p>
      </div>

      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="hidden">
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Join PulseWorks AI</CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullname" className={labelClass}>Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                required
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className={labelClass}>Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className={labelClass}>Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className={eyeClass}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className={labelClass}>
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-invalid={mismatch}
                  className={`${inputClass} pr-12 ${
                    mismatch ? "border-red-600 focus-visible:ring-red-600" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className={eyeClass}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {mismatch && (
                <p className="text-xs text-red-700">Passwords do not match.</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={mismatch}
              className="h-12 w-full bg-[#7B1D20] text-white transition hover:bg-[#641619]"
            >
              Create Account
              <ArrowUpRight size={17} className="ml-2" />
            </Button>
          </form>

          <div className="mt-8 border-t border-[#DED4CB] pt-7 text-center">
            <p className="text-sm text-[#776D68]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#7B1D20] transition hover:text-[#A13A3D]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}