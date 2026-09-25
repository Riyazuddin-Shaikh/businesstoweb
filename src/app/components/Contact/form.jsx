
"use client";

import React, { useState } from "react";
import "./form.css";

const projectCategories = [
  "Website Design",
  "Website Development",
  "UI / UX Design",
  "Next.js Development",
  "Landing Page",
  "E-commerce Website",
  "Website Redesign",
  "Custom Web Application",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      message: "",
    });
  };

  return (
    <section className="contact-form-section" id="contact-form">

      <div className="contact-form-container">

        <div className="contact-form-heading">
          <span>LET&apos;S CONNECT</span>

          <h2>
            Tell us about
            <br />
            <em>your project.</em>
          </h2>

          <p>
            Fill in the details below and our team will get back to you.
          </p>
        </div>


        <form
          className="professional-contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            {/* Name */}

            <div className="form-field">

              <label htmlFor="name">
                NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />

            </div>


            {/* Email */}

            <div className="form-field">

              <label htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

            </div>

          </div>


          <div className="form-row">

            {/* Phone */}

            <div className="form-field">

              <label htmlFor="phone">
                PHONE NUMBER
              </label>

              <div className="phone-field">

                <span>+91</span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />

              </div>

            </div>


            {/* Project */}

            <div className="form-field">

              <label htmlFor="project">
                PROJECT TYPE
              </label>

              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Select project type
                </option>

                {projectCategories.map((category) => (
                  <option
                    value={category}
                    key={category}
                  >
                    {category}
                  </option>
                ))}

              </select>

            </div>

          </div>


          {/* Message */}

          <div className="form-field">

            <label htmlFor="message">
              PROJECT DETAILS
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us briefly about your project..."
              required
            />

          </div>


          {/* Submit */}

          <div className="form-submit">

            <button
              type="submit"
              className="form-submit-button"
            >
              <span>Send Enquiry</span>
              <b>↗</b>
            </button>

            <small>
              We&apos;ll get back to you shortly.
            </small>

          </div>


          {/* Success */}

          {submitted && (
            <div
              className="form-success"
              role="status"
            >
              <span>✓</span>

              <div>
                <strong>Thank you!</strong>
                <p>
                  Your enquiry has been received successfully.
                </p>
              </div>
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

