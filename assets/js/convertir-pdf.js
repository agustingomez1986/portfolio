document.addEventListener("DOMContentLoaded", ()=>{
    const $boton = document.querySelector("#banner__redes__curriculo");
    $boton.addEventListener("click", ()=>{
        let alturaPagina = (document.getElementById("cuerpo").clientHeight) * 0.92;
        console.log(alturaPagina);
        const $elementoParaConvertir = document.body;
        html2pdf()
            .set({
                filename: 'Agustin_Gomez_Portfolio.pdf',
                image: {type: 'jpeg', quality: 0.95},
                html2canvas: {scale: 1.25, letterRendering: true},
                jsPDF: {unit: 'px', format: [1400, alturaPagina], orientation: 'portrait'}
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err=>console.log(err));
    });
});