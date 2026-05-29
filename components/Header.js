function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 40);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const navLinks = [
            { name: 'Home', href: 'index.html' },
            { name: 'About Us', href: 'about.html' },
            { name: 'Services', href: 'services.html' },
            { name: 'Projects', href: 'projects.html' },
            { name: 'News & Events', href: 'news.html' },
            { name: 'Letters & Circulars', href: 'circulars.html' },
            { name: 'Tenders', href: 'tenders.html' },
            { name: 'Careers', href: 'careers.html' },
            { name: 'Contact', href: 'contact.html' },
        ];

        return (
            <header className="fixed w-full z-50 transition-all duration-300" data-name="Header" data-file="components/Header.js">
                {/* Top Bar - Govt of Bihar */}
                <div className={`bg-[var(--primary)] text-white text-xs py-1.5 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <span className="flex items-center"><div className="icon-building-2 mr-1"></div> Government of Bihar</span>
                            <span className="hidden md:flex items-center text-amber-300"><div className="icon-phone mr-1"></div> Call Center No. : 0612-2281814, 0612-2281815</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-2 border-r border-blue-800 pr-4">
                                <button className="hover:text-amber-300 transition-colors">A-</button>
                                <button className="hover:text-amber-300 transition-colors">A</button>
                                <button className="hover:text-amber-300 transition-colors">A+</button>
                            </div>
                            <button className="hover:text-amber-300 transition-colors">English</button>
                            <button className="hover:text-amber-300 transition-colors">हिन्दी</button>
                            <button className="hover:text-amber-300 transition-colors">Bhojpuri</button>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-md py-4'}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center">
                            {/* Logo Area */}
                            <a href="index.html" className="flex items-center gap-3 group cursor-pointer" aria-label="Bihar State Electronics Development Corporation Ltd.">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                                    <img
                                        src="https://hercules-cdn.com/file_xiij45xLQaIy98McRcwUAHaj"
                                        alt="BELTRON Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="hidden sm:block">
                                    <div className="font-bold text-[var(--primary)] text-xl leading-none tracking-tight">BELTRON</div>
                                    <div className="text-[11px] text-gray-600 leading-tight mt-1 w-56">Bihar State Electronics Development Corporation Ltd.</div>
                                </div>
                            </a>

                            {/* Desktop Nav */}
                            <nav className="hidden lg:flex space-x-8 items-center">
                                {navLinks.map((link) => (
                                    <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-700 hover:text-[var(--primary-light)] transition-colors relative group">
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-light)] transition-all group-hover:w-full"></span>
                                    </a>
                                ))}
                                <button className="icon-search text-gray-600 hover:text-[var(--primary)] text-lg"></button>
                            </nav>

                            {/* Mobile Menu Button */}
                            <button className="lg:hidden text-gray-700 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white shadow-xl absolute w-full border-t border-gray-100">
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[var(--primary)] rounded-md">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}
