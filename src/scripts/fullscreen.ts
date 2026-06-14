export function initFullscreen() {
    const greenBtn = document.querySelector(".green")!;    
    
    greenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
};