"use client";

import React, { useState, useEffect } from "react";

const Stats = () => {
  return (
    <section className="bg-secondary-navy py-16 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">18+</h3>
            <p className="text-secondary-slate uppercase tracking-wider text-sm font-semibold">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">1M+</h3>
            <p className="text-secondary-slate uppercase tracking-wider text-sm font-semibold">Miles Covered</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">50k+</h3>
            <p className="text-secondary-slate uppercase tracking-wider text-sm font-semibold">Loads Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">98%</h3>
            <p className="text-secondary-slate uppercase tracking-wider text-sm font-semibold">On-Time Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
