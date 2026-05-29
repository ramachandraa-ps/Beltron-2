function Updates() {
    try {
        const [activeTab, setActiveTab] = React.useState('tenders');

        const updates = {
            tenders: [
                { id: 1, date: "May 25, 2026", title: "RFP for Selection of Agency for Comprehensive AMC of IT Infrastructure", ref: "BSEDC/2026/05/12", new: true },
                { id: 2, date: "May 18, 2026", title: "Empanelment of Agencies for Supply & Installation of CCTV Surveillance Systems", ref: "BSEDC/2026/05/08", new: false },
                { id: 3, date: "May 10, 2026", title: "Corrigendum: Extension of Bid Submission Date for Cloud Hosting Services", ref: "BSEDC/2026/04/45", new: false },
            ],
            circulars: [
                { id: 4, date: "May 20, 2026", title: "Guidelines for implementation of e-Office across departments", ref: "Cir/2026/089", new: true },
                { id: 5, date: "May 15, 2026", title: "Holiday notification for IT Bhawan employees", ref: "Cir/2026/088", new: false },
            ]
        };

        return (
            <section id="updates" className="section-padding bg-[var(--background)]" data-name="Updates" data-file="components/Updates.js">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Side: About / Director Msg */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                    <div className="icon-quote text-2xl text-[var(--primary)]"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">MD's Message</h3>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">
                                    "BSEDC is committed to realizing the vision of a digitally integrated Bihar. We are continuously striving to provide transparent, efficient, and reliable IT services to empower citizens and streamline governance."
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="MD Portrait" className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Managing Director</div>
                                        <div className="text-sm text-gray-500">BSEDC Ltd.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Tenders & Updates Tabs */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="flex border-b border-gray-100">
                                    <button 
                                        className={`flex-1 py-4 text-center font-semibold text-sm uppercase tracking-wide transition-colors ${activeTab === 'tenders' ? 'bg-[var(--primary)] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                                        onClick={() => setActiveTab('tenders')}
                                    >
                                        Latest Tenders
                                    </button>
                                    <button 
                                        className={`flex-1 py-4 text-center font-semibold text-sm uppercase tracking-wide transition-colors ${activeTab === 'circulars' ? 'bg-[var(--primary)] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                                        onClick={() => setActiveTab('circulars')}
                                    >
                                        Circulars & Notices
                                    </button>
                                </div>
                                
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {(activeTab === 'tenders' ? updates.tenders : updates.circulars).map(item => (
                                            <li key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-colors group">
                                                <div className="flex-shrink-0 text-center sm:text-left">
                                                    <div className="text-sm font-semibold text-[var(--secondary)]">{item.date}</div>
                                                    <div className="text-xs text-gray-400 mt-1">Ref: {item.ref}</div>
                                                </div>
                                                <div className="flex-grow">
                                                    <a href="#" className="text-gray-800 font-medium group-hover:text-[var(--primary)] transition-colors inline-block pr-2">
                                                        {item.title}
                                                    </a>
                                                    {item.new && <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-red-100 text-red-600 rounded animate-pulse uppercase mt-2 sm:mt-0">New</span>}
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                                        <div className="icon-arrow-down text-sm"></div>
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 text-center">
                                        <button className="text-[var(--primary)] font-semibold text-sm hover:underline flex items-center justify-center mx-auto">
                                            View All {activeTab === 'tenders' ? 'Tenders' : 'Circulars'} 
                                            <div className="icon-chevron-right ml-1 text-lg"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Updates component error:', error);
        return null;
    }
}