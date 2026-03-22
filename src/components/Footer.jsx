export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Ambuj Kumar Maurya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
