"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Linkedin,
  Twitter,
} from "lucide-react";

const Page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess(true);
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 pb-18 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-white mb-6 text-5xl md:text-6xl font-semibold leading-tight">
            Contact Us
          </h1>
          <p className="leading-relaxed">
            Get in touch with us for membership inquiries, partnership
            opportunities, or general information
          </p>
        </div>
      </section>

      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-6 text-xl font-semibold">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re here to answer your questions and help you connect
                with our network of medical schools across Africa.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center text-primary rounded-lg">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-900 mb-1 font-semibold">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      AMSA Secretariat, Office of the Provost, Nathaniel O.
                      Idowu Clinical Drug Trials and Toxicology Unit, College of
                      Medicine, University of Ibadan, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center text-primary rounded-lg">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-900 mb-1 font-semibold">Phone</h3>
                    <p className="text-gray-600">+234 916 113 5886</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center text-primary rounded-lg">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-900 font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      secretariat.amsafrica@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center text-primary rounded-lg">
                      <Clock size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-900 mb-1 font-semibold">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM (EAT)
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/amsaafrica/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/Officialamsafri?s=20"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-gray-900 mb-6 text-xl font-semibold">
                Send Us a Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-gray-700 mb-2"
                  >
                    Institution/Organization
                  </label>
                  <input
                    name="institution"
                    type="text"
                    id="institution"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="Your institution name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="Membership Inquiry">
                      Membership Inquiry
                    </option>
                    <option value="Partnership Opportunity">
                      Partnership Opportunity
                    </option>
                    <option value="Research Collaboration">
                      Research Collaboration
                    </option>
                    <option value="Event Information">Event Information</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                {success && (
                  <p className="text-sm text-green-600">
                    Message sent successfully.
                  </p>
                )}
                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  className="w-full cursor-pointer flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
