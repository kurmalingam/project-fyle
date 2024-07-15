function resethigh() {
    document.getElementById('im2').classList.remove('high');
    document.getElementById('im3').classList.remove('high');
    document.getElementById('im5').classList.remove('high');
}

function image2() {
    resethigh();
    document.getElementById('im2').classList.add('high');
}

function image3() {
    resethigh();
    document.getElementById('im3').classList.add('high');
}

function image5() {
    resethigh();
    document.getElementById('im5').classList.add('high');
}

function image6() {
    document.getElementById('im6').src = 'image5.png';
}

function image7() {
    document.getElementById('im6').src = 'image6.png';
}

function image8() {
    document.getElementById('im6').src = 'image3.png';
}
function form1()
{
    document.querySelector('form').style.display="none";
}
function form2()
{
    document.querySelector('form').style.display="block";
}
