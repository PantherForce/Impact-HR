import React from "react";

const ContactForm: React.FC = () => {
  return (
    // <div className="max-w-4xl mx-auto my-10 p-10 bg-black rounded-2xl shadow-md">
    //   <h2 className="text-3xl font-semibold text-center text-white mb-4">
    //     Get in touch with us
    //   </h2>
    //   <p className="text-center text-white mb-8">
    //     Join Impact HR today and experience a world of recruitment
    //     possibilities. Connect with us to enhance your recruitment process with
    //     the best tools and platforms available. Let us be your trusted partner
    //     in finding the solutions that will propel your recruitment success.
    //   </p>
    //   <form className="space-y-6">
    //     <div className="flex flex-wrap -mx-0">
    //       <div className="w-full md:w-1/3 px-2 mb-4">
    //         <input
    //           type="text"
    //           name="firstName"
    //           placeholder="Enter your First Name"
    //           className="w-full p-2 border border-gray-300 rounded-md"
    //           required
    //         />
    //       </div>
    //       <div className="w-full md:w-1/3 px-2 mb-4">
    //         <input
    //           type="text"
    //           name="lastName"
    //           placeholder="Enter your Last Name"
    //           className="w-full p-2 border border-gray-300 rounded-md"
    //           required
    //         />
    //       </div>
    //       <div className="w-full md:w-1/3 px-2 mb-4">
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Enter your email"
    //           className="w-full p-2 border border-gray-300 rounded-md"
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div className="w-full px-2 mb-4">
    //       <textarea
    //         name="message"
    //         placeholder="What are you say?"
    //         rows={4}
    //         className="w-full p-2 border border-gray-300 rounded-md"
    //         required
    //       />
    //     </div>
    //     <div className="w-full px-2 mb-4 text-center">
    //       <button
    //         type="submit"
    //         className="px-4 py-2 bg-custom-btn text-white rounded"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div className="flex mt-10 mb-20 mx-4 w-full md:mx-0 justify-center items-center">
      <iframe
        className="w-3/4 h-[50vh]"
        src="https://docs.google.com/forms/d/e/1FAIpQLSf8wqkUWHa-FHQ-Ojc5J2OgAYd6gB4Fj_LP0HXvHEp-EWVMEQ/viewform?embedded=true"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactForm;
