
var altura =  0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 1500

//extrair parâmetro escolhido da página index
//alert(window.location.href) //se deu bão, pode atribuir os nvls

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
}else{}
if (nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
}else{}
if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	//console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	//decremento primeiro que o getEelement pra decrementar
	//e depois exibir
	tempo -= 1

	//ação após zerar cronometro
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)


function posicaoRandomica() {

	//remover(REMOÇÃO) o mosquito anterior (caso exista).

	if (document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		//Limitador de vidas
		if (vidas > 3) {
			//Game Over
			window.location.href = 'fim_jogo.html'

		} 
		else{
			//caso contrário segue a lógica
			document.getElementById('v' + vidas).src="imagem/coracao_vazio.png"

			vidas++
		}
	}

	//lÓGICA

	var posicaoX = Math.floor(Math.random() * (largura - 200)) + 50;
	var posicaoY = Math.floor(Math.random() * (altura - 200)) + 50;

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//console.log(posicaoX, posicaoY)

	//Criar o elemento Html de forma programática
	var mosquito = document.createElement('img')
	//definir o src, search do img através da var mosquito
	mosquito.src = 'imagem/mosquito.png'
	mosquito.style.cursor ='imagem/mata-mosquito.png'
	//definir tamanho
	mosquito.className = tamanhoAleatorio() +  ' ' + ladoAleatario()
	//atributo style
	mosquito.style.left = posicaoX + 'px' //a string px represemta pixel
	mosquito.style.top = posicaoY + 'px' //o elemento presica ser absoluto
	mosquito.style.position = 'absolute'
	//progrmática.
	document.body.appendChild(mosquito)
	//para o mosquito sumir
	mosquito.id = 'mosquito'
	//FIM LÓGICA
	mosquito.onclick = function() {
		this.remove()
	}
}


	//Tamanhos variados para o Mosquito. 
	//Para deixar um pouco mais dinânmico 
	// criar três classes e atribuir de forma aleatória ao
	//Elemento html que estamos criando. 

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
	case 0:
		return 'mosquito1'

	case 1:
		return 'mosquito2'

	case 2:
		return 'mosquito3'
	}
}

//orientação da imagem(direita/esquerda)


function ladoAleatario() {
	var classe = Math.floor(Math.random() * 2) 
	switch(classe){
	case 0:
		return 'ladoA'
	case 1:
		return 'ladoB'
	}
}

//!!!!!!!!!!!!!!!!!FIM DO CORAÇÃO DO GAME!!!!!!!!!!!


//CONTROLANDO PONTOS DE VIDA

// 1º Se clicado, o elemento deve ser removido e nada deve acontecer
// 2º Se elemento não for clicado antes da remoção automática então os pontos de vida devem ser afetados



