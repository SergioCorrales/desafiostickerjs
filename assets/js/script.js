function verificar() {
    const stickerLink = Number(document.getElementById("sticker1").value);
    const stickerZelda = Number(document.getElementById("sticker2").value);
    const stickerTrifuerza = Number(document.getElementById("sticker3").value);

    const totalSticker = stickerLink + stickerZelda + stickerTrifuerza;
    const resultadoSticker = document.getElementById("resultado");

    if (totalSticker <= 10) {
    resultadoSticker.textContent = "Llevas " + totalSticker + " stickers en total.";
    } else {
    resultadoSticker.textContent = "Llevas demasiados stickers.";
    }
}