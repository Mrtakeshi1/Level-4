import { Routes, Route, useParams } from "react-router-dom";

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, deleniti! Qui voluptatem maiores quos magni facilis dicta mollitia neque dolorum itaque, optio fuga, cupiditate omnis. Eius provident odit consequatur esse.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quo doloribus omnis quae sint est similique corrupti fugit maxime tempore sit, eligendi esse sed consequuntur impedit. Natus totam eligendi ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur odit nihil culpa veritatis mollitia eligendi cupiditate qui dolorum nisi odio, minus debitis accusantium sapiente id aperiam quas, nulla harum.</p>
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
