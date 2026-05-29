function App() {
    const circulars = [
        { id: 1, date: "May 20, 2026", title: "Guidelines for implementation of e-Office across departments", ref: "Cir/2026/089" },
        { id: 2, date: "May 15, 2026", title: "Holiday notification for IT Bhawan employees", ref: "Cir/2026/088" },
        { id: 3, date: "April 02, 2026", title: "Mandatory cybersecurity compliance checklist for state portals", ref: "Cir/2026/045" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="circulars-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Letters & Circulars" breadcrumbs={['Letters & Circulars']} />
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <ul className="divide-y divide-gray-100">
                                {circulars.map(item => (
                                    <li key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                                        <div>
                                            <a href="#" className="text-gray-900 font-semibold text-lg hover:text-[var(--primary)] transition-colors block mb-1">
                                                {item.title}
                                            </a>
                                            <div className="text-sm text-gray-500">
                                                Published: {item.date} • Ref: {item.ref}
                                            </div>
                                        </div>
                                        <button className="flex-shrink-0 px-4 py-2 text-sm font-medium rounded bg-white border border-gray-200 text-gray-700 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors flex items-center gap-2">
                                            <div className="icon-file-text text-base"></div> View PDF
                                        </button>
                                    </li>
                                ))}
                            </ul>
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