import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
      <p className="font-sans text-[13px] uppercase tracking-wide text-ink-faint">404</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">Page Not Found</h1>
      <p className="mt-3 font-sans text-[15px] text-ink-muted">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link href="/" className="mt-8 inline-block border border-ink px-6 py-3 font-sans text-[13px] uppercase tracking-wide text-ink hover:bg-ink hover:text-paper">
        Return Home
      </Link>
    </div>
  );
}
