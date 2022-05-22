var express = require('express');
const res = require('express/lib/response');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade'); //jade 템플릿 엔진과 express를 연결
app.set('views', './views')
app.use(express.static('public')); 
/*
    정적인 파일 사용 가능
    node 서버 실행중에 정적인 파일 수정 가능
*/

app.get('/topic', function(req,res){
    var topics = [        
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ]

    var output = 
    `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
    `
    res.send(output);
})

app.get('/template', function(req, res){
    res.render('temp', {time: Date(), _title:'Jade'}); //jade 파일에 변수 전달
})

app.get('/',function(req, res){ // 홈 / 으로 접속했을때 callback 함수 실행 
    res.send('Hello home page');
});

app.get('/dynamic',function(req, res){
    var lis = '';
    for(var i=0;i<5;i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
        <ul>
            Hello Dynamic!
            ${lis}
        </ul>
        ${time}
        </body>
    </html>
    `;
    res.send(output)
})

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