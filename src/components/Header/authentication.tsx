import Link from "next/link";

export default function Authentication() {
  return (
    <div className="flex items-center gap-x-6 font-semibold text-lg">
      <Link href={"/auth/signin"} className="hidden lg:block">
        Log In
      </Link>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border-none">
        Sign Up
      </button>
    </div>
  );
}
