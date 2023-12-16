// Pegando a classe piano-keys .key do html.
const pianoKeys = document.querySelectorAll('.piano-keys .key');

//pegando a classe .volume-slider e o input.
const volumeSlider = document.querySelector(".volume-slider input");

//pegando a classe .keys-check e o input.
const keysCheck = document.querySelector(".keys-check input");

//carregando audios da pasta audios
let audioos = new Audio("src/audios/a.wav")

// quardando a função playTune dentro da variavel abaixo
const playTune =(key) =>{
    audioos.src = `src/audios/${key}.wav`
    audioos.play();

    // Usamos essa const para tira e colocar active do class do html.E isso gera alteração no css gerando efeito de movimento.
    const clicktecla = document.querySelector(`[data-key="${key}"`)
        //Adicionando dinamicamente o active
    clicktecla.classList.add("active")
        // Tirando active dinamicamente.
    setTimeout(()=>{
        clicktecla.classList.remove("active")

    },150)
};

// criamos um laço de repetição que vai pega só os valores e não os elementos isso graças ao data-sete do html.
pianoKeys.forEach((key) =>{
   console.log(key.dataset.key);
   key.addEventListener("click",()=>playTune(key.dataset.key))
});

//agora capituramos as teclas que o usuario ta teclando.
//Usamos addEventListener que espera  algumaa coisa que seria toque na tecla.
document.addEventListener("keydown",(e) =>{
        //Agora ele coloca funções a cada tecla gerando son ao clicar.
        playTune(e.key);  
});

//Função que controla o volume.
const handleVolume = (e) => {
    console.log(e.target.value)
    audioos.volume = e.target.value;
  };
//Função que ele 
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
  };
//cahamdo a função handleVolume
volumeSlider.addEventListener("input", handleVolume);
//cahamdo a função showHideKeys
keysCheck.addEventListener("click", showHideKeys);
