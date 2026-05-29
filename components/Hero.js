function Hero() {
    try {
        return (
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" data-name="Hero" data-file="components/Hero.js">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="hero.jpeg"
                        alt="Bihar Government Secretariat"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 via-[var(--primary)]/70 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                            <span className="text-xs font-medium text-white tracking-wider uppercase">Pioneering Digital Governance</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-shadow-sm">
                            Empowering Bihar Through <span className="text-[var(--accent)]">Digital Innovation</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-blue-50 mb-10 max-w-2xl font-light leading-relaxed">
                            Driving e-Governance initiatives, building robust IT infrastructure, and delivering citizen-centric digital services to transform Bihar into a digitally empowered society.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => window.location.href='services.html'} className="btn-primary flex items-center shadow-lg shadow-blue-900/20">
                                Explore Services
                                <div className="icon-arrow-right ml-2 text-xl"></div>
                            </button>
                            <button onClick={() => window.location.href='tenders.html'} className="btn-outline border-white text-white hover:bg-white hover:text-[var(--primary)]">
                                View Tenders
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Stats/Links Strip */}
                <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 hidden md:block">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="icon-users text-2xl text-[var(--accent)]"></div>
                                <div>
                                    <div className="font-bold text-xl">10M+</div>
                                    <div className="text-xs uppercase tracking-wide opacity-80">Citizens Served</div>
                                </div>
                            </div>
                            <div className="w-px h-12 bg-white/20"></div>
                            <div className="flex items-center space-x-3 text-white">
                                <div className="icon-network text-2xl text-[var(--accent)]"></div>
                                <div>
                                    <div className="font-bold text-xl">8000+</div>
                                    <div className="text-xs uppercase tracking-wide opacity-80">Panchayats Connected</div>
                                </div>
                            </div>
                            <div className="w-px h-12 bg-white/20"></div>
                            <div className="flex items-center space-x-3 text-white">
                                <div className="icon-laptop text-2xl text-[var(--accent)]"></div>
                                <div>
                                    <div className="font-bold text-xl">150+</div>
                                    <div className="text-xs uppercase tracking-wide opacity-80">e-Gov Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}