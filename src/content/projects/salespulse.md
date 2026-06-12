---
title: "SalesPulse Analytics"
description: "An interactive, real-time dashboard for visualizing sales performance, product trends, and payment distributions."
tags: ["React", "firebase", "Tailwind CSS", "Recharts"]
date: "2026-04"
githubUrl: "https://github.com/Irfan-code-cloud/salespulse-analytics.git"
liveUrl: "https://salespulse-analytics.vercel.app/"
buttonText: "Launch Dashboard"
---

<!-- Row 1: Text Left (5 cols), Image Right (7 cols) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-32 mt-12 reveal-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
  <div class="lg:col-span-5">
    <h3 class="!mt-0 text-2xl md:text-3xl">The Data Visibility Challenge</h3>
    <p class="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-light">Modern enterprises generate massive amounts of transactional data, but without proper visualization, that data is useless to stakeholders. SalesPulse was engineered to solve the "data silo" problem by providing a centralized, real-time command center for monitoring business health, product velocity, and revenue streams.</p>
  </div>
  <div class="lg:col-span-7 relative group">
    <div class="absolute -inset-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
    <img src="/Images/salespulse/main-dashboard.png" alt="SalesPulse Main Dashboard" class="relative !my-0 w-full rounded-2xl border border-slate-700/80 shadow-2xl hover:scale-[1.02] transition-all duration-500" />
  </div>
</div>

<!-- Row 2: THE SAAS HERO SHOT (Full Width Centerpiece) -->
<div class="mb-32 reveal-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
  <div class="max-w-3xl mx-auto text-center mb-12">
    <h3 class="!mt-0 text-2xl md:text-3xl">Real-Time Event Architecture</h3>
    <p class="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-light text-slate-400">Built on a modern frontend stack using <strong>React 19</strong> and <strong>Vite</strong>, the application prioritizes speed and seamless state management.</p>
  </div>
  
  <div class="w-full relative group mb-12">
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
    <img src="/Images/salespulse/analytics-view.png" alt="Analytics & Filtering View" class="relative !my-0 w-full rounded-2xl border border-slate-700/80 shadow-2xl transition-transform duration-700 hover:scale-[1.01]" />
  </div>

  <!-- Staggered Feature Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:border-rose-500/30 transition-all duration-700 ease-out reveal-element opacity-0 translate-y-12 delay-100">
       <strong class="text-rose-400 block mb-3 text-lg">1. Live Firestore Sync</strong>
       <p class="text-sm text-slate-400 !mb-0">Bypasses slow API polling by subscribing directly to NoSQL document changes. The UI updates the exact millisecond a transaction occurs.</p>
    </div>
    <div class="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:border-rose-500/30 transition-all duration-700 ease-out reveal-element opacity-0 translate-y-12 delay-200">
       <strong class="text-rose-400 block mb-3 text-lg">2. High-Performance SVGs</strong>
       <p class="text-sm text-slate-400 !mb-0">Utilizes Recharts and Framer Motion to render fluid, interactive data visualizations that allow users to slice metrics by custom date ranges.</p>
    </div>
    <div class="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:border-rose-500/30 transition-all duration-700 ease-out reveal-element opacity-0 translate-y-12 delay-300">
       <strong class="text-rose-400 block mb-3 text-lg">3. Multi-Tenant Security</strong>
       <p class="text-sm text-slate-400 !mb-0">Enforces Firebase Authentication and strict Firestore Security Rules, ensuring users can only read/write their specific organizational data.</p>
    </div>
  </div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-32 reveal-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
  <div class="order-2 lg:order-1 lg:col-span-5 relative group">
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-rose-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
    <img src="/Images/salespulse/login.PNG" alt="Secure Identity Gateway" class="relative !my-0 w-full max-w-sm mx-auto rounded-2xl border border-slate-700/80 shadow-2xl hover:scale-[1.02] transition-all duration-500" />
  </div>
  <div class="order-1 lg:order-2 lg:col-span-7">
    <h3 class="!mt-0 text-2xl md:text-3xl">Zero-Trust Authentication Pipeline</h3>
    <p class="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-light">Before accessing the live organizational data streams, users must pass through a strict, multi-layered identity gateway. The system leverages Firebase Authentication augmented with a custom <strong class="text-white tracking-wide">4-digit email verification protocol</strong>. This ensures that only fully verified stakeholders can access the metrics, completely neutralizing unauthorized data exposure.</p>
  </div>
</div>

<!-- Row 3: Intro to the Custom Astro Component -->
<div class="max-w-4xl mx-auto text-center mb-8 reveal-element opacity-0 translate-y-12 transition-all duration-1000 ease-out">
  <h3 class="!mt-0 text-2xl md:text-3xl">Interactive Data Engine</h3>
 <p class="text-base md:text-lg text-slate-300 mb-6 [text-wrap:balance]">Experience the fluid visualization logic firsthand. The engine below demonstrates how raw organizational data streams are parsed into high-velocity, animated product trends.</p>
</div>