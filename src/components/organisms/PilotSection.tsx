"use client";

import React, { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { FormField } from "../molecules/FormField";
import { Toast } from "./Toast";
import { pilotSectionData } from "@/data/pilot";

import { MotionFadeIn } from "../atoms/Motion";

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
    <section id="contact" className="relative bg-white py-12 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062f2e] via-[#0b4845] to-[#12615d] p-4 sm:p-10 lg:p-16 text-white shadow-glow">
          {/* Background Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10 [mask-image:linear-gradient(to_right,black,transparent)]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* MOBILE ONLY (< lg): Ultra-Compact Unified Card (~380px total height) */}
          <div className="relative z-10 lg:hidden flex flex-col">
            <div className="text-center mb-3.5">
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-0.5 text-[9.5px] font-extrabold tracking-widest text-teal-200 uppercase backdrop-blur-md mb-1.5">
                {badge}
              </span>
              <h2 className="font-sora text-xl font-bold tracking-tight text-white leading-tight">
                Demandez votre pilote gratuit.
              </h2>
              <p className="text-[11px] text-teal-100/80 mt-1">
                50 à 300 équipements · 2 à 3 mois d'essai · Sans engagement
              </p>
            </div>

            {/* Streamlined Form Box */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-4 text-brand-ink shadow-xl"
            >
              <div className="space-y-2.5">
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-2 gap-2">
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

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-2 gap-2">
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
                  label="Parc d'équipements"
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

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon="arrow"
                  iconPosition="right"
                  className="w-full justify-center text-xs font-bold py-2.5 mt-1 shadow-md"
                >
                  {form.submitText}
                </Button>

                <div className="flex items-center justify-center gap-3 text-[9px] text-brand-muted pt-1">
                  <span>✓ Sans engagement</span>
                  <span>·</span>
                  <span>✓ Déploiement personnalisé</span>
                </div>
              </div>
            </form>
          </div>

          {/* DESKTOP VIEW (lg+): Full 2-Column Experience */}
          <div className="relative z-10 hidden lg:grid grid-cols-12 gap-16 items-center">
            {/* Left Copy */}
            <MotionFadeIn className="col-span-6 flex flex-col items-start">
              <Badge variant="dark" dot className="mb-6 text-xs">
                {badge}
              </Badge>

              <h2 className="font-sora text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {titlePrimary} <br />
                <span className="text-teal-200 font-normal">{titleHighlight}</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-100/80 max-w-xl">
                {description}
              </p>

              {/* 3 Metrics */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 w-full">
                {metrics.map((metric, idx) => (
                  <div key={idx}>
                    <strong className="block font-sora text-2xl font-bold text-white">
                      {metric.value}
                    </strong>
                    <small className="block text-[11px] text-teal-200/80 mt-0.5">
                      {metric.label}
                    </small>
                  </div>
                ))}
              </div>
            </MotionFadeIn>

            {/* Right Interactive Pilot Form */}
            <MotionFadeIn delay={0.15} className="col-span-6">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-8 text-brand-ink shadow-2xl"
              >
                <div className="mb-6">
                  <span className="text-[11px] font-extrabold tracking-widest text-teal-800 uppercase">
                    {form.eyebrow}
                  </span>
                  <h3 className="mt-1 font-sora text-2xl font-bold text-brand-ink">
                    {form.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-muted">
                    {form.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Row 1: Name + Company */}
                  <div className="grid grid-cols-2 gap-4">
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

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      label="Email professionnel"
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

                  {/* Message field */}
                  <FormField
                    label="Votre besoin"
                    name="message"
                    type="textarea"
                    rows={3}
                    placeholder="Ex. Groupes électrogènes, climatiseurs, chambres froides..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    iconPosition="right"
                    className="w-full justify-center text-sm font-bold py-3 mt-1"
                  >
                    {form.submitText}
                  </Button>

                  <small className="block text-center text-[10.5px] text-brand-muted mt-2">
                    {form.note}
                  </small>
                </div>
              </form>
            </MotionFadeIn>
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
