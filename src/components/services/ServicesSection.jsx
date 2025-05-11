import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component
import { FiFigma, FiCode, FiSmartphone, FiArrowRight } from 'react-icons/fi'; // Import icons for the data

// Define your service data here or import it from a data file
const servicesData = [
    {
        icon: <FiFigma />,
        title: 'UI/UX Design',
        description: 'Create intuitive and visually appealing user interfaces that enhance user experience and engagement.',
        features: [
            'User research and persona development',
            'Wireframing and prototyping',
            'Interactive design and animations',
            'Usability testing and iteration',
        ],
        requestLink: '#contact',
    },
    {
        icon: <FiCode />,
        title: 'Website Design & Development',
        description: 'Build professional websites that represent your brand and connect with your audience effectively.',
        features: [
            'Responsive designs for all devices',
            'SEO-friendly architecture',
            'Performance optimization',
            'Content management systems integration',
        ],
        requestLink: '#contact',
    },
    {
        icon: <FiSmartphone />,
        title: 'Mobile App Development',
        description: 'Develop custom mobile applications for iOS and Android platforms that deliver exceptional user experiences.',
        features: [
            'Native and cross-platform solutions',
            'Flutter and React Native expertise',
            'API integration and backend development',
            'App Store and Google Play deployment',
        ],
        requestLink: '#contact',
    },
    // Add more service objects here
];


const ServicesSection = () => {
    return (
        <section className="section bg-dark-900 text-white py-16"> {/* Added background and padding */}
            <div className="container-custom mx-auto"> {/* Centered container */}
                <motion.div
                    className="text-center mb-12" // Centered text and added bottom margin
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="section-title text-3xl font-bold mb-4">My Services</h2> {/* Section Title */}
                    <p className="section-subtitle text-lg text-dark-300 dark:text-dark-200"> {/* Section Subtitle */}
                        Professional digital solutions tailored to meet your business needs and exceed your expectations.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={service.title} // Using title as a key (ensure titles are unique)
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;