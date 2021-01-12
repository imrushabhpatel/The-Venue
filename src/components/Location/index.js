import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.657915630635!2d-74.07664568433857!3d40.813510439335566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f861ad5902bf%3A0x8184280d31051734!2sMetLife%20Stadium!5e0!3m2!1sen!2sus!4v1610424783609!5m2!1sen!2sus" 
                title="MetLife Stadium"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;