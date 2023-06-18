AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAtéEvento = timeStampDoEvento - timeStampAgora;

    const diasEmMs = 1000*60*60*24
    const horaEmMs = 1000*60*60
    const minutoEmMs = 1000*60
    const seguntosEmMs = 1000

    const diasAtéOEvento = Math.floor(distanciaAtéEvento/diasEmMs) // <-- Para quantidade de dias; 
    const horasAtéEvento = Math.floor(distanciaAtéEvento%diasEmMs/horaEmMs) //<-- Para quantidade de horas;
    const minutosAtéEvento = Math.floor(distanciaAtéEvento%horaEmMs/minutoEmMs)
    const segundosAtéEvento = Math.floor(distanciaAtéEvento%minutoEmMs/seguntosEmMs)

    document.getElementById('contador').innerHTML = `${diasAtéOEvento}d ${horasAtéEvento}h ${minutosAtéEvento}m ${segundosAtéEvento}s`

    if(distanciaAtéEvento<0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = "Evento expirado"
    }
}, 1000)
