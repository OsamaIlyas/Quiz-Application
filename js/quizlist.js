var div = document.getElementById('container');
var ul = document.getElementById('quizList');


function getQuizData() {
    var quizData = localStorage.getItem('quizes');


    //     if (quizData === null) {
    //         location = 'index.html';
    //     }
    //     else {
    //         quizData = JSON.parse(quizData);
    //     }    
    // }


    if (quizData) {
        quizData = JSON.parse(quizData);
        for (var i = 0; i < quizData.length; i++) {
            console.log(quizData[i].quizName);
            var li=document.createElement('li');
            var a=document.createElement('a');
            a.setAttribute('onClick','StartQuiz(this)');
            var textnode=document.createTextNode(quizData[i].quizName);

            a.appendChild(textnode);
            li.appendChild(a);
            ul.appendChild(li);
        }

    }

    else {
        div.innerHTML = 'No quiz to attempt';
    }
}
getQuizData();


function StartQuiz(param)
{
    console.log(param.innerHTML);
}







var quizData = localStorage.getItem('quizes');
quizData  = JSON.parse(quizData );
console.log(quizData );
if(quizes===null){
    document.getElementById('none').innerHTML="No quizzes available right now";
}
else{
    var quizNames=[];
for(var i=0;i<quizes.length;i++){
    quizNames.push(quizes[i].name);
}

if(quizNames.length===0){
    document.getElementById('none').innerHTML="No quizzes available right now";
}
else if(quizNames.length>0){
    var identity="quiz";
    var click;
    for(var i=0;i<quizNames.length;i++){
        var parent=document.getElementById('maindiv');
        var breakline=document.createElement('br');        
        var anker=document.createElement('a');
        identity=identity+(i+1);
        click="startQuiz('"+identity+"')";
        anker.setAttribute('id',identity);
        anker.setAttribute('class','links');
        anker.setAttribute('href','javascript:void(0)');
        anker.setAttribute('onclick',click);
        var ankerTxt=document.createTextNode(quizNames[i]);
        anker.appendChild(ankerTxt);
        parent.appendChild(breakline);
        parent.appendChild(anker);
    }
}

}
