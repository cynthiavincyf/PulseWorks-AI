import { useState } from "react";
import { Link } from "react-router-dom";

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
  X,
  ArrowRight,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const photos = {
  hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&auto=format&fit=crop&q=85",
  team: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&fit=crop&q=85",
  workspace: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop&q=85",
  notebook: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop&q=85",
  meeting: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop&q=85",
};

function LandingPages() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const navigation = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["Workspace", "#workspace"],
    ["AI Assistant", "#assistant"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F0EBE5] text-[#241D1E] selection:bg-[#7B1D20] selection:text-white">

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .delay-100 { animation-delay: .1s; }
        .delay-200 { animation-delay: .2s; }
        .delay-300 { animation-delay: .3s; }

        .editorial {
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 400;
          letter-spacing: -0.045em;
        }

        .body-font {
          font-family: Arial, Helvetica, sans-serif;
        }

        .paper-shadow {
          box-shadow: 8px 8px 0px rgba(123, 29, 32, 0.12);
        }

        .image-frame {
          overflow: hidden;
          background: #D9D0C8;
        }

        .image-frame img {
          transition: transform .7s ease;
        }

        .image-frame:hover img {
          transform: scale(1.045);
        }
      `}</style>

      {/* NAVIGATION */}

      <nav className="sticky top-0 z-50 border-b border-[#D5CBC3] bg-[#F0EBE5]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex h-[76px] items-center justify-between">

            <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#7B1D20] text-white">
                <Sparkles size={21} />
              </div>

              <span className="body-font text-xl font-bold tracking-tight">
                PulseWorks <span className="text-[#7B1D20]">AI</span>
              </span>
            </Link>

            <div className="hidden items-center gap-6 body-font text-[13px] font-medium text-[#625758] lg:flex">
              {navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="transition hover:text-[#7B1D20]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 body-font text-sm sm:flex">
              <Button
                asChild
                variant="ghost"
                className="h-auto rounded-none px-4 py-3 font-medium hover:bg-transparent hover:text-[#7B1D20]"
              >
                <Link to="/login">Log in</Link>
              </Button>

              <Button
                asChild
                className="h-auto rounded-none bg-[#7B1D20] px-5 py-3 font-medium text-white hover:bg-[#5D1518]"
              >
                <Link to="/register">
                  Get started <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute left-4 right-4 top-[76px] border border-[#D5CBC3] bg-[#F0EBE5] p-6 shadow-xl lg:hidden">
              <div className="body-font flex flex-col gap-5 text-sm">
                {navigation.map(([label, href]) => (
                  <a key={label} href={href} onClick={closeMenu}>
                    {label}
                  </a>
                ))}

                <div className="flex flex-col gap-3 border-t border-[#D5CBC3] pt-5">
                  <Button
                    asChild
                    variant="outline"
                    className="h-auto rounded-none border-[#B9AAA3] bg-transparent p-3 hover:border-[#7B1D20] hover:bg-transparent hover:text-[#7B1D20]"
                  >
                    <Link to="/login" onClick={closeMenu}>Log in</Link>
                  </Button>

                  <Button
                    asChild
                    className="h-auto rounded-none bg-[#7B1D20] p-3 text-white hover:bg-[#5D1518]"
                  >
                    <Link to="/register" onClick={closeMenu}>Get started</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}

      <section id="home" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <div className="fade-up inline-flex items-center gap-2 border border-[#C9B7B2] px-4 py-2 body-font text-xs uppercase tracking-[.16em] text-[#7B1D20]">
              <Sparkles size={14} />
              Intelligence for modern teams
            </div>

            <h1 className="editorial fade-up delay-100 mt-8 text-6xl leading-[1.05] sm:text-7xl lg:text-[82px]">
              Less busywork.
              <span className="mt-2 block italic text-[#7B1D20]">
                More meaningful work.
              </span>
            </h1>

            <p className="body-font fade-up delay-200 mt-7 max-w-lg text-base leading-8 text-[#746967]">
              Projects, people and AI, finally in one place.
              PulseWorks helps teams focus on what matters,
              collaborate better and move work forward.
            </p>

            <div className="fade-up delay-300 mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                className="body-font h-auto gap-3 rounded-none bg-[#7B1D20] px-7 py-4 text-sm font-semibold text-white hover:bg-[#5D1518]"
              >
                <Link to="/register">
                  Get started <ArrowUpRight size={17} />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="body-font h-auto gap-3 rounded-none border-[#B9AAA3] bg-transparent px-7 py-4 text-sm font-medium hover:border-[#7B1D20] hover:bg-transparent hover:text-[#7B1D20]"
              >
                <a href="#features">
                  Explore platform <ArrowRight size={16} />
                </a>
              </Button>
            </div>

            <div className="body-font mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#756A67]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#7B1D20]" />
                Built for teams
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#7B1D20]" />
                AI-powered
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#7B1D20]" />
                Secure by design
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="image-frame paper-shadow border-[7px] border-white">
              <img
                src={photos.hero}
                alt="Modern collaborative workspace"
                className="h-[360px] w-full object-cover sm:h-[470px]"
              />
            </div>

            <div className="absolute -bottom-7 -left-3 max-w-[240px] bg-[#7B1D20] p-5 text-[#F0EBE5] shadow-xl sm:-left-8">
              <Sparkles size={19} className="mb-3 text-[#E6B9B4]" />
              <p className="editorial text-2xl leading-tight">
                Work smarter.
                <span className="block italic text-[#E6B9B4]">
                  Together.
                </span>
              </p>
              <p className="body-font mt-3 text-[10px] uppercase tracking-widest text-[#E8D3D0]">
                The PulseWorks approach
              </p>
            </div>

            <div className="absolute -right-2 -top-5 hidden border border-[#B9AAA3] bg-[#F0EBE5] px-4 py-3 body-font text-xs tracking-wider sm:block">
              WORK / CONNECT / CREATE
            </div>
          </div>

        </div>
      </section>

      {/* EDITORIAL INTRO STRIP */}

      <section className="bg-[#7B1D20] py-6 text-[#F0EBE5]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 body-font text-xs uppercase tracking-[.2em] md:justify-between md:px-10">
          <span>Projects</span>
          <span className="text-[#D9A8A5]">✳</span>
          <span>People</span>
          <span className="text-[#D9A8A5]">✳</span>
          <span>Intelligence</span>
          <span className="text-[#D9A8A5]">✳</span>
          <span>Progress</span>
        </div>
      </section>

      {/* WORKSPACE GALLERY */}

      <section id="workspace" className="bg-[#F0EBE5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="body-font text-xs uppercase tracking-[.22em] text-[#7B1D20]">
                Inside PulseWorks
              </p>

              <h2 className="editorial mt-4 text-5xl sm:text-6xl">
                A space for
                <span className="italic text-[#7B1D20]"> everything.</span>
              </h2>
            </div>

            <p className="body-font max-w-sm text-sm leading-7 text-[#746967]">
              From the first idea to the final milestone,
              bring your work together in one connected space.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-12">

            <div className="group md:col-span-7">
              <div className="image-frame paper-shadow border-[6px] border-white">
                <img
                  src={photos.workspace}
                  alt="Organized creative workspace"
                  loading="lazy"
                  className="h-[280px] w-full object-cover sm:h-[370px]"
                />
              </div>

              <p className="body-font mt-5 text-[10px] uppercase tracking-[.2em] text-[#7B1D20]">
                01 / Project management
              </p>

              <h3 className="editorial mt-2 text-3xl">
                Ideas become projects.
              </h3>

              <p className="body-font mt-2 text-sm leading-7 text-[#746967]">
                Organize plans, track progress and keep priorities visible.
              </p>
            </div>

            <div className="group md:col-span-5 md:mt-20">
              <div className="image-frame paper-shadow border-[6px] border-white">
                <img
                  src={photos.team}
                  alt="Team members collaborating"
                  loading="lazy"
                  className="h-[260px] w-full object-cover sm:h-[300px]"
                />
              </div>

              <p className="body-font mt-5 text-[10px] uppercase tracking-[.2em] text-[#7B1D20]">
                02 / Collaboration
              </p>

              <h3 className="editorial mt-2 text-3xl">
                Better, together.
              </h3>

              <p className="body-font mt-2 text-sm leading-7 text-[#746967]">
                Bring people, conversations and responsibilities together.
              </p>
            </div>

            <div className="group md:col-span-5">
              <div className="image-frame paper-shadow border-[6px] border-white">
                <img
                  src={photos.notebook}
                  alt="Notebook and writing materials"
                  loading="lazy"
                  className="h-[280px] w-full object-cover"
                />
              </div>

              <p className="body-font mt-5 text-[10px] uppercase tracking-[.2em] text-[#7B1D20]">
                03 / Organization
              </p>

              <h3 className="editorial mt-2 text-3xl">
                Keep every detail.
              </h3>

              <p className="body-font mt-2 text-sm leading-7 text-[#746967]">
                Keep documents and important information organized.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-[#7B1D20] p-8 text-[#F0EBE5] md:col-span-7 md:p-12">
              <Sparkles size={25} className="text-[#E6B9B4]" />

              <h3 className="editorial mt-6 text-5xl leading-tight">
                Less searching.
                <span className="block italic text-[#E6B9B4]">
                  More creating.
                </span>
              </h3>

              <p className="body-font mt-5 max-w-md text-sm leading-7 text-[#E8D3D0]">
                A connected workspace designed to help teams
                spend their energy on the work that matters.
              </p>

              <a
                href="#features"
                className="body-font mt-7 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Explore features <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section id="features" className="border-t border-[#D5CBC3] bg-[#E5DDD5] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">

          <div className="max-w-2xl">
            <p className="body-font text-xs uppercase tracking-[.22em] text-[#7B1D20]">
              Everything connected
            </p>

            <h2 className="editorial mt-5 text-5xl leading-tight sm:text-6xl">
              Your work.
              <span className="italic text-[#7B1D20]"> In sync.</span>
            </h2>

            <p className="body-font mt-5 max-w-lg text-sm leading-8 text-[#746967]">
              A thoughtfully connected system that removes
              friction from everyday workflows.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<Activity />}
              number="01"
              title="Project intelligence"
              description="See progress, priorities and project health without digging through endless updates."
            />

            <Feature
              icon={<Users />}
              number="02"
              title="Team collaboration"
              description="Bring people, conversations and responsibilities into one shared workspace."
            />

            <Feature
              icon={<Brain />}
              number="03"
              title="AI assistance"
              description="Get help understanding documents and organizing everyday work."
            />

            <Feature
              icon={<Files />}
              number="04"
              title="Document intelligence"
              description="Keep your files organized and make important information easier to find."
            />

            <Feature
              icon={<Zap />}
              number="05"
              title="Connected workflows"
              description="Stay informed with updates and activity notifications."
            />

            <Feature
              icon={<Shield />}
              number="06"
              title="Security at its core"
              description="Support controlled access, protected accounts and activity tracking."
            />
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}

      <section id="assistant" className="bg-[#292323] py-24 text-[#F0EBE5] md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">

          <div>
            <p className="body-font text-xs uppercase tracking-[.22em] text-[#D99AA8]">
              A smarter way to work
            </p>

            <h2 className="editorial mt-5 text-5xl leading-tight sm:text-6xl">
              Meet your
              <span className="block italic text-[#D99AA8]">
                AI companion.
              </span>
            </h2>

            <p className="body-font mt-6 max-w-lg text-sm leading-8 text-[#C5B8B0]">
              Bring intelligent assistance into your workflow.
              Make information easier to understand and turn
              everyday tasks into manageable steps.
            </p>

            <div className="mt-9 space-y-6">
              <AssistantFeature
                title="Document assistance"
                description="Get help understanding your documents."
              />

              <AssistantFeature
                title="Task support"
                description="Organize and prioritize your work."
              />

              <AssistantFeature
                title="Information summaries"
                description="Make long information easier to review."
              />
            </div>
          </div>

          <div className="border border-[#76515C] bg-[#3A292F] p-5 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#76515C] pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-[#7B1D20]">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="body-font text-sm font-semibold">Pulse AI</p>
                  <p className="body-font mt-1 text-xs text-[#C5B8B0]">
                    Workspace assistant
                  </p>
                </div>
              </div>

              <span className="body-font text-[10px] uppercase tracking-widest text-[#D99AA8]">
                Preview
              </span>
            </div>

            <div className="space-y-6 py-8">
              <div className="ml-auto max-w-[85%] bg-[#7B1D20] p-4">
                <p className="body-font text-xs leading-6">
                  Help me organize my team's upcoming project tasks.
                </p>
              </div>

              <div className="max-w-[92%] bg-[#F0EBE5] p-5 text-[#292323]">
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-[#7B1D20]" />
                  <span className="body-font text-xs font-semibold">Pulse AI</span>
                </div>

                <p className="body-font mt-4 text-xs leading-6">
                  Here is a suggested starting point:
                </p>

                <ul className="body-font mt-4 space-y-4 text-xs">
                  {[
                    "Review project requirements",
                    "Assign team responsibilities",
                    "Set project deadlines",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={14} className="text-[#7B1D20]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="body-font border-t border-[#76515C] pt-4 text-center text-[10px] text-[#C5B8B0]">
              Concept preview · AI functionality requires backend integration
            </p>
          </div>
        </div>
      </section>

      {/* SECURITY */}

      <section id="security" className="bg-[#E5DDD5] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 border border-[#C9B7B2] bg-[#F0EBE5] p-8 md:grid-cols-2 md:items-center md:p-14">

            <div>
              <div className="flex items-center gap-3 text-[#7B1D20]">
                <Shield size={19} />
                <span className="body-font text-xs font-semibold uppercase tracking-[.18em]">
                  Security first
                </span>
              </div>

              <h2 className="editorial mt-5 text-5xl leading-tight">
                Your workspace.
                <span className="block italic text-[#7B1D20]">
                  Your control.
                </span>
              </h2>

              <p className="body-font mt-5 max-w-md text-sm leading-8 text-[#746967]">
                Build a more organized environment with
                controlled access, account protection
                and workspace activity visibility.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <SecurityItem text="Role-based access" />
              <SecurityItem text="Secure login" />
              <SecurityItem text="Activity logs" />
              <SecurityItem text="Protected files" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="bg-[#F0EBE5] py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">

          <div className="image-frame paper-shadow border-[7px] border-white">
            <img
              src={photos.meeting}
              alt="Team meeting around a table"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[460px]"
            />
          </div>

          <div>
            <p className="body-font text-xs uppercase tracking-[.22em] text-[#7B1D20]">
              About PulseWorks
            </p>

            <h2 className="editorial mt-5 text-5xl leading-tight sm:text-6xl">
              Built for teams that
              <span className="block italic text-[#7B1D20]">
                value clarity.
              </span>
            </h2>

            <div className="mt-10 space-y-8">
              <AboutItem
                number="01"
                title="One connected space"
                text="Projects, people and information live together, so nothing slips through the cracks."
              />
              <AboutItem
                number="02"
                title="Intelligence that helps"
                text="AI support that makes work easier to understand, never harder to manage."
              />
              <AboutItem
                number="03"
                title="Designed with care"
                text="A calm, thoughtful interface that keeps the focus on meaningful work."
              />
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="bg-[#D9D0C8] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="body-font text-xs uppercase tracking-[.22em] text-[#7B1D20]">
              Let's get started
            </p>

            <h2 className="editorial mt-5 text-5xl leading-tight sm:text-6xl">
              Good work starts
              <span className="block italic text-[#7B1D20]">
                with a new perspective.
              </span>
            </h2>

            <p className="body-font mt-6 max-w-md text-sm leading-8 text-[#746967]">
              Bring your people, projects and ideas together.
              Make room for a more connected way of working.
            </p>
          </div>

          <Card className="rounded-none border-[#B9AAA3] bg-[#F0EBE5] shadow-none">
            <CardContent className="p-8 sm:p-10">
              <Sparkles size={26} className="text-[#7B1D20]" />

              <h3 className="editorial mt-6 text-4xl">
                Ready to begin?
              </h3>

              <p className="body-font mt-4 text-sm leading-7 text-[#746967]">
                Take the first step towards a more connected workflow.
              </p>

              <Button
                asChild
                className="body-font mt-8 h-auto gap-3 rounded-none bg-[#7B1D20] px-7 py-4 text-sm font-semibold text-white hover:bg-[#5D1518]"
              >
                <Link to="/register">
                  Create your account <ArrowUpRight size={17} />
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#241D1E] py-10 text-[#F0EBE5]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">

          <div className="flex flex-col justify-between gap-8 border-b border-[#514147] pb-9 sm:flex-row sm:items-center">

            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#7B1D20]">
                <Sparkles size={19} />
              </div>

              <span className="body-font text-lg font-semibold">
                PulseWorks <span className="text-[#D99AA8]">AI</span>
              </span>
            </Link>

            <div className="body-font flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#C5B8B0]">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#workspace" className="hover:text-white">Workspace</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#security" className="hover:text-white">Security</a>
              <Link to="/login" className="hover:text-white">Login</Link>
            </div>
          </div>

          <div className="body-font flex flex-col justify-between gap-3 pt-6 text-xs text-[#9F9190] sm:flex-row">
            <p>© 2026 PulseWorks AI. Built for meaningful work.</p>
            <p>Projects. People. Possibilities.</p>
          </div>

        </div>
      </footer>

    </main>
  );
}

/* REUSABLE COMPONENTS */

function Feature({ icon, number, title, description }) {
  return (
    <Card className="group rounded-none border-[#CFC2B9] bg-[#F0EBE5] shadow-none transition duration-300 hover:-translate-y-1 hover:border-[#7B1D20]">
      <CardContent className="p-7">
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center bg-[#7B1D20]/10 text-[#7B1D20] transition group-hover:bg-[#7B1D20] group-hover:text-white">
            {icon}
          </div>
          <span className="body-font text-xs tracking-widest text-[#9A8882]">
            {number}
          </span>
        </div>

        <h3 className="editorial mt-7 text-2xl">{title}</h3>

        <p className="body-font mt-3 text-sm leading-7 text-[#746967]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function AssistantFeature({ title, description }) {
  return (
    <div className="flex gap-4 border-b border-[#514147] pb-5">
      <div className="mt-1 text-[#D99AA8]">
        <Sparkles size={18} />
      </div>

      <div>
        <h3 className="body-font text-sm font-semibold">{title}</h3>
        <p className="body-font mt-2 text-xs leading-6 text-[#C5B8B0]">
          {description}
        </p>
      </div>
    </div>
  );
}

function AboutItem({ number, title, text }) {
  return (
    <div className="flex gap-5">
      <span className="body-font pt-2 text-xs text-[#7B1D20]">
        {number}
      </span>

      <div>
        <h3 className="editorial text-2xl">{title}</h3>
        <p className="body-font mt-3 text-sm leading-7 text-[#746967]">
          {text}
        </p>
      </div>
    </div>
  );
}

function SecurityItem({ text }) {
  return (
    <div className="flex min-h-[65px] items-center gap-3 border border-[#D5CBC3] bg-white/50 p-4 body-font text-xs text-[#514648]">
      <Check size={16} className="shrink-0 text-[#7B1D20]" />
      {text}
    </div>
  );
}

export default LandingPages;