angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('listagem');

	$stateProvider
	.state('listagem', {
		url : '/listagem',
		templateUrl : 'templates/listagem.html',
		controller : 'ListagemController'
	})

	$stateProvider
	.state('finalizarpedido', {
		url : '/finalizarpedido/:carro',
		templateUrl : 'templates/finalizarPedido.html',
		controller : 'FinalizarPedidoController'
	})

	$stateProvider
	.state('carroescolhido', {
		url : '/carroescolhido/:carro',
		templateUrl : 'templates/carroEscolhido.html',
		controller : 'CarroEscolhidoController'
	});	

})