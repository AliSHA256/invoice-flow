import Link from "next/link"

const steps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    step: "01",
    title: "Create",
    description:
      "Build professional invoices in seconds with smart templates. Add line items, taxes, and your branding.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    step: "02",
    title: "Send",
    description:
      "Deliver invoices directly to your clients via email with one click. They can view and pay online.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    step: "03",
    title: "Get Paid",
    description:
      "Receive payments directly to your account. Automatic reminders chase late invoices for you.",
  },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Recurring Invoices",
    description: "Set up automatic invoicing for retainer clients and never miss a billing cycle.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "Payment Reminders",
    description: "Automated follow-ups nudge late payers so you don't have to chase them manually.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: "Multi-Currency Support",
    description:
      "Invoice clients in USD, EUR, GBP, and 50+ currencies. Exchange rates update automatically.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Client Portal",
    description:
      "Give clients their own portal to view invoices, download receipts, and track payment history.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Expense Tracking",
    description:
      "Log project expenses and automatically attach them to invoices. Simplify tax season.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Real-Time Reports",
    description:
      "See your income, outstanding invoices, and cash flow at a glance with live dashboards.",
  },
]

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for freelancers just starting out.",
    features: [
      "Up to 3 active clients",
      "5 invoices per month",
      "Basic templates",
      "Email delivery",
      "Payment tracking",
    ],
    cta: "Get started free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For growing freelancers who need more power.",
    features: [
      "Unlimited clients",
      "Unlimited invoices",
      "Recurring invoices",
      "Payment reminders",
      "Multi-currency support",
      "Expense tracking",
      "Client portal",
    ],
    cta: "Start Pro trial",
    href: "/signup",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "per month",
    description: "For established freelancers with high volume.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom branding",
      "Priority support",
      "Advanced reports",
      "API access",
      "Accounting integrations",
    ],
    cta: "Start Business trial",
    href: "/signup",
    highlighted: false,
  },
]

const testimonials = [
  {
    quote:
      "InvoiceFlow cut my billing time from hours to minutes. I used to dread invoicing — now it's just part of my weekly routine.",
    name: "Sarah Chen",
    role: "UX Designer",
    avatar: "SC",
  },
  {
    quote:
      "The automatic payment reminders are a game-changer. Late payments dropped by 80% in my first month. I can't imagine going back.",
    name: "Marcus Williams",
    role: "Freelance Developer",
    avatar: "MW",
  },
  {
    quote:
      "As a photographer working with international clients, the multi-currency feature is worth every penny. It just works.",
    name: "Isabelle Dupont",
    role: "Commercial Photographer",
    avatar: "ID",
  },
]

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-100 rounded-full opacity-20 blur-3xl -z-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-indigo-700 text-sm font-medium">
                  Trusted by 12,000+ freelancers
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Get Paid{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                  Faster
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                Stop chasing payments. InvoiceFlow makes it ridiculously easy for freelancers to
                create professional invoices, send them in seconds, and get paid on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:shadow-indigo-300 hover:-translate-y-0.5"
                >
                  Start for free — no card needed
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  See how it works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((l) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm">4.9 / 5 from 2,000+ reviews</p>
                </div>
              </div>
            </div>
            {/* Mockup Illustration */}
            <div className="relative lg:block">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white text-sm font-medium opacity-80">
                    Invoice #INV-0042
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="w-24 h-3 bg-slate-900 rounded mb-1" />
                      <div className="w-16 h-2 bg-slate-300 rounded" />
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs mb-1">Amount due</div>
                      <div className="text-3xl font-bold text-slate-900">$4,200</div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Website redesign", amount: "$3,000" },
                      { label: "SEO optimization", amount: "$800" },
                      { label: "Copywriting", amount: "$400" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between py-2.5 border-b border-slate-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-400" />
                          <span className="text-slate-600 text-sm">{item.label}</span>
                        </div>
                        <span className="text-slate-900 text-sm font-semibold">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-lg">
                      Pay now
                    </button>
                    <button className="flex-1 bg-slate-100 text-slate-600 text-sm font-semibold py-2.5 rounded-lg">
                      Download PDF
                    </button>
                  </div>
                  <div className="mt-4 flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-green-700 text-xs font-medium">
                      Payment received — Jul 12, 2025
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-indigo-100 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Three simple steps from project complete to payment received.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-gradient-to-r from-indigo-200 to-indigo-200" />
            {steps.map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to get paid
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Purpose-built tools for independent professionals who want less hassle and more money.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, honest pricing</h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees, cancel any time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105"
                    : "bg-white border border-slate-200"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${tier.highlighted ? "text-indigo-200" : "text-slate-500"}`}
                  >
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-5xl font-extrabold ${tier.highlighted ? "text-white" : "text-slate-900"}`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm ${tier.highlighted ? "text-indigo-200" : "text-slate-400"}`}
                    >
                      /{tier.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${tier.highlighted ? "text-indigo-200" : "text-indigo-500"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={tier.highlighted ? "text-indigo-100" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-all ${
                    tier.highlighted
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Freelancers love us</h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Real results from real people who got their invoicing under control.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to get paid faster?</h2>
          <p className="text-xl text-indigo-200 mb-10">
            Join thousands of freelancers who spend less time invoicing and more time doing what
            they love.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
          >
            Start for free today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="mt-4 text-indigo-300 text-sm">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </section>
    </div>
  )
}
