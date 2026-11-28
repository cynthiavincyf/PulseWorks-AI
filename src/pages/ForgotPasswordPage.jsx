import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MailCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import AuthLayout from "@/components/AuthLayout";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthLayout
      eyebrow="Account recovery"
      title={
        <>
          It happens to
          <br />
          <span className="italic text-[#E8C8B9]">the best of us.</span>
        </>
      }
      description="Enter your email and we'll help you get back to your workspace."
      footer={
        <p className="text-sm text-[#F0DCD5]/80">
          Make room for meaningful work.
        </p>
      }
    >
      <div className="mb-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7B1D20]">
          Forgot password
        </p>
        <h2 className="font-serif text-4xl text-[#292323]">Reset access.</h2>
        <p className="mt-3 text-sm leading-6 text-[#776D68]">
          We'll send a reset link to your email address.
        </p>
      </div>

      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          {sent ? (
            <div className="flex items-start gap-3 border border-[#DED4CB] bg-white p-5 text-sm text-[#443532]">
              <MailCheck size={20} className="mt-0.5 shrink-0 text-[#7B1D20]" />
              <p>
                If an account exists for that email, a reset link is on its way.
                (UI preview: backend is not connected yet.)
              </p>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
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

              <Button
                type="submit"
                className="h-12 w-full bg-[#7B1D20] text-white transition hover:bg-[#641619]"
              >
                Send reset link
                <ArrowUpRight size={17} className="ml-2" />
              </Button>
            </form>
          )}

          <div className="mt-8 border-t border-[#DED4CB] pt-7 text-center">
            <p className="text-sm text-[#776D68]">
              Remembered it?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#7B1D20] transition hover:text-[#A13A3D]"
              >
                Back to sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}