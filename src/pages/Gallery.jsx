import React from "react";

const highlights = [
  { title: "Relief Distribution", value: "120+", icon: "🎁" },
  { title: "Volunteer Hours", value: "900+", icon: "⏱️" },
  { title: "Campaign Photos", value: "300+", icon: "📸" },
  { title: "Communities Reached", value: "18+", icon: "🌍" },
];

// Replace these with your real image paths (public/images/...)
const gallery = [
  { src: "/images/g-1.jpg", tag: "Relief", title: "Ramadan Essentials Drive" },
  { src: "/images/g-2.jpg", tag: "Winter", title: "Blanket Distribution" },
  { src: "/images/g-3.jpg", tag: "Relief", title: "Food Pack Support" },
  { src: "/images/g-4.jpg", tag: "Education", title: "Student Support" },
  { src: "/images/g-5.jpg", tag: "Community", title: "Awareness Campaign" },
  { src: "/images/g-6.jpg", tag: "Relief", title: "Emergency Response" },
  { src: "/images/g-7.jpg", tag: "Winter", title: "Warm Clothes Drive" },
  { src: "/images/g-8.jpg", tag: "Community", title: "Volunteer Team" },
  { src: "/images/g-9.jpg", tag: "Health", title: "Medical Support" },
  { src: "/images/g-10.jpg", tag: "Relief", title: "Street Support" },
  { src: "/images/g-11.jpg", tag: "Education", title: "Learning Resources" },
  { src: "/images/g-12.jpg", tag: "Community", title: "Community Visit" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="relative overflow-hidden mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-purple-100" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Our <span className="text-pink-600">Gallery</span>
            </h1>
            <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
              Moments of kindness. Every photo tells a story of impact, hope, and
              community support.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="badge badge-lg badge-ghost">📸 Real Activities</span>
              <span className="badge badge-lg badge-ghost">✅ Verified Work</span>
              <span className="badge badge-lg badge-ghost">🤍 Community Driven</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white/70 backdrop-blur border border-white shadow p-6 text-center"
              >
                <div className="text-3xl">{s.icon}</div>
                <p className="text-3xl font-extrabold mt-2">{s.value}</p>
                <p className="opacity-70 mt-1">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs (UI only) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold">Activity Photos</h2>
            <p className="mt-2 opacity-80 max-w-2xl">
              Browse our recent works. You can replace these images with your
              real campaign photos.
            </p>
          </div>

          <div className="join">
            <button className="btn btn-sm join-item btn-active">All</button>
            <button className="btn btn-sm join-item">Relief</button>
            <button className="btn btn-sm join-item">Winter</button>
            <button className="btn btn-sm join-item">Education</button>
            <button className="btn btn-sm join-item">Community</button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((img) => (
            <div
              key={img.src}
              className="group card bg-base-100 shadow border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <figure className="relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="badge badge-outline bg-white/80 backdrop-blur">
                    {img.tag}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300" />
              </figure>

              <div className="card-body">
                <h3 className="font-bold text-lg">{img.title}</h3>
                <p className="opacity-70 text-sm">
                  Captured during our community work and volunteer activities.
                </p>

                <div className="card-actions justify-end mt-3">
                  <button className="btn btn-sm btn-outline rounded-full">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Want to be part of our next activity?
          </h2>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">
            Join us as a volunteer or support our programs — your contribution
            creates real impact.
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