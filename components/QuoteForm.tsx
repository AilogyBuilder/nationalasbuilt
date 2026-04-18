"use client";
import { useState, FormEvent } from "react";

const SELECT_STYLE = {
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7e96' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 12px center",
  paddingRight: 36,
};

interface Props {
  source?: string;
  defaultCity?: string;
}

export function QuoteForm({ source = "website", defaultCity = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);

    // Honeypot check — if filled, silently succeed
    if (fd.get("website_url")) {
      setStatus("success");
      return;
    }

    const payload: Record<string, string> = {};
    fd.forEach((val, key) => {
      payload[key] = String(val);
    });
    payload.source = source;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "An error occurred. Please call 972-342-7070."
      );
    }
  }

  if (status === "success") {
    return (
      <div style={{ background: "var(--bg)", border: "1.5px solid var(--navy-mid)", borderRadius: 8, padding: "40px 32px", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, background: "var(--navy-mid)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: 22, color: "var(--navy)", marginBottom: 10 }}>
          Request Received!
        </h3>
        <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.65, marginBottom: 24 }}>
          A member of our team will contact you within 2 business hours. If it&apos;s urgent, call us directly:
        </p>
        <a href="tel:9723427070" className="btn btn-primary btn-lg" style={{ justifyContent: "center" }}>
          Call 972-342-7070
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      {/* Row 1 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">Full name *</label>
          <input className="field-input" name="name" placeholder="John Smith" required />
        </div>
        <div className="field-group">
          <label className="field-label">Company</label>
          <input className="field-input" name="company" placeholder="ABC Architecture" />
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">Email address *</label>
          <input className="field-input" type="email" name="email" placeholder="john@company.com" required />
        </div>
        <div className="field-group">
          <label className="field-label">Phone number</label>
          <input className="field-input" type="tel" name="phone" placeholder="(972) 000-0000" />
        </div>
      </div>

      {/* Row 3 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">Project type *</label>
          <select className="field-input" name="projectType" required style={SELECT_STYLE}>
            <option value="">Select a service...</option>
            <option>Commercial As-Built Survey</option>
            <option>Residential Survey</option>
            <option>Scan-to-CAD</option>
            <option>Matterport 3D Virtual Tour</option>
            <option>Structural Survey</option>
            <option>Roof Survey</option>
            <option>ADA Survey</option>
            <option>Lease Area Verification</option>
            <option>Multi-site Rollout</option>
            <option>Permit Assistance</option>
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">Building type</label>
          <select className="field-input" name="buildingType" style={SELECT_STYLE}>
            <option>Commercial Office</option>
            <option>Retail</option>
            <option>Restaurant / Hospitality</option>
            <option>Industrial / Warehouse</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Residential</option>
            <option>Mixed Use</option>
            <option>Municipal / Government</option>
          </select>
        </div>
      </div>

      {/* Row 4 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">Est. square feet</label>
          <input className="field-input" name="squareFeet" placeholder="e.g. 10,000" />
        </div>
        <div className="field-group">
          <label className="field-label">Number of levels</label>
          <input className="field-input" type="number" name="levels" placeholder="e.g. 2" min="1" />
        </div>
      </div>

      {/* Full width fields */}
      <div className="field-group" style={{ marginBottom: 14 }}>
        <label className="field-label">Project location *</label>
        <input
          className="field-input"
          name="location"
          placeholder="City, State or full address"
          required
          defaultValue={defaultCity}
        />
      </div>

      <div className="field-group" style={{ marginBottom: 14 }}>
        <label className="field-label">Timeline</label>
        <select className="field-input" name="timeline" style={SELECT_STYLE}>
          <option>ASAP — within 1 week</option>
          <option>Within 2 weeks</option>
          <option>Within 1 month</option>
          <option>Planning phase — no rush</option>
        </select>
      </div>

      <div className="field-group" style={{ marginBottom: 20 }}>
        <label className="field-label">Project details &amp; special instructions</label>
        <textarea
          className="field-input"
          name="message"
          rows={4}
          placeholder="Describe your project, specific requirements, or anything we should know..."
          style={{ resize: "vertical" }}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 4, padding: "12px 16px", fontSize: 14, color: "#991b1b", marginBottom: 16 }}>
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          width: "100%",
          background: "var(--navy-mid)",
          color: "white",
          fontFamily: "var(--font-body, system-ui, sans-serif)",
          fontSize: 16,
          fontWeight: 700,
          padding: "15px",
          border: "none",
          borderRadius: 4,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
          transition: "all 0.15s",
          letterSpacing: "0.01em",
        }}
      >
        {status === "loading" ? "Sending..." : "Submit Quote Request — We Respond in 2 Hours"}
      </button>

      <p style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)", marginTop: 12 }}>
        Or call us directly:{" "}
        <a href="tel:9723427070" style={{ color: "var(--blue)", fontWeight: 600 }}>
          972-342-7070
        </a>
      </p>
    </form>
  );
}
