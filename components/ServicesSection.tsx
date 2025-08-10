"use client";

import React from "react";
import { Wrench, Cog, Settings, Zap } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Wrench className="w-12 h-12 text-toyota-red" />,
            title: "Engine Repair",
            description:
                "Complete engine diagnostics, repair, and rebuilding services for all Toyota models.",
        },
        {
            icon: <Cog className="w-12 h-12 text-toyota-red" />,
            title: "Car suspension repair",
            description:
                "Professional car suspension repair services to restore your Toyota.",
        },
        {
            icon: <Settings className="w-12 h-12 text-toyota-red" />,
            title: "Maintenance & Check-up",
            description:
                "Regular maintenance, oil changes, and comprehensive vehicle inspections.",
        },
        {
            icon: <Zap className="w-12 h-12 text-toyota-red" />,
            title: "Electrical & Electronics",
            description:
                "Advanced electrical diagnostics and repair for modern Toyota systems.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-toyota-black mb-4">
                        Our Toyota Repair Services
                    </h2>
                    <div className="section-divider mb-8" />
                    <p className="text-xl text-toyota-gray max-w-3xl mx-auto">
                        Comprehensive repair and maintenance services for all Toyota models
                        with expert technicians and genuine parts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
                        >
                            <div className="flex justify-center mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-toyota-black mb-4">
                                {service.title}
                            </h3>
                            <p className="text-toyota-gray">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
