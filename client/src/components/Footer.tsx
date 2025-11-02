import { Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A2A] text-[#F8F4E9] border-t-4 border-destructive">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold mb-3">Heritage Hub Nepal</h3>
            <p className="text-sm opacity-80 mb-2">
              Sustainable Ventures Initiative
            </p>
            <p className="text-sm opacity-60" data-testid="text-copyright">
              © 2025 All Rights Reserved
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/farm-models">
                <span className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                  Mushroom Farming
                </span>
              </Link>
              <Link href="/vision">
                <span className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                  Our Vision
                </span>
              </Link>
              <Link href="/about">
                <span className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                  About Us
                </span>
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-sm font-medium mb-3">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
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
            <p className="text-xs opacity-80" data-testid="text-tech-partner">
              Tech Partner: Mycopath by Atriforge
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs opacity-70">
            Part of Heritage Hub Nepal's Sustainable Ventures Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
