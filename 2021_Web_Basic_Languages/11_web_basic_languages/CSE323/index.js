// 지시사항을 참고하여 코드를 작성하세요.
function getMaxNumber(arr){
	console.log(arr);
    var max = arr[0];
    console.log(max)
    for(var i = 0; i < arr.length; i++){
        if(temp < arr[i]) max = arr[i];
    }

    return max;
}