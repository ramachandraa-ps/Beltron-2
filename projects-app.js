function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white" data-name="app" data-file="projects-app.js">
            <Header />
            <main className="flex-grow">
                <PageBanner title="Our Projects" breadcrumbs={['Projects']} />
                <ProjectsList />
            </main>
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);