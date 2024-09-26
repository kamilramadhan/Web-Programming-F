let nama = document.getElementById('nama');
let depan1 = document.getElementById('depan1');
let depan2 = document.getElementById('depan2');
let kebun3 = document.getElementById('kebun3');
let belakang4 = document.getElementById('belakang4');
let rektorat5 = document.getElementById('rektorat5');
let awan6 = document.getElementById('awan6');
let awan7 = document.getElementById('awan7');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let scaleValue = 1 + value * 0.0002; // Adjust the factor to your needs

    // Apply the scale transform to depan1
    depan1.style.transform = `scale(${scaleValue})`;
    depan2.style.transform = `scale(${scaleValue})`;
    kebun3.style.transform = `scale(${scaleValue})`;
    rektorat5.style.transform = `scale(${scaleValue})`;
    belakang4.style.transform = `scale(${scaleValue})`;
    nama.style.marginTop = value * 2.5 + 'px';
    belakang4.style.left = value * 0.1 + 'px';
    kebun3.style.left = value * -0.1 + 'px';
    awan7.style.left = value * -1 + 'px';
    awan6.style.left = value * 1 + 'px';
    depan2.style.left = value * 0.1 + 'px';
});
