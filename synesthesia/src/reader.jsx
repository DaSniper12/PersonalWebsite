import React, { useEffect } from 'react';
import ePub from 'epubjs';

const EbookReader = ({  }) => {
    useEffect(() => {
        const renderEpub = async () => {
            const book = ePub("https://react-reader.metabits.no/files/alice.epub");
            const rendition = book.renderTo('ebook-container', { method: 'continuos', flow: 'scrolled-doc', width: '95vw', height: '95vh' });
            rendition.display();
        };

        renderEpub();

        return () => {
            // Clean up code if needed
        };
    }, []);

    return (
        <div width="100%" height="100%">
          <div id="ebook-container"></div>
        </div>
    );
};

export default EbookReader;
