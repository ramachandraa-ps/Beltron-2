function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="team-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Our Team" breadcrumbs={['About Us', 'Our Team']} />
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Dedicated Professionals</h2>
                        <p className="text-gray-600 mb-12 text-lg">Meet the team working tirelessly to bring digital transformation to Bihar.</p>
                        
                        <div className="space-y-12">
                            {/* Management Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left border-b pb-2">Management</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                                            <div className="icon-user text-2xl"></div>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900">Sri Kaushal Kishore, I.A.S</h4>
                                            <p className="text-sm text-[var(--primary)]">Managing Director</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                            <div className="icon-user text-2xl"></div>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900">Sri Deepak Anand, I.A.S</h4>
                                            <p className="text-sm text-[var(--primary)]">Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Key Departments */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left border-b pb-2">Key Departments & Officers</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {['General Manager (IT)', 'Chief General Manager', 'Chief Accounts Officer', 'Manager (Project)', 'Manager (HR)', 'Company Secretary'].map((role, idx) => (
                                        <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100 text-left hover:bg-white hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-3">
                                                <div className="icon-briefcase text-xl"></div>
                                            </div>
                                            <h4 className="font-bold text-gray-900 text-lg mb-1">{role}</h4>
                                            <p className="text-sm text-gray-500">BSEDC Headquarters</p>
                                        </div>
                                    ))}
                                </div>
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