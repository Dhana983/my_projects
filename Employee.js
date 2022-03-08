class Employee{

    #ename;
    #edesignation;
    #ehours;
    

    get getname(){
        return this.#ename;
    }
    set setname(name){
        this.#ename=name;
    }
    get getdesignation(){
        return this.#edesignation;
    }
    set setdesignation(designation){
        this.#edesignation=designation;
    }
    get gethours(){
        return this.#ehours;
    }
    set sethours(hours){
        this.#ehours=hours;
    }

     salaryCalc(){
        let salary = 0;
        if(this.getdesignation=="manager"){
            salary = (this.gethours*90);
        }else if(this.getdesignation=="consultant"){
            salary = (this.gethours*70);
        }else if(this.getdesignation=="trainee"){
            salary = (this.gethours*45);
        }
        this.ename='Dhana';
        var outputText = this.getname+" who is a "+"'"+this.getdesignation+"'"+" will get "+"$"+salary;
        
        return outputText;
    }
}
