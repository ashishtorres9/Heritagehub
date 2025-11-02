import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A2A] text-[#F8F4E9] border-t-4 border-destructive">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="text-sm opacity-60" data-testid="text-copyright">
              Heritage Hub Nepal © 2025
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-medium mb-1">Tech Partner</p>
            <p className="text-sm opacity-90" data-testid="text-tech-partner">
              Mycopath by Atriforge
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
              data-testid="link-facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
              data-testid="link-instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
