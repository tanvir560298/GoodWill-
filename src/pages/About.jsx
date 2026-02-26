import React from "react";

const stats = [
  { value: "150+", label: "Families Supported" },
  { value: "50+", label: "Active Volunteers" },
  { value: "25+", label: "Community Programs" },
];

const programs = [
  {
    title: "Ramadan Essentials",
    desc: "Food packs & essentials for families in need during Ramadan.",
    icon: "🌙",
  },
  {
    title: "Winter Blanket Drive",
    desc: "Blankets and warm clothes distribution for street people.",
    icon: "🧣",
  },
  {
    title: "Emergency Relief",
    desc: "Quick support during floods, fire incidents, and crises.",
    icon: "🚑",
  },
  {
    title: "Education Support",
    desc: "Helping students with supplies, fees, and learning resources.",
    icon: "📚",
  },
  {
    title: "Medical Support",
    desc: "Support for medicine, tests, and basic healthcare needs.",
    icon: "💊",
  },
  {
    title: "Community Awareness",
    desc: "Awareness campaigns, social initiatives, and volunteer actions.",
    icon: "🤝",
  },
];

const team = [
  { name: "Your Name", role: "Founder / Coordinator" },
  { name: "Member Name", role: "Operations Lead" },
  { name: "Member Name", role: "Volunteer Manager" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="relative overflow-hidden mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-purple-100" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              About <span className="text-pink-600">Goodwill Alliance</span>
            </h1>
            <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
              We are a volunteer-driven community organization dedicated to
              extending kindness through meaningful support, emergency relief,
              and community programs.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="badge badge-lg badge-ghost">✅ Volunteer Driven</span>
              <span className="badge badge-lg badge-ghost">🎯 Impact Focused</span>
              <span className="badge badge-lg badge-ghost">🤍 Transparent Support</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/70 backdrop-blur border border-white shadow p-6 text-center"
              >
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="opacity-70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are + story */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Who we are */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl">Who We Are</h2>
              <p className="opacity-80">
                Goodwill Alliance is a community-based initiative working with
                volunteers to support families in need. Our goal is to create
                real impact through transparent and consistent programs.
              </p>
              <p className="opacity-80">
                We believe even small help can create big change — when done
                with honesty, planning, and compassion.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl">Our Story</h2>
              <p className="opacity-80">
                It started with a simple idea: help one person today. Over time,
                this grew into a network of volunteers who organize support
                drives, emergency relief, and seasonal campaigns.
              </p>
              <p className="opacity-80">
                Today, we continue working to expand our reach and serve more
                communities with dignity and care.
              </p>
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card bg-white shadow border">
            <div className="card-body">
              <h3 className="text-xl font-bold">🎯 Our Mission</h3>
              <p className="opacity-80">
                Provide essential support to families in need through organized
                charity drives, emergency help, and community programs.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow border">
            <div className="card-body">
              <h3 className="text-xl font-bold">🌍 Our Vision</h3>
              <p className="opacity-80">
                Build a society where everyone has access to basic needs, and
                kindness becomes a shared culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-base-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">What We Do</h2>
            <p className="mt-3 opacity-80 max-w-3xl mx-auto">
              Our programs are designed to support people with dignity and
              deliver real impact in the community.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="card bg-base-100 shadow">
                <div className="card-body">
                  <div className="text-3xl">{p.icon}</div>
                  <h3 className="text-xl font-bold mt-2">{p.title}</h3>
                  <p className="opacity-80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-extrabold">Transparency</h2>
            <p className="mt-3 opacity-80">
              We maintain clarity on how support is used. Donations go directly
              to community support, with minimal operational cost.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Direct Support</span>
                <span className="font-bold">80%</span>
              </div>
              <progress className="progress progress-primary w-full" value="80" max="100"></progress>

              <div className="flex items-center justify-between">
                <span className="font-semibold">Logistics</span>
                <span className="font-bold">15%</span>
              </div>
              <progress className="progress progress-secondary w-full" value="15" max="100"></progress>

              <div className="flex items-center justify-between">
                <span className="font-semibold">Admin</span>
                <span className="font-bold">5%</span>
              </div>
              <progress className="progress w-full" value="5" max="100"></progress>
            </div>
          </div>

          {/* Team */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl">Our Team</h2>
              <p className="opacity-80">
                A dedicated group of volunteers working together for impact.
              </p>

              <div className="mt-4 space-y-3">
                {team.map((t) => (
                  <div
                    key={t.name + t.role}
                    className="flex items-center justify-between bg-base-100 rounded-xl p-4 shadow-sm"
                  >
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm opacity-70">{t.role}</p>
                    </div>
                    <span className="badge badge-outline">Member</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href="/contact" className="btn btn-outline flex-1">
                  Contact Us
                </a>
                <a href="/volunteer" className="btn btn-primary flex-1">
                  Join Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Be Part of the Change
          </h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">
            Your support helps us reach more families with essential help and
            hope.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="btn btn-neutral px-10 rounded-full"
            >
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