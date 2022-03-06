function salaryJS()
{

    const name = document.getElementById('name');
    const id = document.getElementById('employeeid').value;
    const date = document.getElementById('date').value;
    const hours = Number(document.getElementById('hours').value);
    const designation = document.getElementById('designation').value;

    var salary;
    if(designation=="Manager"){
        salary = (hours*90);
    }else if(designation=="Consultant"){
        salary = (hours*70);
    }else if(designation=="Trainee"){
        salary = (hours*45);
    }
    const outputText = name+" who is a "+"'"+designation+"'"+" will get "+"$"+salary;
    localStorage.setItem("finaldata",outputText);
    //document.getElementById('output').innerHTML=localStorage.;

}