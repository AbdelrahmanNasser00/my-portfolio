import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsDesignIdea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    emailjs
      .send(
        "service_mkgjsig",
        "template_id9vrh6",
        formData,
        "srwD8L6CfBigIc5Hc"
      )
      .then(
        () => {
          setSuccess("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setSuccess("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="text-gray-100 pb-24">
      {/* Your existing content */}

      {/* Contact Section */}
      <section className=" px-4 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 from-transparent to-[#2a2a2a] opacity-50"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-7xl font-bold text-center mb-6 bg-clip-text text-transparent text-white">
            Contact me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-1">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-4xl text-slate-300 text-left font-semibold mb-6">
                Send Us a Note and Initiate the Dialogue!
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:abdo2652149@gmail.com"
                  className="flex items-center space-x-3 group">
                  <div className="p-3 rounded-lg bg-[#2a2a2a] group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="group-hover:text-blue-400 transition-colors">
                    abdo2652149@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+201234567890"
                  className="flex items-center space-x-3 group">
                  <div className="p-3 rounded-lg bg-[#2a2a2a] group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="group-hover:text-purple-400 transition-colors">
                    +20 1023013298
                  </span>
                </a>

                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-[#2a2a2a]">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <span>Egypt</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="flex space-x-1">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-left pb-1 text-sm font-medium text-[#A07CFE]">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    className="w-full px-4 py-2 focus:outline-none rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Ex. Abdelrahman"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left pb-1 text-sm font-medium text-[#A07CFE]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full focus:outline-none px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Ex. Abdo@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-left pb-1 text-sm font-medium text-[#A07CFE]">
                  Subject
                </label>
                <input
                  type="subject"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full focus:outline-none px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Ex. Message Title"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-left pb-1 text-sm font-medium text-[#A07CFE]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full focus:outline-none px-4 py-3 rounded-lg bg-[#2a2a2a] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Ex. Hello, I'd like to work with you!"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              {success && (
                <p className="text-center mt-2 text-green-400">{success}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUsDesignIdea;
