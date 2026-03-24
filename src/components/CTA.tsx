"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useI18n } from "@/lib/i18n-context";
import { Send, CheckCircle } from "lucide-react";
import ScrollFadeIn from "./ui/ScrollFadeIn";

export default function CTA() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-primary to-bg-dark"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("ctaHeadline")}
            </h2>
            <p className="text-lg text-white/70 mb-5">{t("ctaSubtext")}</p>
            <p className="text-sm text-white/50">
              {t("ctaTrustedByLeaders")}{" "}
              <span className="text-white/70">
                Dior · Ferragamo · Canada Goose · Gucci · YSL
              </span>
            </p>
          </div>

          {status === "sent" ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 text-center">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-xl font-semibold text-white mb-2">
                {t("formSuccessTitle")}
              </p>
              <p className="text-white/70">{t("formSuccessMsg")}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-card p-6 md:p-8 space-y-5"
            >
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY"}
              />
              <input type="hidden" name="subject" value="New enquiry from YG Consulting website" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    {t("formName")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder={t("formNamePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    {t("formEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder={t("formEmailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  {t("formCompany")}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder={t("formCompanyPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  {t("formMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder={t("formMessagePlaceholder")}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {status === "sending" ? t("formSending") : t("formSubmit")}
                </button>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white/60 hover:text-white transition-colors underline text-sm"
                >
                  {t("formOrEmail")} {CONTACT_EMAIL}
                </a>
              </div>

              {status === "error" && (
                <p className="text-red-300 text-sm">{t("formError")}</p>
              )}
            </form>
          )}
        </ScrollFadeIn>
      </div>
    </section>
  );
}
