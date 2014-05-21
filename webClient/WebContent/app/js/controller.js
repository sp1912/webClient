/*
 * BODY 태그 안에 ng-controller 에서 할당해준 컨트롤러의 이름과 동일한
 * 자바스크립트 함수가 자동으로 매칭된다.
 * ng-controller에서 호출할 때는 scope 파라메터를 따로 넣지 않았지만,
 * 실제 컨트롤러 함수에서는 아래와 같이 $scope 를 파라메터로 받는다.
 * 백그라운드 통신을 위해 $http를 파라메터로 추가해준다.
 */
function PhoneListController($scope, $http)
{
  //jQuery의 ajax 통신과 거의 유사하다.
	$http.get('http://localhost:8181/econws/code/BANK').success(
	function(data)
	{
		$scope.phones = data;
	});
}
