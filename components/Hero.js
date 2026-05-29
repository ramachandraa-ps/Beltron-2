function Hero() {
    try {
        const slides = [
            {
                src: "hero.webp",
                alt: "Bihar Government Secretariat",
                position: "center 46%"
            },
            {
                src: "Bappu%20Towers.jpg",
                alt: "BELTRON technology building",
                position: "center 46%"
            }
        ];
        const [activeSlide, setActiveSlide] = React.useState(0);
        const goToPreviousSlide = () => {
            setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
        };
        const goToNextSlide = () => {
            setActiveSlide((current) => (current + 1) % slides.length);
        };

        React.useEffect(() => {
            const slideTimer = window.setInterval(() => {
                setActiveSlide((current) => (current + 1) % slides.length);
            }, 5000);

            return () => window.clearInterval(slideTimer);
        }, []);

        return (
            <section className="relative min-h-[620px] pt-32 pb-20 lg:min-h-[680px] lg:pt-48 lg:pb-32 overflow-hidden" data-name="Hero" data-file="components/Hero.js">
                {/* Background Image Carousel & Overlay */}
                <div className="absolute inset-0 z-0">
                    {slides.map((slide, index) => (
                        <img
                            key={slide.src}
                            src={slide.src}
                            alt={slide.alt}
                            style={{ objectPosition: slide.position }}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 via-[var(--primary)]/55 to-black/10"></div>
                    <div className="absolute inset-0 bg-black/15"></div>
                </div>

                <button
                    onClick={goToPreviousSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 border border-white/30 text-white backdrop-blur-md hover:bg-white/25 transition-colors hidden md:flex items-center justify-center"
                    aria-label="Previous hero image"
                >
                    <div className="icon-chevron-left text-2xl"></div>
                </button>

                <button
                    onClick={goToNextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 border border-white/30 text-white backdrop-blur-md hover:bg-white/25 transition-colors hidden md:flex items-center justify-center"
                    aria-label="Next hero image"
                >
                    <div className="icon-chevron-right text-2xl"></div>
                </button>

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

                        <div className="flex items-center space-x-2 mt-8" aria-label="Hero image slides">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.src}
                                    onClick={() => setActiveSlide(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-[var(--accent)]' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
                                    aria-label={`Show slide ${index + 1}`}
                                    aria-current={index === activeSlide ? 'true' : 'false'}
                                ></button>
                            ))}
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
