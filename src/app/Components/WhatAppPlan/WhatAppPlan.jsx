"use client";
import React from "react";
import { FaChessKing, FaCheckCircle } from "react-icons/fa";
import "./whatsappplan.css";
import pic1 from "@/app/Images/mostpopular.png";
import Image from "next/image";
import Link from "next/link";

const pricingData = {
  WhatsApp: [
    {
      title: "Basic",
      price: "₹7500",
      rate: "₹ 0.15 / credit",
      sms: "50k WhatsApp Transactional",
      features: [
        "2 Users",
        "Free Green Tick",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹40000",
      rate: "₹ 0.80 / credit",
      sms: "50k WhatsApp Promotional",
      features: [
        "Unlimited Agents",
        "Free Green Tick",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Custom",
      price: "Custom Pricing",
      rate: "On Request",
      sms: "Custom Credits",
      features: [
        "All Pro Features",
        "Custom Solutions",
        "Custom Analytics",
        "Real Time Reports",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
    },
  ],

};

export default function OTPPlan() {
  return (
    <div className="pricing-wrapper container my-5">
      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingData.WhatsApp.map((plan, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 d-flex justify-content-center"
          >
            <div className="pricing-card">
              {/* Highlight Icon */}
              <div className="overlayIcon">
                {plan.highlight && (
                  <Image
                    src={pic1}
                    alt="populartag"
                    height={100}
                    width={100}
                  />
                )}
              </div>

              {/* Header */}
              <div className="pricing-header">
                <div className="headerTop d-flex">
                  <div className="align-items-center d-flex">
                    <FaChessKing className="fs-1 topIcons" />
                  </div>
                  <div className="headerTopText ps-3">
                    <h2 className="plan-title text-light fontweight">
                      {plan.title}
                    </h2>
                    <p className="rate text-light">{plan.rate}</p>
                  </div>
                </div>
                <p className="sms-count text-light">{plan.sms}</p>
              </div>

              {/* Features */}
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle /> {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="pricing-footer">
                <div className="footerPriceText">
                  <h4 className="price">{plan.price}</h4>
                  <small>(18% GST Applicable on all plans)</small>
                </div>
                <Link href="/Pages/contact"> <button className="choose-btn mb-4">Choose Plan</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
