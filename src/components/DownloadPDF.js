import React from 'react'
import jsPDF from 'jspdf'
export default function DownloadPDF(props) {
    function generatePDF() {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false')

        doc.text(20, 20, 'This is the default font.')

        doc.setFont('courier', "bolditalic")
        doc.text(20, 30, props.content)

        doc.setFont('times')
        doc.text(20, 40, 'This is times italic.')

        doc.setFont('helvetica')
        doc.text(20, 50, 'This is helvetica bold.')

        doc.setFont('courier')
        doc.text(20, 60, 'This is courier bolditalic.')

        doc.save("Test.pdf");
    }
    return (
        <button
            onClick={generatePDF}
            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            DownloadPDF
        </button>
    )
}
