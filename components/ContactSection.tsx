"use client";

import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-gray-300">
            Ready to service your Toyota? Contact us today for professional
            repair services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:0892472518"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-toyota-red" />
                  <span>089-247-2518</span>
                </a>
                <div className="space-y-4">
                  <a
                    href="https://maps.app.goo.gl/nR19gcYPqTNTmsj78"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <MapPin className="w-5 h-5 mr-3 text-toyota-red" />
                    <span>
                      91/38 หมู่3 ถนน สุขุมวิท ตำบล บ้านสวน <br />
                      อำเภอ เมืองชลบุรี จังหวัดชลบุรี 20000
                    </span>
                  </a>
                </div>
                <a
                  href="mailto:nongtota.mechanic@gmail.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-toyota-red" />
                  <span>nongtota.mechanic@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/NongMechanic/"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/nongtota.mechanic/"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@nongtota.mechanic"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <span className="text-white font-bold text-sm">LINE</span>
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="tel:0892472518"
                className="btn-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="#"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Add LINE
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 rounded-xl overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0365623836647!2d100.9786409!3d13.348001799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d4a804fc24ad5%3A0xec69c18079823941!2z4Lit4Li54LmIIOC4meC5ieC4reC4hy4g4LmC4LiV4LiV4LmJ4Liy!5e0!3m2!1sen!2sth!4v1754822076157!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* <h3 className="text-2xl font-semibold text-toyota-black mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-toyota-gray mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyota-red focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-toyota-gray mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyota-red focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-toyota-gray mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyota-red focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="engine">Engine Repair</option>
                  <option value="body">Body & Paint</option>
                  <option value="maintenance">Maintenance & Check-up</option>
                  <option value="electrical">Electrical & Electronics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-toyota-gray mb-2"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyota-red focus:border-transparent"
                  placeholder="Tell us more about your Toyota's needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form> */}
          </div>
        </div>

        {/* Map */}
        {/* <div className="mt-16">
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
        </div> */}
      </div>
    </section>
  );
}
