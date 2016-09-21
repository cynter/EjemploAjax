
function MostrarError()
{
/*
	var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});
*/

//PARA MOSTRAR ERROR
//$.ajax(parametros de tipo jason{dentro de los parametros puede recibir la url de la pag a donde va ir}).then(aca se pasan dos fx colpra);
$.ajax({url:"nexoNoExiste.php"}).then(function(datosCorrectos){
	alert("primero");
},function(error){
		console.info("objeto respuesta",error);
	alert("segundo"+error);
	$("#informe").html(error.responseText);
});


}

function MostrarSinParametros()
{//nexoTexto.php
	/*var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/

$.ajax({url:"nexoTexto.php"})
.then(function ok(respuesta){
	//alert(respuesta);
	$("#principal").html(respuesta);

},function mal(error){
	alert(error);
});

}

function Mostrar(queMostrar)
{
	/*	//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});*/

//definir el json adentro del ajax-------data:{objeto json}-----queHacer es el nombre del atributo, que mostrar es el parametro ( es mi variable)
	$.ajax({url:"nexo.php" , type:"post", data:{queHacer:queMostrar}})
	.then(function(exito){
		$("#principal").html(exito); //$('esto es el id').html(el parametro de la fx); 
	},function(error){

	});

}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}