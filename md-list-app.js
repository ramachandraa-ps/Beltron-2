function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="md-list-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="List of Managing Directors" breadcrumbs={['About Us', 'Managing Directors']} />
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Past and Present Managing Directors</h2>
                        <p className="text-gray-600 mb-12 text-lg">Recognizing the leadership that has shaped BSEDC over the years.</p>
                        
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[var(--primary)] text-white">
                                        <th className="py-4 px-6 font-semibold">S.No.</th>
                                        <th className="py-4 px-6 font-semibold">Name of Managing Director</th>
                                        <th className="py-4 px-6 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-gray-900">1</td>
                                        <td className="py-4 px-6 font-bold text-[var(--primary)]">Sri Kaushal Kishore, I.A.S</td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Present
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-gray-900">2</td>
                                        <td className="py-4 px-6 text-gray-800">Sri Santosh Kumar Mall, I.A.S</td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Former
                                            </span>
                                        </td>
                                    </tr>
                                    {/* Add more former MDs here as needed */}
                                </tbody>
                            </table>
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