import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nabeeltariq788@gmail.com",
    href: "mailto:nabeeltariq788@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+923028911301",
    href: "tel:+923028911301",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Talagang ,Punjab, Pakistan",
    href: "https://maps.app.goo.gl/CWwsDTGjPWt9tu4h8",
  },
];

const validateField = (name, value) => {
  switch (name) {
    case "name":
      return /^[a-zA-Z\s'-]{2,50}$/.test(value)
        ? null
        : "Name must be 2-50 characters (letters, spaces, hyphens, apostrophes).";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? null
        : "Please enter a valid email address.";
    case "message":
      return value.trim().length >= 10
        ? null
        : "Message must be at least 10 characters.";
    default:
      return null;
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    const newTouched = { name: true, email: true, message: true };

    setErrors(newErrors);
    setTouched(newTouched);

    if (Object.values(newErrors).some((err) => err !== null)) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = (field) => {
    const isInvalid = touched[field] && errors[field];
    return `w-full px-4 py-3 bg-surface rounded-xl border outline-none transition-all ${
      isInvalid
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
    }`;
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Let's build{" "}
              <span className="font-serif italic font-normal text-foreground">
                something great.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground">
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's discuss how we can work together.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid justify-items-center lg:grid-cols-2 gap-12">
          <Reveal delay={0.3} className="w-full">
            <div className="glass w-full sm:px-8 py-8 sm:py-8 px-4 rounded-3xl border border-primary/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name..."
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses("name")}
                />
                {touched.name && errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses("email")}
                />
                {touched.email && errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClasses("message")}
                />
                {touched.message && errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                       p-4 rounded-xl ${
                         submitStatus.type === "success"
                           ? "bg-green-500/10 border border-green-500/20 text-green-400"
                           : "bg-red-500/10 border border-red-500/20 text-red-400"
                       }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          </Reveal>

          <Reveal delay={0.4} className="space-y-6 w-full">
            <div className="glass w-full sm:px-8 py-8 sm:py-8 px-4 rounded-3xl border border-primary/30">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
