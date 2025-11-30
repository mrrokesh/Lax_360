import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Palette, Smartphone, Code, Box, Layers, Zap, Users, Globe, Ruler, Cpu } from 'lucide-react';
import companyData from '../data/companyData.json';
import teamMeetingImg from '../assets/team-meeting.jpg';

const iconMap = {
    Palette: Palette,
    Smartphone: Smartphone,
    Code: Code,
    Box: Box,
    Ruler: Ruler,
    Cpu: Cpu,
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Home = () => {
    const { company, services, industries } = companyData;

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-white to-white opacity-70"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50 text-primary-700 font-medium text-sm">
                                Future-Ready Solutions
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                                Design. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                                    Develop.
                                </span> <br />
                                Dominate.
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                                {company.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Start Your Project
                                    <ArrowRight className="ml-2 -mr-1" size={20} />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                <div className="relative h-full bg-white/50 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex items-center justify-center overflow-hidden">
                                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white flex flex-col justify-between transform translate-y-8">
                                            <Palette size={32} />
                                            <span className="font-bold text-lg">Creative Design</span>
                                        </div>
                                        <div className="bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-between">
                                            <Code size={32} />
                                            <span className="font-bold text-lg">Clean Code</span>
                                        </div>
                                        <div className="bg-white border border-gray-100 rounded-2xl p-6 text-gray-900 flex flex-col justify-between shadow-lg">
                                            <Smartphone size={32} className="text-secondary-600" />
                                            <span className="font-bold text-lg">Mobile First</span>
                                        </div>
                                        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-6 text-white flex flex-col justify-between transform -translate-y-8">
                                            <Zap size={32} />
                                            <span className="font-bold text-lg">Fast Performance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">Our Services</h2>
                        <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Digital Solutions</p>
                        <p className="text-lg text-gray-600">We provide end-to-end services to transform your business.</p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service) => {
                            const Icon = iconMap[service.icon] || Box;
                            return (
                                <motion.div
                                    key={service.id}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                                >
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.items.slice(0, 3).map((item, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <img
                                src={teamMeetingImg}
                                alt="Team working together"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose LAX 360?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We don't just build software; we build partnerships. Our approach combines technical expertise with creative innovation to deliver results that matter.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Innovative Approach', desc: 'We stay ahead of the curve with the latest technologies.' },
                                    { title: 'Client-Centric', desc: 'Your success is our priority. We work closely with you.' },
                                    { title: 'End-to-End Service', desc: 'From concept to launch and beyond, we handle it all.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <CheckCircle className="text-primary-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our expertise spans across various sectors, delivering tailored solutions for unique challenges.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((industry, idx) => (
                            <span
                                key={idx}
                                className="px-6 py-3 bg-gray-800 rounded-full text-gray-300 border border-gray-700 hover:border-primary-500 hover:text-white transition-colors cursor-default"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Projects Completed', value: '150+', icon: Layers },
                            { label: 'Happy Clients', value: '50+', icon: Users },
                            { label: 'Years Experience', value: '10+', icon: Globe },
                            { label: 'Team Members', value: '25+', icon: Users },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <stat.icon size={24} className="text-white" />
                                </div>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-primary-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A streamlined process designed to deliver excellence from concept to launch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We dive deep into your goals and requirements.' },
                            { step: '02', title: 'Strategy', desc: 'Planning the perfect roadmap for success.' },
                            { step: '03', title: 'Execution', desc: 'Bringing designs and code to life with precision.' },
                            { step: '04', title: 'Launch', desc: 'Deploying and optimizing for the real world.' },
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                <div className="text-5xl font-bold text-gray-100 absolute top-4 right-4 select-none">
                                    {item.step}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
                            View Full Process <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our partners have to say.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "LAX 360 transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
                                author: "Sarah Jenkins",
                                role: "CTO, TechFlow Inc."
                            },
                            {
                                quote: "The team delivered our mobile app ahead of schedule and it looks absolutely stunning. Highly recommended!",
                                author: "Mark Thompson",
                                role: "Founder, StartUp Go"
                            },
                            {
                                quote: "Professional, creative, and reliable. They understood our vision perfectly and executed it flawlessly.",
                                author: "Elena Rodriguez",
                                role: "Marketing Director, Creative Co."
                            }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                                <div className="text-primary-200 absolute top-6 right-8">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 mb-6 relative z-10 italic">"{testimonial.quote}"</p>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                                    <div className="text-sm text-primary-600">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Let’s Build Something Great Together</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Ready to transform your ideas into reality? Contact us today for a free consultation.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Get a Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
