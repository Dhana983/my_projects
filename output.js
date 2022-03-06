window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const id = params.get('employeeid').value;
    const date = params.get('date').value;
    const hours = Number(params.get('hours').value);
    const designation = params.get('designation').value;

    var salary;
    if(designation=="Manager"){
        salary = (hours*90);
    }else if(designation=="Consultant"){
        salary = (hours*70);
    }else if(designation=="Trainee"){
        salary = (hours*45);
    }
    const outputText = name+" who is a "+"'"+designation+"'"+" will get "+"$"+salary;
    document.getElementById('output').innerHTML=outputText;
    
})