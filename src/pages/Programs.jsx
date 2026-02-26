import React from "react";

const impactStats = [
  { value: "25+", label: "Running Programs", icon: "📌" },
  { value: "150+", label: "Families Supported", icon: "🏠" },
  { value: "50+", label: "Active Volunteers", icon: "🤝" },
  { value: "5+", label: "Emergency Responses", icon: "🚑" },
];

const programs = [
  {
    title: "Ramadan Essentials",
    desc: "Food packs & essentials for families in need during Ramadan.",
    icon: "🌙",
    tag: "Seasonal",
  },
  {
    title: "Winter Blanket Drive",
    desc: "Blankets and warm clothes distribution for street people.",
    icon: "🧣",
    tag: "Seasonal",
  },
  {
    title: "Emergency Relief",
    desc: "Quick support during floods, fire incidents, and crises.",
    icon: "🚨",
    tag: "Urgent",
  },
  {
    title: "Education Support",
    desc: "Helping students with supplies, fees, and learning resources.",
    icon: "📚",
    tag: "Education",
  },
  {
    title: "Medical Support",
    desc: "Support for medicine, tests, and basic healthcare needs.",
    icon: "💊",
    tag: "Health",
  },
  {
    title: "Community Awareness",
    desc: "Awareness campaigns, social initiatives, and volunteer actions.",
    icon: "📣",
    tag: "Community",
  },
];

const howItWorks = [
  {
    title: "Identify Needs",
    desc: "We survey local communities and verify requests.",
    icon: "🔍",
  },
  {
    title: "Plan & Collect",
    desc: "We organize volunteers and collect donations/supplies.",
    icon: "🗂️",
  },
  {
    title: "Distribute With Dignity",
    desc: "We deliver support fairly and respectfully.",
    icon: "🎁",
  },
  {
    title: "Share Updates",
    desc: "We share transparent updates & outcomes with supporters.",
    icon: "📸",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="relative overflow-hidden mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-purple-100" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Our <span className="text-pink-600">Programs</span>
            </h1>
            <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
              We run community-driven programs that support families with dignity —
              from seasonal campaigns to emergency relief and long-term support.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="badge badge-lg badge-ghost">✅ Verified Support</span>
              <span className="badge badge-lg badge-ghost">🤍 Volunteer Driven</span>
              <span className="badge badge-lg badge-ghost">📸 Transparent Updates</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/70 backdrop-blur border border-white shadow p-6 text-center"
              >
                <div className="text-3xl">{s.icon}</div>
                <p className="text-3xl font-extrabold mt-2">{s.value}</p>
                <p className="opacity-70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold">Featured Programs</h2>
            <p className="mt-2 opacity-80 max-w-2xl">
              These are some of our most impactful initiatives. You can support any program
              by donating, volunteering, or sharing.
            </p>
          </div>

          {/* Small CTA */}
          <div className="flex gap-3">
            <a href="/donate" className="btn btn-primary rounded-full px-7">
              ❤️ Donate
            </a>
            <a href="/volunteer" className="btn btn-outline rounded-full px-7">
              🤝 Volunteer
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="card bg-base-100 shadow border hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{p.icon}</div>
                  <span className="badge badge-outline">{p.tag}</span>
                </div>

                <h3 className="text-xl font-bold mt-3">{p.title}</h3>
                <p className="opacity-80">{p.desc}</p>

                <div className="mt-5 flex gap-3">
                  <a
                    href="/donate"
                    className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 hover:scale-105"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                    <span className="relative">Support</span>
                  </a>

                  <a
                    href="/contact"
                    className="btn btn-outline rounded-full px-6"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-base-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">How We Work</h2>
            <p className="mt-3 opacity-80 max-w-3xl mx-auto">
              We follow a clear process so the support reaches the right people with honesty and transparency.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s) => (
              <div key={s.title} className="card bg-base-100 shadow">
                <div className="card-body">
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="text-lg font-bold mt-2">{s.title}</h3>
                  <p className="opacity-80">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 text-center">
            <p className="opacity-80">
              Want to collaborate on a new program idea?
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-outline rounded-full px-10">
                📩 Contact Us
              </a>
              <a href="/volunteer" className="btn btn-primary rounded-full px-10">
                🤝 Join Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Support a Program Today
          </h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">
            Your donation or volunteer time can change lives. Let’s build impact together.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="btn btn-neutral px-10 rounded-full">
              ❤️ Donate Now
            </a>
            <a
              href="/volunteer"
              className="btn btn-outline px-10 rounded-full text-white border-white hover:bg-white hover:text-black"
            >
              🤝 Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}