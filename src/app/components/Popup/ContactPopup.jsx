'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import './ContactPopup.css';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: '',
  });

  // Open popup after 20 seconds
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => window.clearTimeout(timer);
  }, []);

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFormData({ name: '', mobile: '', service: '' });
      }, 3000);
    }, 1000);
  };

  // Close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popupOverlay')) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popupOverlay" onClick={handleOverlayClick}>
      <div className="popupContainer" role="dialog" aria-modal="true" aria-labelledby="popup-title">
        
        {/* Close Button */}
        <button
          type="button"
          className="closeBtn"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* ================= LEFT SIDE (IMAGE & BRANDING) ================= */}
        <div className="popupImageSide">
          <Image
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
            alt="Business workspace"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="popupBgImage"
          />
          <div className="imageOverlay" />

          <div className="imageContent">
            <div className="brandBadge">BUSINESS TO WEB</div>
            <h2 id="popup-title">
              GROW YOUR BUSINESS <br />
              <span>ONLINE WITH EXPERTS.</span>
            </h2>
            <p>Dedicated digital partnership for scalable web presence & high conversions.</p>
            <div className="imageLine" />
            <div className="brandFooter">
              <span>Professional Digital Agency</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <div className="popupFormSection">
          {submitted ? (
            <div className="successState">
              <div className="successIcon">✓</div>
              <h3>Thank You!</h3>
              <p>Your enquiry has been received. Our expert will get in touch with you shortly.</p>
            </div>
          ) : (
            <>
              <div className="formTop">
                <h3>Request a Call Back</h3>
                <p>Fill out your details and let&apos;s discuss your project requirements.</p>
              </div>

              <form className="contactForm" onSubmit={handleSubmit}>
                {/* NAME */}
                <div className="fieldGroup">
                  <label htmlFor="popup-name">YOUR NAME</label>
                  <input
                    id="popup-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                {/* MOBILE */}
                <div className="fieldGroup">
                  <label htmlFor="popup-mobile">MOBILE NUMBER</label>
                  <input
                    id="popup-mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                  />
                </div>

                {/* SERVICE */}
                <div className="fieldGroup">
                  <label htmlFor="popup-service">SELECT SERVICE</label>
                  <div className="selectWrapper">
                    <select
                      id="popup-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Website Design">Website Design</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-Commerce Website">E-Commerce Website</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                      <option value="Other">Other Services</option>
                    </select>
                    <span className="selectArrow">↓</span>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" className="submitBtn" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'PROCESSING...' : 'SEND ENQUIRY'}</span>
                  {!isSubmitting && <span className="submitArrow">→</span>}
                </button>

                <p className="privacyText">
                  We respect your privacy. No spam ever.
                </p>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}