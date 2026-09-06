export const navbarStyles = {
  nav: "flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 text-zinc-100 backdrop-blur-md sticky top-0 z-40",
  brand: "text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent",
  repoText: "text-sm text-zinc-400",
  repoLink: "ml-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-400",
};

export const homeStyles = {
  container: "relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-zinc-100 overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200",
  backgroundGlow: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl -z-10 pointer-events-none",
  heading: "mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-100 drop-shadow-sm",
  subheading: "mb-8 text-sm text-zinc-400 max-w-sm text-center",
  buttonWrapper: "flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md",
  btnCreate: "w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98] transition-all duration-150 cursor-pointer text-center",
  btnJoin: "w-full rounded-xl bg-zinc-800/80 border border-zinc-700/60 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600 active:scale-[0.98] transition-all duration-150 cursor-pointer text-center",
  backdrop: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200",
};

export const roomActionStyles = {
  modalContainer: "fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4 animate-in zoom-in-95 duration-150",
  card: "w-full rounded-2xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10",
  title: "mb-6 text-xl font-bold text-zinc-100 tracking-tight text-center",
  fieldGroup: "mb-4 space-y-1.5",
  label: "block text-xs font-semibold uppercase tracking-wider text-zinc-400",
  input: "w-full rounded-xl border border-zinc-700/70 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all",
  submitBtn: "mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] transition-all duration-150 cursor-pointer",
};