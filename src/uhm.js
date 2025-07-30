import eImg from '/src/img/jointheclub.png';

export default function secret() {
    console.log("Secret function triggered!");
    if (!document.querySelector('body > #secret-overlay')) {
        console.log("Creating secret overlay...");
        let div = document.createElement('div');
        div.id = "secret-overlay";
        div.style.position = "fixed";
        div.style.top = "0";
        div.style.left = "0";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.zIndex = "1000";
        div.style.pointerEvents = "none";
        
        let elm = document.createElement('img');
        elm.src = eImg;
        elm.alt = "";
        elm.style.display = "block";
        elm.style.margin = "auto auto";
        elm.style.height = "90%";
        elm.style.width = "auto";
        elm.style.opacity = "0";
        elm.style.transition = "opacity 0.3s ease-in-out";

        div.appendChild(elm);
        document.body.appendChild(div);
        let t = setTimeout(() => {
          elm.style.opacity = "1";
          clearTimeout(t);
          let t2 = setTimeout(() => {
            elm.style.opacity = "0";
            clearTimeout(t2);
            let t3 = setTimeout(() => {
                div.remove();
                clearTimeout(t3);
            }, 300);
          }, 1300);
        }, 100);
    }
}