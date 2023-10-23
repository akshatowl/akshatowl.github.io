import React from 'react';
import { Document, Page, Text } from 'react-pdf';

function Contact() {
  const pdfFile = '/Akshat_Pandey.pdf'; // Replace with the actual path to your PDF file

  return (
    <div>
    <h1>Resume</h1>
    <iframe
      title="Resume"
      src="/Akshat_Pandey.pdf" // Update the path to your PDF file
      width="100%"
      height="1200px"
    />
  </div>
  );
}

export default Contact;
