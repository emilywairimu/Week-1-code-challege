function getResult(){ 
    let a =parseInt(document.getElementById('javascript-score').value);
    let b =parseInt(document.getElementById('python-score').value);
    if (a>100 || b > 100){
        alert('Enter correct number'); //to prevent unwanted values
    }
    else{
        let obtained = a + b;
        document.getElementById('obt').innerHTML = obtained;
        let per = obtained / 200 * 100; //calculation of the average % of the scores in the two langauages
        document.getElementById('per').innerHTML = per + '%';
        
        if(per < 40){ //condition for E
            document.getElementById('grade').innerHTML = 'E';
        }
        else if(per > 40 && per < 49){ //condition for D
            document.getElementById('grade').innerHTML = 'D';
        }
        else if(per > 50 && per < 59){ //condition for C
            document.getElementById('grade').innerHTML = 'c';
        }
        else if(per > 60 && per < 79){ //condition for B
            document.getElementById('grade').innerHTML = 'B';
        }
        else if(per > 79){ //condition for A
            document.getElementById('grade').innerHTML = 'A';
        }
    }
}