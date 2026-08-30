"use client";

import React, { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { FormField } from "../molecules/FormField";
import { Toast } from "./Toast";
import { pilotSectionData } from "@/data/pilot";

export function PilotSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    parkSize: "50 à 250 équipements",
    message: "",
  });

  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    }, 4500);

    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      parkSize: "50 à 250 équipements",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { badge, titlePrimary, titleHighlight, description, metrics, form } =
    pilotSectionData;

  return (
    <section id="contact" className="relative bg-white py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062f2e] via-[#0b4845] to-[#12615d] p-5 sm:p-10 lg:p-16 text-white shadow-glow">
          {/* Background Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10 [mask-image:linear-gradient(to_right,black,transparent)]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <Badge variant="dark" dot className="mb-3 sm:mb-6 text-[10px] sm:text-xs">
                {badge}
              </Badge>

              <h2 className="font-sora text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {titlePrimary} <br />
                <span className="text-teal-200 font-normal">{titleHighlight}</span>
              </h2>

              <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-teal-100/80 max-w-xl">
                {description}
              </p>

              {/* 3 Metrics */}
              <div className="mt-4 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/15 pt-3.5 sm:pt-6 w-full">
                {metrics.map((metric, idx) => (
                  <div key={idx}>
                    <strong className="block font-sora text-sm sm:text-2xl font-bold text-white">
                      {metric.value}
                    </strong>
                    <small className="block text-[9px] sm:text-[11px] text-teal-200/80 mt-0.5">
                      {metric.label}
                    </small>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Pilot Form (Compact 2-col inputs on mobile) */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-4 sm:p-8 text-brand-ink shadow-2xl"
              >
                <div className="mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-teal-800 uppercase">
                    {form.eyebrow}
                  </span>
                  <h3 className="mt-0.5 sm:mt-1 font-sora text-lg sm:text-2xl font-bold text-brand-ink">
                    {form.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs text-brand-muted">
                    {form.subtitle}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Row 1: Name + Company (2 cols even on mobile) */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    <FormField
                      label="Nom & prénom"
                      name="fullName"
                      placeholder="Votre nom"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Entreprise"
                      name="company"
                      placeholder="Organisation"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Row 2: Email + Phone (2 cols even on mobile) */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    <FormField
                      label="Email pro"
                      name="email"
                      type="email"
                      placeholder="vous@site.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Téléphone"
                      name="phone"
                      type="tel"
                      placeholder="+221 ..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Park Size select */}
                  <FormField
                    label="Votre parc d'équipements"
                    name="parkSize"
                    type="select"
                    options={[
                      "Moins de 50 équipements",
                      "50 à 250 équipements",
                      "250 à 1 000 équipements",
                      "Plus de 1 000 équipements",
                    ]}
                    value={formData.parkSize}
                    onChange={handleChange}
                  />

                  {/* Message field: 2 rows on mobile */}
                  <FormField
                    label="Votre besoin"
                    name="message"
                    type="textarea"
                    rows={2}
                    placeholder="Ex. Groupes électrogènes, climatiseurs, chambres froides..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon="arrow"
                    iconPosition="right"
                    className="w-full justify-center text-xs sm:text-sm font-bold py-3 mt-1"
                  >
                    {form.submitText}
                  </Button>

                  <small className="block text-center text-[9.5px] sm:text-[10.5px] text-brand-muted mt-2">
                    {form.note}
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        show={toastOpen}
        title={form.toastTitle}
        message={form.toastMessage}
        onClose={() => setToastOpen(false)}
      />
    </section>
  );
}
