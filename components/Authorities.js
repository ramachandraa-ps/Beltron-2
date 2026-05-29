function Authorities() {
    try {
        const leaders = [
            {
                name: "Samrat Choudhary",
                role: "Hon’ble Chief Minister, Bihar",
                image: "https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/bba8ace2-5e50-4083-b4c0-4f6f822467de.jpeg",
                color: "border-amber-500"
            },
            {
                name: "Nitish Mishra",
                role: "Hon'ble I.T Minister, Bihar",
                image: "https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/944bc19f-e8d3-4036-ac11-ef097edf5ca4.jpeg",
                color: "border-[var(--primary)]"
            },
            {
                name: "Kaushal Kishore, I.A.S",
                role: "Managing Director, B.S.E.D.C - BELTRON, Bihar",
                image: "https://app.trickle.so/storage/public/images/usr_143a0d6be0000001/c6ae0284-072b-4548-b876-228f8c3957ea.jpeg",
                color: "border-[var(--secondary)]"
            }
        ];

        return (
            <section className="py-16 bg-gray-50 border-b border-gray-100" data-name="Authorities" data-file="components/Authorities.js">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Esteemed Heads and Authorities</h2>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        {leaders.map((leader, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className={`relative w-48 h-48 rounded-full p-2 border-4 ${leader.color} mb-6 bg-white shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img 
                                            src={leader.image} 
                                            alt={leader.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{leader.name}</h3>
                                <p className="text-sm text-gray-600 text-center font-medium px-4">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Authorities component error:', error);
        return null;
    }
}