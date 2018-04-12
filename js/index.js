
var elemento = document.getElementById('bar');
var boton = document.getElementById('boton');
elemento.className = 'col s12 bar-nav';

boton.addEventListener('click', function(){
	if(elemento.className == "col s12 bar-nav"){
		elemento.className='col s12 mostrar';
	}else if(elemento.className == 'col s12 mostrar'){
		elemento.className = 'col s12 bar-nav ocultar';
	}else if(elemento.className == 'col s12 bar-nav ocultar'){
		elemento.className='col s12 mostrar';
	}
});
