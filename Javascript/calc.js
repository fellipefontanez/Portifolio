let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let a, b;
console.log(display);
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "CE":
                display.innerText = '';
                break;
            case "←":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Erro!';
                }
                    
                break;
            default:
                display.innerText += e.target.innerHTML;
                break;
        }
    })
})
document.addEventListener("keydown", (e) => {
    // if(e.key == buttons.map() || e.key == 'r' || e.key == "." || e.key == "Backspace"){
    switch (e.key) {
        case "r":
            display.innerText = '';
            break;
        case "Delete":
                display.innerText = '';
                break;
        case ",":
            display.innerText += '.';
            break;
        case "Backspace":
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        case 'Enter':
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Erro!';
            }
                
            break;
        default:
            display.innerText += e.key;
            break;
            console.log(e.key);
        }
    // } else {
    //     alert("Valor inválido");
    // }
}
)

//Relógio
// let relogio = document.getElementById('relogio');
// console.log(relogio);
const horas = document.querySelector('.ponteiroH');
const minutos = document.querySelector('.ponteiroM');
const segundos = document.querySelector('.ponteiroS');

function agora(){
    setTimeout(function () {
        var today = new Date();
        var hrs = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        var hrs = ("0" + hrs).slice(-2);
        var min = ("0" + min).slice(-2);
        var sec = ("0" + sec).slice(-2);
        var time = hrs + ":" + min + ":" + sec;
        const secDegrees = ((sec / 60) * 360) + 90;
        document.getElementById('segundos').style.transform = `rotate(${secDegrees}deg)`;
        const minsDegrees = ((min / 60) * 360) + ((sec/60)*6) + 90;
        document.getElementById('minutos').style.transform = `rotate(${minsDegrees}deg)`;
        const hourDegrees = ((hrs / 12) * 360) + ((min/60)*30) + 90;    
        document.getElementById('hora').style.transform = `rotate(${hourDegrees}deg)`;
        document.getElementById("relogio").innerText = time;
        agora();}, 1000);
}
agora();

const relogio = document.getElementById('relogio');
const checkbox = document.getElementById("mode");
var botoes;
window.onload = () => {
    botoes = document.querySelectorAll('.b');
}
console.log(b);
let toggle_mode = 0;
function toggleMode() {
    if (toggle_mode == 0) {
        document.body.style.backgroundColor = "black";
        try{
            botoes.forEach(bot => {
                bot.style.backgroundColor = '#F6F7E3';
            })
        }catch{console.log('erro')}
        
        try {
            document.getElementById('relogio').style.color = "white";
        }catch { }
        
        toggle_mode++;
    } else if (toggle_mode == 1) {
        document.body.style.backgroundColor = "white";
        try {
            document.getElementById('relogio').style.color = "black";
        } catch {}
        toggle_mode--;
    }
    console.log(toggle_mode);
}