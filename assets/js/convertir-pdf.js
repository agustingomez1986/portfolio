const curriculoPDF = document.querySelector("#banner__redes__curriculo");
curriculoPDF.addEventListener("click", async function(){
    var downloading = document.body;
    var doc = new jsPDF('p', 'pt', [1000, 3500]);
    await html2canvas(downloading, {
        allowTaint: true,
        useCORS: true,
    }).then((canvas)=>{
        doc.addImage(canvas.toDataURL("image/jpg"), 'JPG', 0, 0, 1000, 3500);
    });
    doc.save("Agustin_Gomez_Portfolio.pdf");
});