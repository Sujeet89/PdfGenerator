import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Component from './Component';

const Index = () => {
  return (
    <div>
      <PDFViewer width="100%" height="600px">
        <Component />
      </PDFViewer>
      <div>
        <PDFDownloadLink document={<Component />} fileName="my_document.pdf">
          {({ loading }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default Index