function App() {
    const newsItems = [
        { id: 1, date: "May 20, 2026", title: "BSEDC successfully completes phase 2 of e-Office rollout", excerpt: "The implementation covers 15 additional state departments, marking a significant milestone in digital governance." },
        { id: 2, date: "May 05, 2026", title: "Cybersecurity workshop organized for state officials", excerpt: "A 3-day extensive training program was conducted to enhance awareness and readiness against cyber threats." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="news-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="News & Events" breadcrumbs={['News & Events']} />
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="grid gap-8">
                            {newsItems.map(item => (
                                <div key={item.id} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                                    <div className="text-sm font-semibold text-[var(--secondary)] mb-2">{item.date}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.excerpt}</p>
                                </div>
                            ))}
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