function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="services-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Our Services" breadcrumbs={['Services']} />
                <Services />
            </main>
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);