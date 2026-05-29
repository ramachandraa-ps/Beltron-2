function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="about-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="About Us" breadcrumbs={['About Us']} />
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">Bihar State Electronics Development Corporation Ltd. (BSEDC) is a Government of Bihar undertaking under the Department of Information Technology. We act as the nodal agency for implementing e-Governance projects and advancing the state's IT infrastructure.</p>
                        </div>
                        
                        <div className="space-y-12">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-xl flex items-center justify-center shrink-0">
                                        <div className="icon-eye text-2xl"></div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-[var(--primary)]">Our Vision</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    e-Development of Bihar as the engine for transition into a developed State and an empowered society.
                                </p>
                            </div>
                            
                            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 shadow-sm">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-14 h-14 bg-[var(--accent)] text-white rounded-xl flex items-center justify-center shrink-0">
                                        <div className="icon-target text-2xl"></div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-amber-900">Our Mission</h3>
                                </div>
                                
                                <div className="text-gray-700 leading-relaxed space-y-4 mb-6 text-lg">
                                    <p>Bihar State Electronics Development Corporation Ltd. (BSEDC Ltd.), is a Govt. of Bihar undertaking engaged in businesses related to Electronics, Computer goods and IT services. The corporation caters to the technological needs of the government and carries out IT project conceptualization and implementation for the State Government Departments and agencies.</p>
                                    <p>BSEDC believes that an opportunity for delivering solutions and IT services is beyond the routine delivery of IT services and solutions, understand vision, mission of the organization, assess the needs of the stakeholders, work towards measurable objectives and deliver value to the beneficiaries by delivering superior value through its services and solutions.</p>
                                </div>

                                <ul className="text-gray-700 leading-relaxed space-y-4">
                                    <li className="flex items-start"><div className="icon-check text-[var(--accent)] mt-1 mr-3 shrink-0 text-xl"></div> <span>To Provide Excellent Electronic, IT Goods, IT Services to the Government of Bihar.</span></li>
                                    <li className="flex items-start"><div className="icon-check text-[var(--accent)] mt-1 mr-3 shrink-0 text-xl"></div> <span>To help its clients adapt themselves to the modern management techniques.</span></li>
                                    <li className="flex items-start"><div className="icon-check text-[var(--accent)] mt-1 mr-3 shrink-0 text-xl"></div> <span>To create a robust IT eco-system for enhancing competitiveness and productivity of the key economic sectors affecting the lives of the majority of the population of the State.</span></li>
                                    <li className="flex items-start"><div className="icon-check text-[var(--accent)] mt-1 mr-3 shrink-0 text-xl"></div> <span>To disseminate the IT and ITeS activities across the State so that rural population is equally benefited.</span></li>
                                    <li className="flex items-start"><div className="icon-check text-[var(--accent)] mt-1 mr-3 shrink-0 text-xl"></div> <span>To significantly enhance the availability of skilled manpower in the Government sector.</span></li>
                                    <li className="flex items-start"><div className="icon-check text-[var(--accent)] mt-1 mr-3 shrink-0 text-xl"></div> <span>To provide seamless and reliable citizen-centric services and information for the public, thereby enhancing efficiency, transparency and accountability of Government.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);