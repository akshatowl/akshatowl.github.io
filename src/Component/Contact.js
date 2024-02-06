import React from 'react';
import { Document, Page, Text } from 'react-pdf';

function Contact() {
  const pdfFile = '/Resume.pdf'; 

  return (
    <div>
    <h1>Resume</h1>
    <iframe
      title="Resume"
      src="/Resume.pdf" 
      width="100%"
      height="1200px"
    />
  </div>
  );
}

export default Contact;
