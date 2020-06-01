import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/entry.webpack';
import { Card, Button, Divider } from '@material-ui/core';
import './components.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import GetAppIcon from '@material-ui/icons/GetApp';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function RawPDF({ document }) {
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
        <>
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
                    <Button
                    variant="outlined"
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    >
                    Previous
                    </Button>
                    <Button
                    variant="outlined"
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    >
                    Next
                    </Button>
                    <Divider style={{ margin: "0.5rem 0" }}/>
                </div>
            }
            
        </>
    );
}

function PDFViewer ({ document }){
    return (
        <div>
            <Card className="card">
                <RawPDF document={document}/>
                <Button variant="contained" href={document} target="_blank" startIcon={<GetAppIcon/>}>Download PDF</Button>
            </Card>
        </div>
    );
}

export default PDFViewer;