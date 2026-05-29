function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="contact-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Contact Us" breadcrumbs={['Contact']} />
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                                <p className="text-gray-600 text-lg">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 text-left h-full flex flex-col justify-center">
                                    <ul className="space-y-8">
                                        <li className="flex items-start">
                                            <div className="icon-map-pin text-[var(--primary)] mt-1 mr-4 text-2xl"></div>
                                            <div>
                                                <strong className="block text-gray-900 mb-1 text-lg">Address</strong>
                                                <span className="text-gray-600 leading-relaxed">Beltron Bhawan, Shastri Nagar,<br/>Patna - 800 023, Bihar, India</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="icon-phone text-[var(--primary)] mt-1 mr-4 text-2xl"></div>
                                            <div>
                                                <strong className="block text-gray-900 mb-1 text-lg">Phone</strong>
                                                <span className="text-gray-600">+91-612-2281814, 2281815</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="icon-mail text-[var(--primary)] mt-1 mr-4 text-2xl"></div>
                                            <div>
                                                <strong className="block text-gray-900 mb-1 text-lg">Email</strong>
                                                <span className="text-gray-600">info@beltron.in</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                                    <img 
                                        src="https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/b9ef7020-70bf-46f2-be6e-6e0467c413df.png" 
                                        alt="Beltron Bhavan" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-16">
                                <h3 className="text-2xl font-bold mb-8 text-center">Get Directions to Beltron Bhawan</h3>
                                <div className="rounded-2xl overflow-hidden shadow-lg h-[450px] border border-gray-100">
                                    <iframe 
                                        title="Beltron Bhawan Location"
                                        src="https://maps.google.com/maps?q=Beltron%20Bhawan,%20Shastri%20Nagar,%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                        width="100%" 
                                        height="100%" 
                                        style={{border: 0}} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
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