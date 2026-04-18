"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadInput, leadSchema } from "@/lib/lead-schema";

type Props = {
  source?: string;
  page?: string;
  compact?: boolean;
};

export function LeadForm({ source = "homepage", page = "/", compact = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const startedAt = useMemo(() => new Date().toISOString(), []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      source,
      page,
      projectType: "Commercial As-Built Survey",
      timeline: "Within 2 weeks",
      startedAt
    }
  });

  const onSubmit = async (values: LeadInput) => {
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      setMessage("Thanks — your request was received. A team member can follow up by phone or email.");
      reset({ source, page, projectType: "Commercial As-Built Survey", timeline: "Within 2 weeks", startedAt: new Date().toISOString() });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit form.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <div className="text-lg font-semibold text-slate-950">{compact ? "Request a proposal" : "Get your quote started"}</div>
      <p className="mt-2 text-slate-600">This form is wired for CRM capture and notification emails. Configure HubSpot and Resend in environment variables.</p>
      <input type="hidden" {...register("source")} value={source} />
      <input type="hidden" {...register("page")} value={page} />
      <input type="hidden" {...register("startedAt")} value={startedAt} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honey")} />
      <div className={`mt-6 grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
        <div>
          <label className="label">Name</label>
          <input className="input" {...register("name")} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" {...register("email")} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" {...register("phone")} />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="label">Company</label>
          <input className="input" {...register("company")} />
        </div>
        <div>
          <label className="label">Project type</label>
          <select className="input" {...register("projectType")}>
            <option>Commercial As-Built Survey</option>
            <option>Residential Survey</option>
            <option>Scan-to-CAD</option>
            <option>Matterport 3D Virtual Tour</option>
            <option>ADA / roof / structural survey</option>
            <option>Multi-site rollout</option>
          </select>
        </div>
        <div>
          <label className="label">Estimated square feet</label>
          <input className="input" type="number" {...register("squareFeet", { valueAsNumber: true })} />
          {errors.squareFeet && <p className="mt-1 text-sm text-red-600">{errors.squareFeet.message}</p>}
        </div>
        <div>
          <label className="label">City / market</label>
          <input className="input" {...register("city")} />
        </div>
        <div>
          <label className="label">Timeline</label>
          <select className="input" {...register("timeline")}>
            <option>ASAP</option>
            <option>Within 2 weeks</option>
            <option>Within 30 days</option>
            <option>Planning for later</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="label">Project details</label>
          <textarea className="input min-h-32" {...register("message")} />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : compact ? "Request proposal" : "Submit quote request"}
        </button>
        <a href="mailto:info@nationalasbuilt.com" className="btn-secondary">Email instead</a>
      </div>
      {message ? (
        <p className={`mt-4 text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}>{message}</p>
      ) : null}
    </form>
  );
}
