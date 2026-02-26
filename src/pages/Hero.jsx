import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Video/Untitled design (1).mp4" type="video/mp4" />
      </video>
     
      

      {/* Your hero content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Extend Your Hand of Kindness <br /> to Those in Need.
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Together we can bring hope, warmth, and essential support to
            families who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="/donate"
              className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 hover:scale-110 hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>

              <Link to="/donate" className="relative flex items-center gap-2">
                ❤️ Donate Now
              </Link>
            </a>
            <a
              href="/volunteer"
              className="relative inline-flex items-center justify-center px-10 py-3 font-semibold rounded-full border-2 border-pink-500 text-pink-600 backdrop-blur-md bg-white/30 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-105"
            >
              🤝 Join with Us
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
