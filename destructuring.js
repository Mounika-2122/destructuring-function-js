function show(a,b,...args){
    let div=1;
    for(let i of args){
        div -= i;
    }
    console.log("division =" +div);

}
show(40/5/6/7/8/4/3);