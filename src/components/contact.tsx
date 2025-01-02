'use client';

import { sendEmail } from '@/utils/emailService';
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Yumna Nasir',
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await sendEmail(templateParams);
      alert('Email sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('EmailJs Error', error);
      alert('Failed to send email');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full mb-8" style={{ height: '350px' }}>
        <Image
          src="/contact.webp"
          alt="Contact Us Hero"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8" style={{ backgroundColor: '#f9f5f1' }}>
          <h1 className="text-3xl font-bold text-center mb-4" style={{ color: '#545454' }}>CONTACT US</h1>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: '#545454' }}>FAQ</h2>
            <div className="space-y-2">
              <FAQItem question="What is your return policy?" answer="Our return policy allows returns within 30 days of purchase." />
              <FAQItem question="How do I track my order?" answer="You can track your order using the tracking number provided in your shipping confirmation email." />
              <FAQItem question="What if my item is faulty?" answer="If your item is faulty, please contact us immediately with details and photos so we can assist you." />
              <FAQItem question="How do I care for my jewellery?" answer="To care for your jewellery, avoid contact with harsh chemicals, store it in a soft pouch, and clean it regularly with a mild soap and water solution." />
              <FAQItem question="How long will my order take to arrive?" answer="Delivery times vary depending on your location. Please check our shipping page for estimated delivery times." />
              <FAQItem question="Do you ship internationally?" answer="Yes, we ship internationally to select countries. Please check our shipping page for a list of eligible countries." />
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: '#545454' }}>SEND US A MESSAGE</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1" style={{ color: '#545454', fontSize: '14px' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  style={{ borderColor: '#d4d4d4', fontSize: '14px' }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1" style={{ color: '#545454', fontSize: '14px' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  style={{ borderColor: '#d4d4d4', fontSize: '14px' }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1" style={{ color: '#545454', fontSize: '14px' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded h-24"
                  style={{ borderColor: '#d4d4d4', fontSize: '14px' }}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
 
 
      <button
    type="submit"
    className="bg-transparent text-gray-800 font-semibold py-2 px-6 border rounded transition duration-300 h-14"
    style={{
      color: '#545454',
      borderColor: '#d4d4d4',
      backgroundColor: '#f9d9c5',
      width: 'auto',
    }}
  >
    SEND MESSAGE
  </button>
</div>

            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: '#545454' }}>OTHER DETAILS</h2>
            <p style={{ color: '#545454', fontSize: '14px' }}>
              You can also contact us at:
            </p>
            <p style={{ color: '#545454', fontSize: '14px' }}>
              Email: info@simonewalsh.com
            </p>
            <p style={{ color: '#545454', fontSize: '14px' }}>
              Phone: +61 123 456 789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <details className="border rounded p-4 mb-2" style={{ borderColor: '#d4d4d4', backgroundColor: '#f9f5f1' }}>
    <summary className="font-semibold cursor-pointer" style={{ color: '#545454', fontSize: '14px' }}>
      {question}
    </summary>
    <p className="mt-2" style={{ color: '#545454', fontSize: '14px' }}>{answer}</p>
  </details>
);

export default Contact;
