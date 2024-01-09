/**
 * Details Accordions
 * - Automatically converts <details> HTML elements to have smoother transitions
 * - WARNING: version 1.0.0 only works with Chromium based browsers
 *
 * Version: 1.0.0
 * Author: Dan Steinmiller, https://dstein.dev
 * License: MIT License
 */

const detailsAcc = ( function() {
    "use strict";

    const details = document.querySelectorAll('details');

    details.forEach( (e) => {
        const detailsSummary = e.querySelector('summary');
        const detailsContent = e.querySelector('.content');

        let getCompSummaryStyles = window.getComputedStyle(detailsSummary);
        let summaryMarginBtmOffset = parseInt(getCompSummaryStyles.marginBottom);
        let summaryMarginTopOffset = parseInt(getCompSummaryStyles.marginTop);
        let summaryMarginOutput = summaryMarginBtmOffset + summaryMarginTopOffset;

        let summaryHeight = ( detailsSummary.offsetHeight + summaryMarginOutput );
        let contentHeight = detailsContent.offsetHeight;
        let fullHeight = summaryHeight + contentHeight;

        e.style.height = `${summaryHeight}px`;

        e.addEventListener('toggle', (event) => {

            if ( e.open ) {
                e.style.height = `${fullHeight}px`;
            } else {
                e.style.height = `${summaryHeight}px`;
            }
        });
    });

})();