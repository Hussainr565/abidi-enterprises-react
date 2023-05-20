import React from 'react';
import './FancySection.css'; 

const workspecification = () => {
    return (
        <section className="fancy-section">
            <div className="container">
                <h2 className="section-title">Sample Work Specification for Grey Structure</h2>
                <p className="section-description">Dive into our Sample Work Specification for Grey Structure, showcasing Abidi Enterprises' commitment to quality, efficiency, and durability in construction.</p>
                <div className="button-container">
                    <a href="assets/pdf/Work%20Specifications%20of%20Grey%20Structure.pdf" download="Work Specifications of Grey Structure.pdf" className="download-button">Download PDF</a>
                </div>
            </div>
        </section>
    );
}

export default workspecification;
