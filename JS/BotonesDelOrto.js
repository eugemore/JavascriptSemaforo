//window.onload = start;
document.addEventListener('DOMContentLoaded',start);

var estado = 0;
function cambiarColorLuzSemaforo(id, prender)
            {
                var color = 'grey';
                if(prender == true) color = id;
                document.querySelector('#'+id).style.backgroundColor = color; 
            }
function onClickBotonCambiar ()
{
    switch(estado)
    {
        case 0:
            red = true;
            yellow = !true;
            green = !true;
            break;
        case 1:
            red = true;
            yellow = true;
            green = !true;

            break;
        case 2:
            red = !true;
            yellow = !true;
            green = true;
            break;
        case 3:
            red = !true;
            yellow = true;
            green = !true;
            break;
        default:
        break;
    }
    estado++;
    if(estado>3) estado = 0;
    cambiarColorLuzSemaforo('red', red);
    cambiarColorLuzSemaforo('yellow', yellow);
    cambiarColorLuzSemaforo('green', green);
}
var modoAutomatico = false
var reIntervalAuto;
function textoBotonAuto(texto)
{
    document.querySelector('#boton-auto').innerHTML = texto;
}    
function ocultarBotonManual(ocultar)
{
    document.querySelector('#boton-cambiar').style.display= ocultar? 'none':'block';
    textoBotonAuto(ocultar? 'MODO MANUAL':'MODO AUTOMATICO');
} 
function onCLickBotonAuto()
{
    modoAutomatico = !modoAutomatico;
    if(modoAutomatico)
    {
        refIntervalAuto = setInterval(onClickBotonCambiar, 1000);
        ocultarBotonManual(true);
    }
    else
    {
        clearInterval(refIntervalAuto);
        ocultarBotonManual(false);
    
    }

}
function start()
{
    textoBotonAuto('MODO AUTOMATICO')
    red = !true;
    yellow = !true;
    green = !true;
}
