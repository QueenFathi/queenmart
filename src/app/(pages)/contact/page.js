import Header from "@/app/ui/component/global/header";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const faq = [
  {
    question: "Do you have a physical store?",
    answer:
      "Yes. It is located at 10, Road 17, Agara Estate, Odo-Ona Elewe Ibadan, Oyo State, Nigeria. We also deliver nationwide/internationally",
  },
  {
    question: "How do I place an order",
    answer:
      "Simply browse our collection, add items to your cart, and proceed to checkout. Follow the onscreen instructions to complete your purchase",
  },
  {
    question: "Can I modify or cancel my order after placing it",
    answer:
      "Orders can be modified or canelled within 12 hours of placement. After that, they are processed and cannot be changed",
  },
  {
    question: "How can I track my order",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to monitor its status",
  },
  {
    question: "Do I have to pay for return shipping",
    answer:
      "Customers may be responsibe for return shipping unless the item was defective or incorrect",
  },
  {
    question: "Do you have a physical store?",
    answer:
      "Yes. It is located at 10, Road 17, Agara Estate, Odo-Ona Elewe Ibadan, Oyo State, Nigeria. We also deliver nationwide/internationally",
  },
  {
    question: "How do I place an order",
    answer:
      "Simply browse our collection, add items to your cart, and proceed to checkout. Follow the onscreen instructions to complete your purchase",
  },
  {
    question: "Can I modify or cancel my order after placing it",
    answer:
      "Orders can be modified or canelled within 12 hours of placement. After that, they are processed and cannot be changed",
  },
  {
    question: "How can I track my order",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to monitor its status",
  },
  {
    question: "Do I have to pay for return shipping",
    answer:
      "Customers may be responsibe for return shipping unless the item was defective or incorrect",
  },
];

export default function Contact() {
  return (
    <div className="py-16 md:py-20">
      <Header title={"Contact"} />
      <div className="container mx-auto px-2 py-14">
        <div>
          <h3 className="text-3xl font-semibold">Frequently Asked Questions</h3>
          <p className="py-5 text-lg">
            Have a different question and can't find the answer you're lookig
            for? Send usa message and we'll get back to you as soon as we can
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 my-5">
          {faq.map((item, index) => (
            <div key={index} className="">
              <h1 className="font-medium">{item.question}</h1>
              <p className="mt-3 text-stone-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-2 mx-auto">
        <h3 className="text-3xl font-semibold">Write us a Message</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
          <div className="col-span-7">
            <form className="flex flex-col gap-5">
              <div className="">
                <input
                  type="text"
                  className="border text-stone-800 py-2 px-3 w-full "
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="border text-stone-800 py-2 px-3 w-full "
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border text-stone-800 py-2 px-3 w-full "
                  placeholder="Subject"
                  required="required"
                />
              </div>
              <div>
                <textarea
                  className="border text-stone-800 px-3 w-full h-40"
                  placeholder="Message"
                  required="required"
                ></textarea>
              </div>
              <div>
                <button
                  className="bg-purple-500 py-2 px-5 text-white hover:bg-black transition hover:scale-105"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-5">
            <div className="">
              <iframe
                title="map"
                className="w-full h-52 border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="bg-light p-5 mb-3">
              <p className="mb-2 flex items-center gap-5 text-lg">
                <FaMapMarkerAlt className="text-purple-500" /> 10, Road 17,
                Agara Estate, Odo-Ona Elewe, Ibadan, Oyo State, Nigeria
              </p>
              <p className="mb-2 flex items-center gap-5 text-lg">
                <FaEnvelope className="text-purple-500" />{" "}
                fathiat477odutayo@gmail.com
              </p>
              <p className="mb-2 flex items-center gap-5 text-lg">
                <FaPhoneAlt className="text-purple-500" /> +2348089684723
                +2349036332486
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
