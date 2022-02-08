//addeventlistener:adicione um observador de eventos
//monitore o evento keyup(quando aperte e solta a tecla)e acione a funçãp event
document.body.addEventListener('keyup', (event)=>{
     playSound(event.code.toLowerCase());
     console.log(event.code);
     //code:codigo da tecla qque foi precionada(evento)
     //event.code: vaI MARCAR TUDO QUE FFOI DIGITADO  
     //toLowerCase:  vai transformar o codigo da tecla(code) em letra minuscula
});
document.querySelector('.composer').addEventListener('click',() => {
    let song = document.querySelector('#input').value; //value :pega o que o usuario digitou

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);

    }
});
function playSound(sound)  {
    //audioElement:toca a musica pela espectativa tecla
    let audioElement = document.querySelector(`#s_${sound}`);   //(`#s_${sound}`)ele vai completar s_texet
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;    //corrigir o tempo do som
        audioElement.play();//funcção da tag audio para tocar o som
    }
    if(keyElement) {    //se ele achaou a tecla keyelemnt  adcioan a borda amaerlea
        keyElement.classList.add('active');

        //remover o activel
        setTimeout(()=> {
            keyElement.classList.remove('active');
        },300);
    }
}
//armazenar a musica e tocar com o button(composição)
function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=> {
            playSound(`key${songItem}`);

        }, wait);

        wait += 250;
        
    }

}
