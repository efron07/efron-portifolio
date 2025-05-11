
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Import the arrow icon

const ServiceCard = ({ service, index }) => {
    const { icon, title, description, features, requestLink } = service;

    return (
        <motion.div
            className="card p-6 rounded-lg bg-dark-100 dark:bg-dark-700 text-white shadow-lg flex flex-col h-full" // Added flex-col and h-full
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
                y: -8, // Lift effect on hover
                boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.3), 0 8px 16px -8px rgba(0, 0, 0, 0.2)', // Subtle shadow/glow
                transition: { duration: 0.3 },
            }}
        >
            <div className="text-4xl text-primary-400 mb-4"> {/* Icon */}
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3> {/* Title */}
            <p className="text-dark-300 dark:text-dark-200 mb-4 flex-grow">{description}</p> {/* Description (flex-grow to push link down) */}

            <ul className="space-y-2 mb-4"> {/* Features list */}
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-dark-300 dark:text-dark-200">
                        <FiArrowRight className="mr-2 text-primary-500" /> {/* Arrow icon */}
                        {feature}
                    </li>
                ))}
            </ul>

            <a
                href={requestLink}
                className="text-primary-500 font-medium hover:underline flex items-center" // Request Service Link
            >
                Request Service
                <FiArrowRight className="ml-2" />
            </a>
        </motion.div>
    );
};

export default ServiceCard;