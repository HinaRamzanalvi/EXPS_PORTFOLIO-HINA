"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setToast({ message: "Please fill out all fields correctly.", type: "error" });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === "your_service_id_here" || 
        templateId === "your_template_id_here" || 
        publicKey === "your_public_key_here") {
      setLoading(false);
      setToast({ message: "EmailJS is not fully configured yet. Please configure your .env.local file.", type: "error" });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            reply_to: formData.email,
          },
        }),
      });

      if (response.ok) {
        setToast({ message: "Your message has been sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorText = await response.text();
        console.error("EmailJS Error Response:", errorText);
        setToast({ message: "Failed to send message. Please try again later.", type: "error" });
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setToast({ message: "An unexpected error occurred. Please try again.", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white px-6 md:px-24 py-24 relative overflow-hidden">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-teal-400"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* ================= Contact Info ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s connect!
          </p>

          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope size={24} className="text-teal-400" />
              <span>princess4177812@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt size={24} className="text-teal-400" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* ================= Contact Form ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex flex-col gap-6 shadow-xl relative"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 border ${
                errors.name ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-teal-400"
              } focus:outline-none transition`}
            />
            {errors.name && <span className="text-red-400 text-xs pl-1">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 border ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-teal-400"
              } focus:outline-none transition`}
            />
            {errors.email && <span className="text-red-400 text-xs pl-1">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className={`p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 border ${
                errors.message ? "border-red-500 focus:border-red-500" : "border-gray-700 focus:border-teal-400"
              } focus:outline-none transition`}
            ></textarea>
            {errors.message && <span className="text-red-400 text-xs pl-1">{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-teal-400 hover:bg-teal-500 text-black font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed bg-teal-500" : ""
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>

      {/* ================= Footer Note ================= */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-400 mt-16 text-sm"
      >
        I usually respond within 24 hours. Looking forward to collaborating with you!
      </motion.p>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border ${
              toast.type === "success" 
                ? "bg-teal-950/80 border-teal-500 text-teal-200" 
                : "bg-red-950/80 border-red-500 text-red-200"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={24} className="text-teal-400 shrink-0" />
            ) : (
              <AlertCircle size={24} className="text-red-400 shrink-0" />
            )}
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white">
                {toast.type === "success" ? "Success" : "Error"}
              </span>
              <span className="text-xs text-gray-300">{toast.message}</span>
            </div>
            <button 
              onClick={() => setToast(null)}
              className="ml-4 text-gray-400 hover:text-white transition"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
