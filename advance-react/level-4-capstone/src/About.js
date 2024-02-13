import { Routes, Route, useParams } from "react-router-dom";

function About() {
    return (
        <div className="about-container">
            <h1 className="header-title">About Us</h1>
            <section className="about-app">
                <h2>About the App</h2>
                <p>This app is designed to help tourists find attractions and navigate to their destinations easily. With Losturistas, travelers can explore various tourist spots, view detailed information about each attraction, and get directions to their desired destinations.</p>
            </section>
            <section className="about-company">
                <h2>About Our Company</h2>
                <p>We are dedicated to providing the best travel experiences and making tourism more accessible to everyone. Our team of passionate developers and travel enthusiasts work tirelessly to improve Losturistas and ensure that users have a seamless and enjoyable experience.</p>
            </section>
            <section className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
                <p>Address: 123 Main Street, City, Country</p>
            </section>
            <section className="additional-info">
                <h2>Additional Information</h2>
                <p>Feel free to reach out to us if you have any questions or feedback about Losturistas. We value your input and are always looking for ways to improve our app to better serve our users.</p>
            </section>
        </div>
    );
}

function Invoice() {
    let { invoiceId } = useParams();
    return <h1>Invoice {invoiceId}</h1>;
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/invoices/:invoiceId" element={<Invoice />} />
        </Routes>
    );
}

export default App;
