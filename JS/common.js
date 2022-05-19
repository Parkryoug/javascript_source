// 선언적 함수 활용 : compute() 함수 활용
function compute(){
    var x = 200;
    var y = 10;
    var result = x / y;
    document.write('선언적 함수 활용 결과 값은 ' + result + '입니다!');
}

// 익명 함수 활용 : 함수 이름이 생략된 함수 형식 활용
// (익명 함수는 변수 선언 이후에 호출해야 합니다.)

/* var annoy_compute = function() {
    document.write('선언적 함수에서 익명 함수 활용');
}
 */
// 즉시 실행 함수 : 익명 함수 중에서 필요에 따라 일회성으로 사용하는 함수 형식
//(즉시 실행 함수는 선언과 동시에 함수가 실행되며 함수명이 없기 때문에 재호출 할수 없음)
//(보통 처음 한번만 실행하는 초기화 코드에 사용함)

(function(){
    var sum = 10;
    document.write(sum);
})