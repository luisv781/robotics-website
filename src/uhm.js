import eImg from '/src/img/jointheclub.png';

export default function secret() {
    if (!document.querySelector('body > #secret-overlay')) {
        let div = document.createElement('div');
        div.id = "secret-overlay";
        div.style.position = "fixed";
        div.style.display = "flex";
        div.style.placeContent = "center";
        div.style.top = "0";
        div.style.left = "0";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.zIndex = "1000";
        div.style.pointerEvents = "none";
        
        let img = document.createElement('img');
        img.src = eImg;
        img.alt = "";
        img.style.display = "block";
        img.style.margin = "auto auto";
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        img.style.filter = "drop-shadow(0 0 2em #00000080)";
        img.style.opacity = "0";
        img.style.transition = "opacity 0.3s ease-in-out";

        div.appendChild(img);
        document.body.appendChild(div);
        setTimeout(() => {
          img.style.opacity = "1";
          setTimeout(() => {
            img.style.opacity = "0";
            setTimeout(() => {
                div.remove();
            }, 300);
          }, 1300);
        }, 100);
    }
}