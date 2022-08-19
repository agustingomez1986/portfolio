document.addEventListener("DOMContentLoaded", ()=>{
    const $boton = document.querySelector("#banner__redes__curriculo");
    $boton.addEventListener("click", ()=>{
        const $elementoParaConvertir = document.body;
        html2pdf()
            .set({
                filename: 'Agustin_Gomez_Portfolio.pdf',
                image: {type: 'jpeg', quality: 1},
                html2canvas: {scale: 1.4, letterRendering: true},
                jsPDF: {unit: 'px', format: [1200, 4790], orientation: 'portrait'}
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err=>console.log(err));
    });
});