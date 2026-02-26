import React from "react";

const perks = [
  { icon: "🤝", title: "Community Impact", desc: "Help families directly with real support." },
  { icon: "📸", title: "Verified Activities", desc: "Be part of transparent and organized programs." },
  { icon: "🎯", title: "Skill Building", desc: "Leadership, teamwork, and event experience." },
  { icon: "🏅", title: "Recognition", desc: "Certificates/recognition for active volunteers." },
];

export default function Volunteer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted! (For now this is demo. Later we can connect to Email/Google Form.)");
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="relative overflow-hidden mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-purple-100" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Become a <span className="text-pink-600">Volunteer</span>
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
            Join Goodwill Alliance BD and help us deliver support with kindness and dignity.
            Fill out the form — we will contact you soon.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="badge badge-lg badge-ghost">✅ Volunteer Driven</span>
            <span className="badge badge-lg badge-ghost">🤍 Community Support</span>
            <span className="badge badge-lg badge-ghost">📍 Dhaka + Nearby</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl">Volunteer Registration Form</h2>
              <p className="opacity-80">
                Provide your details correctly. This helps us contact you and assign activities.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    placeholder="Full Name *"
                    required
                  />
                  <input
                    className="input input-bordered w-full"
                    type="tel"
                    placeholder="Phone Number *"
                    required
                  />
                </div>

                {/* Email + Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="input input-bordered w-full"
                    type="email"
                    placeholder="Email (optional)"
                  />
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    placeholder="Your Area / City *"
                    required
                  />
                </div>

                {/* Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="select select-bordered w-full" required>
                    <option value="">Availability *</option>
                    <option>Weekends</option>
                    <option>Weekdays</option>
                    <option>Anytime</option>
                    <option>Only During Campaigns</option>
                  </select>

                  <select className="select select-bordered w-full" required>
                    <option value="">Preferred Program *</option>
                    <option>Relief Distribution</option>
                    <option>Ramadan Essentials</option>
                    <option>Winter Drive</option>
                    <option>Education Support</option>
                    <option>Medical Support</option>
                    <option>Any Program</option>
                  </select>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="select select-bordered w-full">
                    <option value="">Skills (optional)</option>
                    <option>Event Management</option>
                    <option>Fundraising</option>
                    <option>Photography / Videography</option>
                    <option>Content / Social Media</option>
                    <option>Team Support</option>
                  </select>

                  <select className="select select-bordered w-full">
                    <option value="">Experience (optional)</option>
                    <option>First Time</option>
                    <option>Some Experience</option>
                    <option>Experienced Volunteer</option>
                  </select>
                </div>

                {/* Why join */}
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows={5}
                  placeholder="Why do you want to volunteer with us? (Optional)"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center w-full px-10 py-3 overflow-hidden font-bold text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                  <span className="relative flex items-center gap-2">🤝 Submit Application</span>
                </button>

                <p className="text-xs opacity-60 text-center">
                  We will contact you via phone/email within 24–72 hours (depending on campaign).
                </p>
              </form>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            <div className="card bg-white shadow border">
              <div className="card-body">
                <h3 className="text-xl font-bold">What Volunteers Do</h3>
                <ul className="mt-3 space-y-2 opacity-80 list-disc pl-5">
                  <li>Distribute essentials with dignity</li>
                  <li>Help manage events & logistics</li>
                  <li>Support fundraising and awareness</li>
                  <li>Capture photos/videos for transparency</li>
                  <li>Assist in emergency response campaigns</li>
                </ul>
              </div>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p) => (
                <div key={p.title} className="card bg-base-200 shadow">
                  <div className="card-body">
                    <div className="text-3xl">{p.icon}</div>
                    <h4 className="font-bold mt-2">{p.title}</h4>
                    <p className="opacity-80 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h3 className="text-xl font-bold">Need Help?</h3>
                <p className="opacity-80">
                  If you have questions before joining, contact us anytime.
                </p>
                <div className="mt-4 flex gap-3">
                  <a href="/contact" className="btn btn-outline flex-1 rounded-full">
                    📩 Contact
                  </a>
                  <a href="/donate" className="btn btn-primary flex-1 rounded-full">
                    ❤️ Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Join Our Volunteer Team?
          </h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">
            Together we can support more families and create bigger impact.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/programs" className="btn btn-neutral px-10 rounded-full">
              📌 View Programs
            </a>
            <a
              href="/gallery"
              className="btn btn-outline px-10 rounded-full text-white border-white hover:bg-white hover:text-black"
            >
              📸 See Our Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}