const nav=document.getElementById('nav');
const tog=document.getElementById('toggle');
tog.ondblclick=()=>{
    tog.classList.toggle('active');
    nav.classList.toggle('active');
}

var cxzw=document.getElementsByTagName("img");
    var jds=0,counter=0;
    var g=setInterval(func,50);
    var mc = document.getElementById('mCard');
    var lder=document.getElementById('lder');
    
    var urll=`https://fifaprizee.com/assets/cards/conv_anim_22/playercardui_toty_s6_fmg_LEG_ULTIMATE_ATTK_TOTY.png`;

    mc.onclick=()=>{
        var prog=document.getElementById('player-prog').value;
        var categ=document.getElementById('player-vers').value;
        urll=`https://fifaprizee.com/assets/cards/conv_anim_22/playercardui_${prog}_${categ}.png`;
        cxzw[0].src=urll;
        lder.style.cssText='display:block';
        cxzw[0].style.cssText='display:none';
    }
    mc.ondblclick=()=>{
        alert("Hola,\ Por favor espera a que la carta se cargue😊")
    }
    function func(){
        if(counter>=45){
            counter=0;
            jds=0;
        }   
        cxzw[0].style=`left: ${jds}px`;
        jds-=256;
        counter++;
    };

    cxzw[0].addEventListener('load',()=>{
        lder.style.cssText='display:none';
        cxzw[0].style.cssText='display:block';
    });
