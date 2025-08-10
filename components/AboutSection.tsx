"use client";

import React from "react";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-toyota-black mb-4">
                        About AU.NONGTOTA
                    </h2>
                    <div className="section-divider mb-8" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://lh3.googleusercontent.com/p/AF1QipPmI7tU5eN50ZHSaG_nAx7z7oq-UDsYrwphazhl=s680-w680-h510-rw"
                            alt="AU.NONGTOTA Workshop"
                            className="rounded-xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-toyota-black mb-6">
                            Your Trusted Toyota Repair Partner
                        </h3>
                        <p className="text-toyota-gray mb-6">
                            For over a decade, AU.NONGTOTA has been the premier destination
                            for Toyota owners seeking reliable, professional automotive repair
                            services. Our team of certified technicians combines years of
                            experience with the latest diagnostic equipment to ensure your
                            Toyota receives the best possible care.
                        </p>
                        <p className="text-toyota-gray mb-6">
                            We believe in transparent pricing, quality workmanship, and
                            building lasting relationships with our customers. Every repair
                            comes with our comprehensive warranty, giving you peace of mind on
                            the road.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-toyota-red">10+</div>
                                <div className="text-sm text-toyota-gray">Years Experience</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-toyota-red">1000+</div>
                                <div className="text-sm text-toyota-gray">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-toyota-black mb-8 text-center">
                        Find Our Workshop
                    </h3>
                    <div className="bg-gray-100 rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0365623836647!2d100.9786409!3d13.348001799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d4a804fc24ad5%3A0xec69c18079823941!2z4Lit4Li54LmIIOC4meC5ieC4reC4hy4g4LmC4LiV4LiV4LmJ4Liy!5e0!3m2!1sen!2sth!4v1754822076157!5m2!1sen!2sth"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
