// Danh sách âm thanh
const soundFiles = {
    "C": "sounds/C.mp3",
    "C#": "sounds/Csharp.mp3",
    "D": "sounds/D.mp3",
    "D#": "sounds/Dsharp.mp3",
    "E": "sounds/E.mp3",
    "F": "sounds/F.mp3",
    "F#": "sounds/Fsharp.mp3",
    "G": "sounds/G.mp3",
    "G#": "sounds/Gsharp.mp3",
    "A": "sounds/A.mp3",
    "A#": "sounds/Asharp.mp3",
    "B": "sounds/B.mp3",
    "C2": "sounds/C2.mp3"
};

function playSound(note) {
    const audio = new Audio(soundFiles[note]);
    audio.play();
    document.getElementById("notas").innerText = Đang phát: ${note};
    showNoteIcon();
}

function showNoteIcon() {
    const icon = document.getElementById("icon-note");
    icon.style.display = "block";
    icon.style.left = Math.random() * window.innerWidth + "px";
    icon.style.top = Math.random() * window.innerHeight + "px";

    setTimeout(() => {
        icon.style.display = "none";
    }, 500);
}

// Gán sự kiện click cho các phím
document.querySelectorAll(".tecla, .preta").forEach(tecla => {
    tecla.addEventListener("click", function() {
        const note = this.getAttribute("data-note");
        if (note) {
            playSound(note);
        }
    });
});