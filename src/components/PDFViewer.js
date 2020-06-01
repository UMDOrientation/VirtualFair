import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/entry.webpack';
import { Card } from '@material-ui/core';
import './components.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ document }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div>
            <Card className="card">
            <Document
                file={document}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            {numPages > 1 &&
                <div>
                    <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </p>
                    <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    >
                    Previous
                    </button>
                    <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    >
                    Next
                    </button>
                </div>
            }
            </Card>
        </div>
    );
}

export default PDFViewer;