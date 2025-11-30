import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Smartphone, Code, Box, Target, Eye, Ruler, Cpu, TrendingUp } from 'lucide-react';
import companyData from '../data/companyData.json';
import graphicDesignImg from '../assets/graphic-design.jpg';
import mepImg from '../assets/mep-designing.png';
import iotImg from '../assets/iot-projects.png';
import softwareDigitalImg from '../assets/software-digital.png';
import cadDesignImg from '../assets/cad-design.jpg';
import digitalMarketingImg from '../assets/digital-marketing.png';
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';
import team4 from '../assets/team-4.jpg';

const serviceImages = {
    'cad-design': cadDesignImg,
    'mep-designing': mepImg,
    'iot-projects': iotImg,
    'graphic-design': graphicDesignImg,
    'software-digital': softwareDigitalImg,
    'digital-marketing': digitalMarketingImg,
};

const iconMap = {
    Palette: Palette,
    Smartphone: Smartphone,
    Code: Code,
    Box: Box,
    Ruler: Ruler,
    Cpu: Cpu,
    TrendingUp: TrendingUp,
};

const teamMembers = [
    { id: 1, name: 'David Chen', role: 'Founder & CEO', image: team1 },
    { id: 2, name: 'Sarah Johnson', role: 'Creative Director', image: team2 },
    { id: 3, name: 'Michael Ross', role: 'Lead Developer', image: team3 },
    { id: 4, name: 'Emily Davis', role: 'Product Manager', image: team4 },
];

const About = () => {
    const { company, services, process } = companyData;

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {company.description}
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-primary-50 rounded-3xl p-10">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-700">{company.mission}</p>
                        </div>
                        <div className="bg-secondary-50 rounded-3xl p-10">
                            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-6">
                                <Eye size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-lg text-gray-700">{company.vision}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
                    </div>

                    <div className="space-y-24">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon] || Box;
                            const ServiceImage = serviceImages[service.id];
                            return (
                                <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="lg:w-1/2">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                        <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                                                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center text-gray-400">
                                            <img src={ServiceImage} alt={service.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                        <p className="text-gray-400">How we bring your ideas to life</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="text-6xl font-bold text-gray-800 absolute -top-8 -left-4 z-0 opacity-50">
                                    0{step.step}
                                </div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-primary-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
