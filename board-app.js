function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="board-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Board of Directors" breadcrumbs={['About Us', 'Board of Directors']} />
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Board of Directors</h2>
                        <p className="text-gray-600 mb-12 text-lg">Our esteemed board providing strategic direction and governance to BSEDC Ltd.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-500 mb-4">
                                    <img src="https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/bba8ace2-5e50-4083-b4c0-4f6f822467de.jpeg" alt="Samrat Choudhary" className="w-full h-full object-cover"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Samrat Choudhary</h3>
                                <p className="text-gray-600 text-sm mt-1">Hon’ble Chief Minister, Bihar</p>
                                <span className="inline-block mt-3 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full">Chairman</span>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[var(--primary)] mb-4">
                                    <img src="https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/944bc19f-e8d3-4036-ac11-ef097edf5ca4.jpeg" alt="Nitish Mishra" className="w-full h-full object-cover"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Nitish Mishra</h3>
                                <p className="text-gray-600 text-sm mt-1">Hon'ble I.T Minister, Bihar</p>
                                <span className="inline-block mt-3 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">Vice Chairman</span>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[var(--secondary)] mb-4">
                                    <img src="https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/c6ae0284-072b-4548-b876-228f8c3957ea.jpeg" alt="Kaushal Kishore" className="w-full h-full object-cover"/>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Kaushal Kishore, I.A.S</h3>
                                <p className="text-gray-600 text-sm mt-1">Managing Director, BSEDC Ltd.</p>
                                <span className="inline-block mt-3 px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full">Managing Director</span>
                            </div>
                            
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 flex items-center justify-center border-4 border-gray-200 mb-4">
                                    <div className="icon-user text-4xl text-gray-400"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Deepak Anand, I.A.S</h3>
                                <p className="text-gray-600 text-sm mt-1">Director, BSEDC Ltd.</p>
                                <span className="inline-block mt-3 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">Director</span>
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