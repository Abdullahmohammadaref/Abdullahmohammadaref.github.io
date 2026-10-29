export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white text-xs text-slate-500 font-mono border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} Abdullah Mohammad Aref.</span>
      </div>
    </footer>
  );
}
