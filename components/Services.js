function Services() {
    try {
        const services = [
            {
                title: "IT Infrastructure",
                description: "Building robust, scalable, and secure network infrastructure across state departments.",
                icon: "server",
                color: "bg-blue-100 text-blue-600"
            },
            {
                title: "Software Development",
                description: "Custom e-Governance applications enhancing efficiency and transparency in administration.",
                icon: "code",
                color: "bg-teal-100 text-teal-600"
            },
            {
                title: "BSWAN Connectivity",
                description: "Bihar State Wide Area Network connecting headquarters to block level offices.",
                icon: "network",
                color: "bg-indigo-100 text-indigo-600"
            },
            {
                title: "Capacity Building",
                description: "Training programs and skill development in emerging digital technologies.",
                icon: "graduation-cap",
                color: "bg-amber-100 text-amber-600"
            },
            {
                title: "IT Consultancy",
                description: "Expert advisory services for IT policy formulation and project management.",
                icon: "lightbulb",
                color: "bg-purple-100 text-purple-600"
            },
            {
                title: "Aadhaar Services",
                description: "State registrar for UIDAI, managing enrollment and updation centers.",
                icon: "fingerprint",
                color: "bg-rose-100 text-rose-600"
            }
        ];

        return (
            <section id="services" className="section-padding bg-white" data-name="Services" data-file="components/Services.js">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-[var(--secondary)] uppercase mb-3">Our Core Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Digital Solutions for Modern Governance</h3>
                        <p className="text-gray-600 text-lg">Comprehensive IT services designed to modernize administrative processes and improve citizen service delivery across Bihar.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`icon-${service.icon} text-2xl`}></div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)] transition-colors">{service.title}</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                <a href="services.html" className="inline-flex items-center text-[var(--primary-light)] font-semibold text-sm hover:text-[var(--primary)]">
                                    Learn more <div className="icon-arrow-right ml-1 text-base group-hover:translate-x-1 transition-transform"></div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        return null;
    }
}