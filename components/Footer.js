function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-white pt-16 pb-8" data-name="Footer" data-file="components/Footer.js">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Branding */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--primary)] font-bold text-xl font-serif">
                                    B
                                </div>
                                <span className="font-bold text-xl tracking-wider">BSEDC</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Bihar State Electronics Development Corporation Ltd. is a Government of Bihar undertaking acting as the nodal agency for e-Governance and IT initiatives.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 font-serif border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                            <ul className="space-y-3">
                                {['About Beltron', 'Board of Directors', 'Right to Information (RTI)', 'Career / Recruitment', 'Contact Us'].map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                            <div className="icon-chevron-right mr-2 text-xs text-[var(--secondary)]"></div>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important Portals */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 font-serif border-b border-gray-700 pb-2 inline-block">Govt Portals</h4>
                            <ul className="space-y-3">
                                {['Bihar Government Web Directory', 'National Portal of India', 'Digital India', 'MeitY', 'MyGov'].map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                            <div className="icon-external-link mr-2 text-xs text-[var(--secondary)]"></div>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 font-serif border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-start">
                                    <div className="icon-map-pin text-[var(--secondary)] mt-1 mr-3 text-lg shrink-0"></div>
                                    <span>Beltron Bhawan, Shastri Nagar,<br/>Patna - 800 023, Bihar, India</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="icon-phone text-[var(--secondary)] mt-1 mr-3 text-lg shrink-0"></div>
                                    <span>
                                        Call Center No. :<br/>
                                        0612-2281814, 0612-2281815
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="icon-mail text-[var(--secondary)] mr-3 text-lg shrink-0"></div>
                                    <span>info@beltron.in</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            &copy; 2026 Bihar State Electronics Development Corporation Ltd. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}