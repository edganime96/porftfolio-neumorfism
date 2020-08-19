const $tw = document.getElementById('tw');
$tw.addEventListener('animationend', (event) => {
    if(event.animationName === 'tw')
    {
        $tw.style.animationName = 'tw tw2';
        $tw.style.animationDuration = '10s';
    }
});

document.getElementById('llamame').addEventListener('onclick', darNumero);

function darNumero(){
    
    alert("Llamame");
    console.log(darNumero);
    
}

