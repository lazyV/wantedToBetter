const drawCvs = document.querySelector('#drawCanvas');
const renderCvs = document.querySelector('#renderCanvas');

const chars = document.querySelectorAll('.input-cont>input');

const choose = document.querySelector('#choose');

const ctx = drawCvs.getContext('2d');
const ctx1 = renderCvs.getContext('2d');

const img = new Image;

const string = '#&@%$w*+o?!;^,. ';
let stringArr = string.split('');

let width = 1000;
let height = 600;

chars.forEach((char, index) => {
    char.placeholder = stringArr[index];
    char.oninput = () => {
        let val = char.value;
        switch (val.length) {
            case 0:
                stringArr[index] = string[index];
                char.value = '';
                break;
            case 1:
                stringArr[index] = val;
                char.placeholder = val;
                break;
            default:
                alert('只能输入长度为一的字符');
                char.value = '';
                char.placeholder = string[index];
        }
        // 渲染()
        padText();
    }
})

// 选择图片 
choose.onchange = () => {
    renderImage()
}

// 渲染图片在canvas上
const renderImage = () => {
    if (!choose.files[0]) {
        return ;
    }
    const reader = new FileReader();
    reader.readAsDataURL(choose.files[0])
    reader.onload = (e) => {
        img.src = e.target.result;
        img.onload = () => {
            let w_h = img.width / img.height;
            if (w_h > 1) {
                drawCvs.width = renderCvs.width = width;
                drawCvs.height = renderCvs.height = width/w_h;
            } else {
                drawCvs.width = renderCvs.width = height*w_h;
                drawCvs.height = renderCvs.height = height;
            }
            padText();
        }
    }
}

const padText = () => {
    ctx.clearRect(0, 0, drawCvs.width, drawCvs.height);
    ctx1.clearRect(0, 0, drawCvs.width, drawCvs.height);
    ctx1.drawImage(img, 0, 0, drawCvs.width, drawCvs.height);
    const imgData = ctx1.getImageData(0, 0, drawCvs.width, drawCvs.height).data;
    let res;
    for (let i = 0; i < drawCvs.width; i += 6) {
        for (let j = 0; j < drawCvs.height; j += 4) {
            let index = (j * drawCvs.width + i)*4;
            let r = imgData[index];
            let g = imgData[index + 1];
            let b = imgData[index + 2];
            res = stringArr[~~((r*0.299 + g*0.587 + b*0.114)/16)];
            ctx.fillText(res, i, j+4);
        }
    }
}