function TendersList() {
    try {
        const tenders = [
            { id: 1, date: "May 25, 2026", title: "RFP for Selection of Agency for Comprehensive AMC of IT Infrastructure", ref: "BSEDC/2026/05/12", new: true, deadline: "June 15, 2026" },
            { id: 2, date: "May 18, 2026", title: "Empanelment of Agencies for Supply & Installation of CCTV Surveillance Systems", ref: "BSEDC/2026/05/08", new: false, deadline: "June 10, 2026" },
            { id: 3, date: "May 10, 2026", title: "Corrigendum: Extension of Bid Submission Date for Cloud Hosting Services", ref: "BSEDC/2026/04/45", new: false, deadline: "May 30, 2026" },
            { id: 4, date: "April 28, 2026", title: "Supply, Installation and Commissioning of Desktop Computers for Block Offices", ref: "BSEDC/2026/04/22", new: false, deadline: "Closed" },
        ];

        return (
            <section className="py-16 bg-white" data-name="TendersList" data-file="components/TendersList.js">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <ul className="space-y-4">
                                {tenders.map(item => (
                                    <li key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-100 transition-colors group">
                                        <div className="flex-shrink-0 text-center sm:text-left min-w-[120px]">
                                            <div className="text-sm font-bold text-[var(--primary)]">{item.date}</div>
                                            <div className="text-xs text-gray-500 mt-1">Ref: {item.ref}</div>
                                        </div>
                                        <div className="flex-grow">
                                            <a href="#" className="text-gray-900 font-semibold text-lg group-hover:text-[var(--primary)] transition-colors block mb-2">
                                                {item.title}
                                            </a>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                                                    Deadline: {item.deadline}
                                                </span>
                                                {item.new && <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-red-100 text-red-600 rounded uppercase">New</span>}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 mt-4 sm:mt-0 flex gap-2">
                                            <button className="px-4 py-2 text-sm font-medium rounded bg-white border border-gray-200 text-gray-700 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors flex items-center gap-2">
                                                <div className="icon-download text-base"></div> Document
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('TendersList component error:', error);
        return null;
    }
}