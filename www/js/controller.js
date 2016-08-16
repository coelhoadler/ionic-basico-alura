angular.module('starter')
.controller('ListagemController', function($scope, CarroService) {

	CarroService.obterCarros().then(function(dados) {
		$scope.listaDeCarros = dados;
	});

	$scope.footer = 'Rua Manoel Marques Canoilas, nº 95';

});

angular.module('starter')
.controller('CarroEscolhidoController', function($scope, $stateParams) {

	$scope.carroEscolhido = angular.fromJson($stateParams.carro);

	$scope.listaDeAcessorios = [
		  {nome : 'Freio ABS', preco : 800}
		, {nome : 'Ar Condicionado', preco : 1000}
		, {nome : 'MP3 Player', preco : 300}
	]

	$scope.mudou = function(acessorio, isMarcado) {
		if (isMarcado) {
			$scope.carroEscolhido.preco += acessorio.preco;
		} else {
			$scope.carroEscolhido.preco -= acessorio.preco;
		}
	}

});

angular.module('starter')
.controller('FinalizarPedidoController', function($scope, $stateParams, $ionicPopup, $state, CarroService) {

	$scope.carroFinalizado = angular.fromJson($stateParams.carro);
	$scope.pedido = {};

	$scope.finalizarPedido = function() {
		var pedidoFinalizado = {
			params : {
				carro  : $scope.carroFinalizado,
				pedido : $scope.pedido
			}
		}
		console.log(pedidoFinalizado);
		CarroService.salvarPedido(pedidoFinalizado).then(function() {
			$ionicPopup.alert({
				title : 'Parabéns',
				template : 'Você acaba de comprar um carro.'
			}).then(function() {
				$state.go('listagem');	
			});
		});
	};
});