import React from "react";

const contacts = [
  {
    title: "Call / WhatsApp",
    desc: "Reach us anytime for urgent help or collaboration.",
    value: "+8801XXXXXXXXX",
    icon: "📞",
  },
  {
    title: "Email",
    desc: "Send us details, proposals, or questions anytime.",
    value: "goodwillalliancebd@gmail.com",
    icon: "📧",
  },
  {
    title: "Location",
    desc: "We work around Dhaka & nearby communities.",
    value: "Dhaka, Bangladesh",
    icon: "📍",
  },
];

const socials = [
  { name: "Facebook", icon: "📘", link: "https://facebook.com/GoodwillAllianceBD" },
  { name: "Instagram", icon: "📷", link: "https://instagram.com/" },
  { name: "YouTube", icon: "▶️", link: "https://youtube.com/" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="relative overflow-hidden mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-purple-100" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Contact <span className="text-pink-600">Goodwill Alliance</span>
            </h1>
            <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
              Have a question, want to donate, volunteer, or collaborate? Send us a message —
              we will respond as soon as possible.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="badge badge-lg badge-ghost">✅ Quick Response</span>
              <span className="badge badge-lg badge-ghost">🤝 Collaboration Welcome</span>
              <span className="badge badge-lg badge-ghost">🤍 Help & Support</span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white/70 backdrop-blur border border-white shadow p-6 text-center"
              >
                <div className="text-3xl">{c.icon}</div>
                <p className="text-xl font-extrabold mt-2">{c.title}</p>
                <p className="opacity-70 mt-1">{c.desc}</p>
                <p className="mt-3 font-bold">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl">Send us a message</h2>
              <p className="opacity-80">
                Fill up the form below and we’ll get back to you soon.
              </p>

              <form className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                  required
                />

                <select className="select select-bordered w-full">
                  <option>Reason for Contact</option>
                  <option>Donate</option>
                  <option>Volunteer</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your message..."
                  rows={5}
                  required
                />

                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center w-full px-10 py-3 overflow-hidden font-bold text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                  <span className="relative flex items-center gap-2">📩 Send Message</span>
                </button>

                <p className="text-sm opacity-70 text-center">
                  By sending this, you agree to be contacted back by our team.
                </p>
              </form>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Social */}
            <div className="card bg-white shadow border">
              <div className="card-body">
                <h3 className="text-xl font-bold">🌐 Follow Us</h3>
                <p className="opacity-80">
                  Stay connected with our latest updates and activities.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline rounded-full"
                    >
                      <span className="mr-1">{s.icon}</span> {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Donation */}
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h3 className="text-xl font-bold">❤️ Want to donate?</h3>
                <p className="opacity-80">
                  Your donation helps us provide essentials and emergency relief.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="/donate" className="btn btn-primary rounded-full">
                    ❤️ Donate Now
                  </a>
                  <a href="/volunteer" className="btn btn-outline rounded-full">
                    🤝 Become Volunteer
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card bg-white shadow border">
              <div className="card-body">
                <h3 className="text-xl font-bold">🗺️ Find Us</h3>
                <p className="opacity-80">
                  Add your Google Map here later (iframe).
                </p>

                <div className="mt-4 w-full h-56 rounded-2xl bg-base-200 flex items-center justify-center">
                  <p className="opacity-70">Google Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Work Together
          </h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or collaborate — we would love to hear from you.
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