var fs = require('fs');

/* 
    Sync 방식 -> 동기
    순차적으로 실행 -> 하나 끝난 후에 그 다음거 실행
*/
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);


/* 
    Async 방식 -> 비동기
    실행중에 다음거 실행하는 중에 callback 함수 실행하면서 실행 종료 알림
*/
console.log(2);
fs.readFile('data.txt',{encoding:'utf8'},function(err, data){ //콜백
    console.log(3);
    console.log(data);
});
console.log(4);