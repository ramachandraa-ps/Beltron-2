function PageBanner({ title, breadcrumbs }) {
    try {
        return (
            <div className="relative pt-32 pb-16 bg-[var(--primary)] overflow-hidden" data-name="PageBanner" data-file="components/PageBanner.js">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/a664dff6-26d3-4809-99dc-d679467ea7ed.png" 
                        alt="Internal Page Banner" 
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]/80 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                    <div className="flex items-center text-blue-100 text-sm">
                        <a href="index.html" className="hover:text-white transition-colors">Home</a>
                        {breadcrumbs && breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <div className="icon-chevron-right mx-2 text-xs"></div>
                                <span className={index === breadcrumbs.length - 1 ? "text-white font-medium" : "hover:text-white transition-colors cursor-pointer"}>
                                    {crumb}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('PageBanner component error:', error);
        return null;
    }
}