angular.module('starter')
.service('CarroService', function($http, $ionicPopup) {

	let url = "http://aluracar.herokuapp.com/";

	return {
		obterCarros : function() {
			return $http.get(url).then(function(response) {
				return response.data;
			})
		},
		salvarPedido : function(pedido) {
			return $http.get(url + 'salvarpedido', pedido).then(function(resp) {
				return "Deu certo.";
			}, function(erro) {
				$ionicPopup.alert({
					title : 'Erro',
					template : "Campos Obrigatórios"
				});
			});
		}
	}

});