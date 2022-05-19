var express = require('express');
var app = express();
app.use(express.static('public')); //정적인 파일 사용 가능

app.get('/',function(req, res){ // 홈 / 으로 접속했을때 callback 함수 실행 
    res.send('Hello home page');
});

app.get('/route',function(req,res){
    res.send('Hello Router, <img src="/route.png">');
});

app.get('/login', function(req, res){
    res.send('Login please');
});

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});

//get : Router 라우터  하는일 : Routing 라우팅  --> 길을 찾는 것