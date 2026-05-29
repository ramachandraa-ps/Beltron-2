function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="tenders-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Active Tenders" breadcrumbs={['Tenders']} />
                <TendersList />
            </main>
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);