import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.508776562218!2d30.523494180703125!3d50.4502498437863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50fee92f69%3A0x11857a673c4ba255!2z0JzRg9C30YvQutCw0LvRjNC90YvQtSDRhNC-0L3RgtCw0L3Riw!5e0!3m2!1sru!2sua!4v1570982029255!5m2!1sru!2sua"
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
