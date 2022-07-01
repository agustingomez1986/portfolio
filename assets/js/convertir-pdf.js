/*function convertirHTMLaPDF(){
    const { jsPDF } = window.jspdf;
    var pdf = new jsPDF('l', 'mm', [1200, 1210]);
    var pdfjs = document.querySelector('#previewHTMLContent');
    pdf.html(pdfjs, {
        callback: function(pdf){
            pdf.save("output.pdf");
        },
        x:10,
        y:10
    });
}*/

document.addEventListener("DOMContentLoaded", () => {
    const $curriculo = document.querySelector("#banner__redes__curriculo");
    $curriculo.addEventListener("click", () => {
        const $elementoParaConvertir = document.body;
        html2pdf()
        .set({
            margin: 1,
            filename: 'Agustin_Gomez_Portfolio.pdf',
            image: {
                type: 'jpeg',
                quality: 1
            },
            html2canvas: {
                scale: 1,
                letterRendering: true,
            },
            jdPDF: {
                unit: "in",
                format: "a4",
                orientation: 'portrait'
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
    });
});