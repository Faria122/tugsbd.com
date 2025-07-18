import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8 text-center">
      <div>
        <FiMapPin className="mx-auto text-3xl text-blue-600" />
        <h3 className="font-bold text-lg mt-2">Address</h3>
        <p className="text-gray-600">Chittagong</p>
      </div>
      <div>
        <FiPhone className="mx-auto text-3xl text-blue-600" />
        <h3 className="font-bold text-lg mt-2">Phone</h3>
        <p className="text-gray-600">+880 1234 567890</p>
      </div>
      <div>
        <FiMail className="mx-auto text-3xl text-blue-600" />
        <h3 className="font-bold text-lg mt-2">Email</h3>
        <p className="text-gray-600">info@yourcompany.com</p>
      </div>
    </section>
  );
}
