import eImg from '/src/img/jointheclub.png';

export default function secret() {
    if (!document.querySelector('body > #secret-overlay')) {
        let div = document.createElement('div');
        div.id = "secret-overlay";
        
        let img = document.createElement('img');
        img.src = eImg;
        img.alt = "";

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