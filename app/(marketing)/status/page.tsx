"use client";

import { useState, useEffect } from "react";

const mockServices = [
  { name: "Website", status: "Operational" },
  { name: "API", status: "Degraded Performance" },
  { name: "Database", status: "Operational" },
  { name: "Email Service", status: "Down" },
];

export default function StatusPage() {
  const [services, setServices] = useState(mockServices);

  // Simulating status updates (in real-world, fetch from an API)
  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prev) =>
        prev.map((service) =>
          service.name === "API"
            ? { ...service, status: service.status === "Operational" ? "Degraded Performance" : "Operational" }
            : service
        )
      );
    }, 10000); // Updates every 10 seconds (mocked)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">System Status</h1>
      <p className="text-gray-600 mb-4">Check the real-time status of our services.</p>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 rounded-md ${
              service.status === "Operational"
                ? "bg-green-100 text-green-700"
                : service.status === "Degraded Performance"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span className="font-semibold">{service.name}</span>: {service.status}
          </div>
        ))}
      </div>
    </div>
  );
}
