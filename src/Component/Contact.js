import React from 'react';
import { Document, Page, Text } from 'react-pdf';

function Contact() {
  const pdfFile = '/Resume_AkshatPandey.pdf'; 

  return (
    <div>
    <h1>Resume</h1>
    <iframe
      title="Resume"
      src="/Resume_AkshatPandey.pdf" 
      width="100%"
      height="1200px"
    />
  </div>
  );
}

export default Contact;
