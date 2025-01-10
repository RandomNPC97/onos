// src/components/FAQ.js
import React, { useState } from 'react';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData= [
    {
      question: "How do I open a bank account?",
      answer: "To open a bank account, you can apply online by completing our account registration form and providing the necessary identification documents. Once verified, your account will be activated."
    },
    {
      question: "What types of accounts do you offer?",
      answer: "We offer a variety of accounts including checking accounts, savings accounts, and business accounts. You can view detailed information about each account type on our website."
    },
    {
      question: "How do I reset my online banking password?",
      answer: "To reset your password, click on 'Forgot Password' on the login page. You will need to verify your identity by answering security questions or receiving a verification code via email or SMS."
    },
    {
      question: "Are there any fees associated with online banking?",
      answer: "We strive to keep our fees as transparent as possible. Most online banking services are free, but certain transactions such as international transfers may incur fees. Check our fees section for detailed information."
    },
    {
      question: "How do I set up automatic payments?",
      answer: "To set up automatic payments, log in to your account, go to the 'Payments' section, and follow the instructions to schedule recurring payments for your bills or other transactions."
    }
  ];

  return (
    <div id='faqs' className="flex flex-col items-center justify-center pt-10">
      <div className="w-full max-w-7xl p-2 mx-auto rounded-md text-white">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="mb-4 border-b border-gray-200">
            <button
              className="w-full text-left py-4 px-6 text-lg font-medium flex justify-between items-center focus:outline-none"
              onClick={() => toggle(i)}
            >
              <span className='text-black'>{item.question}</span>
              <span className='text-text_theme'>{selected === i ? '-' : '+'}</span>
            </button>
            <div className={`px-6 py-4 ${selected === i ? 'block' : 'hidden'}`}>
              <p className="text-text_theme">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
