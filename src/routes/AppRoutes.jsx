import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";
import Hero from "../pages/Hero";

const Gallery = () => (
  <div className="min-h-screen pt-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold">Gallery</h1>
      <p className="mt-3 opacity-80">
        Gallery page ekhono ready na — pore images diye fill korbo.
      </p>
    </div>
  </div>
);

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold">404</h1>
              <p className="mt-2 opacity-70">Page not found</p>
              <a className="btn btn-primary mt-6" href="/">
                Go Home
              </a>
            </div>
          </div>
        }
      />
    </Routes>
  );
}