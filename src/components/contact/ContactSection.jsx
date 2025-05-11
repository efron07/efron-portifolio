import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiPhone } from 'react-icons/fi'

// emailjs
import emailjs from '@emailjs/browser';


const SERVICE_ID = 'service_s2kqing'; 
const TEMPLATE_ID = 'template_k6feogq'; 
const PUBLIC_KEY = 'ZaHIMqZC1iXXvLl9_'; 


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)
  const formRef = useRef(null)
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  
  

  
  // Initialize EmailJS with your public key (usually done once in your app setup)
  emailjs.init({
    publicKey: PUBLIC_KEY,
  });
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        // Add any other template parameters your EmailJS template expects
      });

      console.log('EmailJS response:', result);

      if (result.status === 200) {
        setSubmitResult({
          success: true,
          message: 'Message sent successfully! I will respond shortly.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitResult(null);
        }, 5000);

      } else {
        // Handle non-200 status codes from EmailJS if necessary
        setSubmitResult({
          success: false,
          message: `Failed to send message. EmailJS status: ${result.status}`,
        });
      }

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitResult({
        success: false,
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Contact info items
  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      label: 'Email',
      value: 'efrondamasco@gmail.com',
      href: 'mailto:efrondamasco@gmail',
    },
    {
      icon: <FiGithub className="text-xl" />,
      label: 'GitHub',
      value: 'github.com/efron07',
      href: 'https://github.com/efron07',
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/efron-damasco',
      href: 'https://linkedin.com/in/efron-damasco',
    },
    {
      icon: <FiTwitter className="text-xl" />,
      label: 'Twitter',
      value: '@efron07',
      href: 'https://twitter.com/efron07',
    },
    {
      icon: <FiPhone className="text-xl" />,
      label: 'Phone',
      value: '+255616448344',
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to chat? Drop me a message!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-dark-500 dark:text-dark-400 mb-8">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-500 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{item.label}</h4>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              {/* Form submission status */}
              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-md ${
                    submitResult.success
                      ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                  }`}
                >
                  {submitResult.message}
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection