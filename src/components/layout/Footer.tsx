import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-beige)] text-[var(--color-brand-charcoal)] py-16 border-t border-[var(--color-brand-taupe)]/20 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold tracking-tight">UNBOXD</span>
            </Link>
            <p className="text-[var(--color-brand-charcoal)]/80 mb-6 font-medium">
              Thoughtful gifting, made easier.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[var(--color-brand-orange)] transition-colors">Home</Link></li>
              <li><Link href="/#gift-finder" className="hover:text-[var(--color-brand-orange)] transition-colors">Find a Gift</Link></li>
              <li><Link href="/gift-ideas" className="hover:text-[var(--color-brand-orange)] transition-colors">Gift Ideas</Link></li>
              <li><Link href="/occasions" className="hover:text-[var(--color-brand-orange)] transition-colors">Occasions</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[var(--color-brand-orange)] transition-colors">About UNBOXD</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-brand-orange)] transition-colors">Partner With Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-brand-orange)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social & Legal Column */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Social</h3>
            <ul className="space-y-3 mb-8">
              <li><a href="https://www.instagram.com/unboxd.foryou/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-orange)] transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com/@unboxd.foryou" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-orange)] transition-colors">YouTube</a></li>
            </ul>
            
            <h3 className="font-serif font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-brand-taupe)]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-brand-charcoal)]/60">
            &copy; 2026 UNBOXD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
