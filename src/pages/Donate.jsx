import React from "react";

const methods = [
  {
    title: "bKash",
    subtitle: "Send Money / Payment",
    icon: "📲",
    badge: "Fastest",
    color: "from-pink-500 via-rose-500 to-purple-600",
    details: [
      { label: "bKash Number", value: "01XX-XXXX-XXXX" },
      { label: "Account Type", value: "Personal / Merchant" },
      { label: "Reference", value: "Donation - Goodwill Alliance" },
    ],
  },
  {
    title: "Nogod",
    subtitle: "Send Money",
    icon: "💳",
    badge: "Popular",
    color: "from-orange-400 via-amber-500 to-pink-500",
    details: [
      { label: "Nogod Number", value: "01XX-XXXX-XXXX" },
      { label: "Account Type", value: "Personal / Merchant" },
      { label: "Reference", value: "Donation - Goodwill Alliance" },
    ],
  },
  {
    title: "Bank",
    subtitle: "Bank Transfer",
    icon: "🏦",
    badge: "Secure",
    color: "from-indigo-500 via-blue-500 to-cyan-500",
    details: [
      { label: "Bank Name", value: "XXXX Bank" },
      { label: "Account Name", value: "Goodwill Alliance BD" },
      { label: "Account No.", value: "XXXX XXXX XXXX" },
      { label: "Branch", value: "XXXX Branch" },
      { label: "Routing No.", value: "XXXXXXX" },
    ],
  },
];

export default function Donate() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="relative overflow-hidden mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-purple-100" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Donate to <span className="text-pink-600">Goodwill Alliance</span>
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
            Your support helps us deliver essentials, emergency relief, and
            community programs. Every contribution matters.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="badge badge-lg badge-ghost">✅ Transparent</span>
            <span className="badge badge-lg badge-ghost">🤍 Community Driven</span>
            <span className="badge badge-lg badge-ghost">⚡ Quick Support</span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {methods.map((m) => (
            <div
              key={m.title}
              className="card bg-base-100 shadow border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Top gradient header */}
              <div className={`p-6 text-white bg-gradient-to-r ${m.color}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-3xl">{m.icon}</p>
                    <h2 className="text-2xl font-extrabold mt-2">{m.title}</h2>
                    <p className="opacity-90">{m.subtitle}</p>
                  </div>
                  <span className="badge badge-outline bg-white/20 text-white border-white/40">
                    {m.badge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="card-body">
                <div className="space-y-3">
                  {m.details.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between bg-base-200 rounded-xl p-3"
                    >
                      <span className="text-sm opacity-70">{d.label}</span>
                      <span className="font-bold">{d.value}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    className="btn btn-primary flex-1 rounded-full"
                    onClick={() => navigator.clipboard.writeText("01XX-XXXX-XXXX")}
                  >
                    📋 Copy
                  </button>

                  <a
                    href="/contact"
                    className="btn btn-outline flex-1 rounded-full"
                  >
                    Need Help?
                  </a>
                </div>

                <p className="text-xs opacity-60 mt-3">
                  After donating, you can message us with transaction ID for confirmation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Thank you for supporting kindness ❤️
          </h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">
            Your donation directly helps families in need. Stay connected with our
            activities and updates.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/gallery" className="btn btn-neutral px-10 rounded-full">
              📸 See Our Works
            </a>
            <a
              href="/volunteer"
              className="btn btn-outline px-10 rounded-full text-white border-white hover:bg-white hover:text-black"
            >
              🤝 Join Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}