import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link className="px-3 py-2 text-sm font-medium hover:underline underline-offset-4" to={to}>
    {label}
  </Link>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-semibold" aria-label="UMYIDI home">
            UMYIDI
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            <NavLink to="/" label="Home" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  Projects ▾
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <Link to="/projects/ideate-nigeria-youth-enterprise-challenge">Ideate Nigeria Youth Enterprise Challenge</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projects/youth-ideas-challenge">Youth Ideas Challenge</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projects/ezumezu-podcast">Ezumezu: The Podcast</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  Community ▾
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/register">Register for a Program</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/member-volunteer">Become a Member/Volunteer</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                  About UMYIDI ▾
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <Link to="/about#history">History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#mission-vision">Mission & Vision</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#board">Board of Directors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about#youth-advisory">Youth Advisory Board</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/partnership" label="Partnership" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/contact" label="Contact" />

            <Button asChild variant="hero" className="ml-2">
              <Link to="/programs/register">Register</Link>
            </Button>
          </nav>

          <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <Menu />
          </Button>
        </div>

        {open && (
          <div className="md:hidden py-2 border-t">
            <div className="grid gap-2">
              <NavLink to="/" label="Home" />
              <details>
                <summary className="px-3 py-2 cursor-pointer">Projects</summary>
                <div className="grid">
                  <Link to="/projects/ideate-nigeria-youth-enterprise-challenge" className="px-6 py-2">Ideate Nigeria Youth Enterprise Challenge</Link>
                  <Link to="/projects/youth-ideas-challenge" className="px-6 py-2">Youth Ideas Challenge</Link>
                  <Link to="/projects/ezumezu-podcast" className="px-6 py-2">Ezumezu: The Podcast</Link>
                </div>
              </details>
              <details>
                <summary className="px-3 py-2 cursor-pointer">Community</summary>
                <div className="grid">
                  <Link to="/about" className="px-6 py-2">About</Link>
                  <Link to="/programs/register" className="px-6 py-2">Register for a Program</Link>
                  <Link to="/member-volunteer" className="px-6 py-2">Become a Member/Volunteer</Link>
                </div>
              </details>
              <details>
                <summary className="px-3 py-2 cursor-pointer">About UMYIDI</summary>
                <div className="grid">
                  <Link to="/about#history" className="px-6 py-2">History</Link>
                  <Link to="/about#mission-vision" className="px-6 py-2">Mission & Vision</Link>
                  <Link to="/about#board" className="px-6 py-2">Board of Directors</Link>
                  <Link to="/about#youth-advisory" className="px-6 py-2">Youth Advisory Board</Link>
                </div>
              </details>
              <NavLink to="/partnership" label="Partnership" />
              <NavLink to="/services" label="Services" />
              <NavLink to="/blog" label="Blog" />
              <NavLink to="/contact" label="Contact" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
