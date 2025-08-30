'use client';

import React from 'react';
import './whatsappicon.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "919289933499"; // without +, used in wa.me link

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={40} color="white" />
    </a>
  );
}
