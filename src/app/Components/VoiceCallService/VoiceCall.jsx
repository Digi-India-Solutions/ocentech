"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./voiceCall.css";
import Link from "next/link";

import Pic1 from "@/app/Images/Voice Call Page/Key Features and Benefits of Voice Call Services.png"
import Pic2 from "@/app/Images/Voice Call Page/What is Voice Call Service and How It Benefits Your Business.png"

import Image from "next/image";
import InquiaryForm from "../InquiaryForm/InquiaryForm";


const VoiceServices = [
    {
        title: " 1. Banking & Financial Services",
        desc: "For sending transaction alerts, loan reminders, OTPs, and fraud detection calls. ",
        link: "/Pages/bulk-sms-promotion",
        color: "#0a4adc"
    },
    {
        title: "2. Healthcare",
        desc: "Used for appointment reminders, health tips, lab report alerts, and vaccination drives.",
        link: "/Pages/bulk-sms-transactional",
        color: "#0a4adc"
    },
    {
        title: "3. Retail & E-commerce",
        desc: "Sends order confirmations, delivery updates, feedback requests, and promotional offers. ",
        link: "/Pages/bulk-sms-whatsapp",
        color: "#0a4adc"
    },
    {
        title: "4. Education",
        desc: "Used by schools, colleges, and coaching centers for fee reminders, exam schedules, attendance alerts, and event notifications.",
        link: "/Pages/contact",
        color: "#0a4adc"
    },
    {
        title: " 5. Travel & Transportation",
        desc: "Sends ticket confirmations, schedule changes, check-in alerts, and booking reminders.",
        link: "/Pages/contact",
        color: "#0a4adc"
    },
];


export default function SMSWhatsApp() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/contact", formData);
            console.log("Response:", res.data);

            setFormData({ name: "", phone: "", email: "", message: "" });
            alert("Form submitted successfully!");
        } catch (err) {
            console.error(err);
            alert("Error submitting form. Please try again.");
        }
    };

    return (
        <>
           




            <div className="Voice-Service-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                      
                        <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                          <div className="FormLeftSide  d-flex align-items-center  flex-column justify-content-center">
                          <div className="SMStitle mb-3">
                                <h2 className="w-75">
                                  <span className="titlebold d-flex flex-column">  Voice Call Services </span> Connect with Customers Through Clear & Direct Communication
                                </h2>
                            </div>
                            <div className="SMS-Content">
                                <p className="text-muted mb-4 w-75">
                                    Deliver promotional, transactional, or reminder messages instantly with our high-quality automated voice call solutions designed for businesses of all sizes.    </p>
                                 <Link href="/Pages/contact"> <button className="btn  themebackground ">Schedule Demo</button></Link>
                            </div>
                          </div> 
                        </div>

                       
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="w-100"> 
                            <div className="RightSidetitle text-center mb-4">
                                <h1 className="uppercase fontweight spanbold">Get a Quote</h1>
                               
                            </div>
                               <InquiaryForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6  d-grid textCloumn d-flex align-items-center justify-content-center">

                            <div className="mt-5 d-flex align-items-start  flex-column">
                                <h2 className="mb-4 fontweight"> What is <span className=""> Voice Call Service </span>and How it <span className="titlebold uppercase"> Benefits Your Business</span> </h2>
                                <p>
                                    "Voice call services enable you to connect with customers effortlessly using pre-recorded messages. You can create your own voice message and automate the calling process with just a few simple steps. Managing and keeping track of calls becomes easy with our bulk voice calling service. Our services are ideal for sending crucial information such as:
                                </p>


                                <ul className="list-unstyled">
                                    <li>1.   Alerts and reminders</li>
                                    <li>2.   Business promotions</li>
                                    <li>3.   Latest offers and deals</li>
                                    <li>4.   Social campaigns</li>
                                    <li>5.   Customer surveys"	</li>
                                </ul>

                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="ImageSection">
                                <Image src={Pic1} alt="whatsappimg" className="VoiceCallImg " />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="container">

                    <div className="row">
                       
                        <div className="col-md-6">
                            <div className="ImageSection">
                                <Image src={Pic2} alt="whatsappimg" className="VoiceCallImg " />
                            </div>
                        </div>
                        <div className="col-md-6 textCloumn">

                            <div className="mt-5">
                           <h2 className="text-start fontweight">
                            Key  <span className="titlebold"> Features</span> and <span className="titlebold">  Benefits</span> of <span className="titlebold"> Voice Call Services </span>
                        </h2>
                                <p>
                                    <b className="spanbold"> Automated Voice Messaging  :</b>
                                    Sends pre-recorded voice messages to many users at the same time through phone calls.    </p>
                                <p>
                                    <b className="spanbold">   Mass Outreach   :</b>
                                    This method is great for connecting with thousands of individuals quickly — ideal for sending alerts, promotions, reminders, or announcements.
                                </p>
                                <p>
                                    <b className="spanbold">  Personalization Options  :</b>

                                    Voice messages can be tailored with personal details like names or locations to make the experience more customized for each recipient.
                                </p>

                                <p>
                                    <b className="spanbold">  Interactive Capabilities  :</b>

                                    It includes features like IVR (Interactive Voice Response), allowing callers to respond during the call, for example, by pressing a number to confirm.

                                </p>

                                <p>
                                    <b className="spanbold">  Multi - Language Support  :</b>

                                    Messages can be created in various languages, making it easier to communicate with a broader and more diverse audience.
                                </p>


                            </div>

                        </div>

                    </div>

                </div>



            </div>


            {/* <div className="Voice-ServiceTitleSec ">
                <div className="text-center">
                    <h1 className=" title titlebold "> Voice Call Services</h1>
                    <p > You can create your own voice message and automate the calling process with just a few simple steps. Managing and keeping track of calls becomes easy with our bulk voice calling service.</p>
                </div>
            </div> */}
            <section className="Voice-Services-section">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">
                            Explore Our <span className="highlight">Voice Call Services</span>
                        </h2>
                        <p className="section-subtitle">
                            Automate your customer communication with clear, fast, and reliable
                            voice calling solutions.
                        </p>
                    </div>

                    <div className="row d-flex justify-content-center align-items-stretch">
                        {VoiceServices.map((service, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
                                key={index}
                            >
                                <div
                                    className="Voice-service-card"
                                    style={{ backgroundColor: service.color }}
                                >
                                    <div className="card-content">
                                        <h3 className="card-title">{service.title}</h3>
                                        <p className="card-desc">{service.desc}</p>
                                        <a href={service.link} className="Voice-service-btn">
                                            Learn More →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </>
    );
}













































































































