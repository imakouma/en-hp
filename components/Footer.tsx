import Logo, { COMPANY_NAME } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-gray-950 py-8 pb-[calc(5rem+env(safe-area-inset-bottom))] md:py-10 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <Logo size="sm" showText={false} />
          <span className="text-sm text-slate-400">
            © {new Date().getFullYear()} {COMPANY_NAME} All rights reserved.
          </span>
        </div>
        <p className="text-xs text-slate-500">人とAIを繋ぎ、リアルを動かす。</p>
      </div>
    </footer>
  );
}
