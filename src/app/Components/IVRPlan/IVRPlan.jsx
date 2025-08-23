"use client";
import React from "react";
import { FaChessKing, FaCheckCircle } from "react-icons/fa";
import "./ivrplan.css";
import pic1 from "@/app/Images/mostpopular.png";
import Image from "next/image";
import Link from "next/link";

const pricingData = {
  IVR: [
    {
      title: "Basic",
      price: "₹8500",
      rate: "6 Months Validity",
      sms: "6000 Minutes",
      features: [
        "1 Forwarding Number",
        "6k Greeting SMS",
        "Unlimited Channels",
        "Multiple IVR",
        "10 Agents",
        "All Basic Features",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹15000",
      rate: "1 Year Validity",
      sms: "15000 Minutes",
      features: [
        "1 Forwarding Number",
        "15k Greeting SMS",
        "Unlimited Channels",
        "Multiple IVR",
        "Unlimited Agents",
        "All Basic Features",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹30000",
      rate: "1 Year Validity",
      sms: "30000 Minutes",
      features: [
        "2 Forwarding Numbers",
        "30k Greeting SMS",
        "Unlimited Channels",
        "Multiple IVR",
        "Unlimited Agents",
        "All Basic Features",
        "24/7 Support",
      ],
    },
  ],

};

export default function IVRPlan() {
  return (
    <div className="pricing-wrapper container my-5">
      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingData.IVR.map((plan, index) => (
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


