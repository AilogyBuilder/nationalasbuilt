import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 96, color: "var(--border)", lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--navy)", margin: "16px 0 12px" }}>Page not found</h1>
        <p style={{ fontSize: 16, color: "var(--text-mid)", marginBottom: 32 }}>The page you're looking for doesn't exist or has moved.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">Go to homepage</Link>
          <a href="tel:9723427070" className="btn btn-outline">Call 972-342-7070</a>
        </div>
      </div>
    </section>
  );
}
