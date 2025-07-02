import React from 'react';

const faqs = [
    {
        "question": "What is Social Serve?",
        "answer": "Social Serve is a community platform where users can find, join, and create events that promote social good — such as cleanups, plantations, and donation campaigns."
    },
    {
        "question": "How do I register for an event?",
        "answer": "Simply click on any event card, and you will find a 'Join' or 'Register' button. You must be logged in to complete your registration."
    },
    {
        "question": "Do I need to pay to join any event?",
        "answer": "No, most events hosted on our platform are completely free to attend and participate in."
    },
    {
        "question": "Can I host or create my own event?",
        "answer": "Yes! If you're logged in, you can go to the 'Create Event' section and publish your own social event. Our team will review and approve it."
    },
    {
        "question": "Is my personal information safe?",
        "answer": "Absolutely. We use Firebase Authentication and secure databases to protect your data. We never share your information with third parties."
    },
    {
        "question": "How can I contact support or report a problem?",
        "answer": "You can use the Contact section at the bottom of the page or send us a message via the contact form. We'll respond as soon as possible."
    }
]


const FAQ = () => {
    return (
        <div className='bg-base-200 my-8 px-4 rounded-xl'>
            <h1 className='text-4xl font-bold text-teal-400 py-8 md:py-16 text-center'>Frequently Asked Questions</h1>
            {
                faqs.map((faq, index) => <div key={index}
                    className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>)
            }
        </div>
    );
};

export default FAQ;