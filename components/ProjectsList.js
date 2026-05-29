function ProjectsList() {
    try {
        const projects = [
            {
                title: "BSWAN 2.0 (Bihar State Wide Area Network)",
                status: "Ongoing",
                description: "Upgradation of BSWAN to provide high-speed, secure connectivity up to the block level across all districts of Bihar.",
                icon: "network"
            },
            {
                title: "e-Office Implementation",
                status: "Active",
                description: "Digital workplace solution deployed across state departments to achieve a paperless, transparent, and efficient work culture.",
                icon: "file-text"
            },
            {
                title: "City Surveillance & CCTV",
                status: "Completed",
                description: "Comprehensive CCTV surveillance system installed in major cities to assist law enforcement and ensure public safety.",
                icon: "cctv"
            },
            {
                title: "State Data Centre (SDC)",
                status: "Active",
                description: "Centralized, secure hosting facility for all e-Governance applications and data of the Government of Bihar.",
                icon: "server"
            }
        ];

        return (
            <section className="py-16 md:py-24 bg-white" data-name="ProjectsList" data-file="components/ProjectsList.js">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key E-Governance Projects</h2>
                        <p className="text-gray-600 text-lg">Discover the initiatives driving the digital transformation of Bihar and improving citizen service delivery.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projects.map((project, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-blue-100 text-[var(--primary)] rounded-lg flex items-center justify-center">
                                        <div className={`icon-${project.icon} text-2xl`}></div>
                                    </div>
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProjectsList component error:', error);
        return null;
    }
}