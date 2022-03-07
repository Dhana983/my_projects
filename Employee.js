class Employee{

    #ename;
    #edesignation;
    #ehours;
    

    get getName(){
        return this.#ename;
    }
    set setName(name){
        this.#ename=name;
    }
    get getDesignation(){
        return this.#edesignation;
    }
    set setDesignation(designation){
        this.#edesignation=designation;
    }
    get getHours(){
        return this.#ehours;
    }
    set setHours(hours){
        this.#ehours=hours;
    }

     salaryCalc(){
        let salary = 0;
        if(this.getDesignation=="manager"){
            salary = (this.getHours*90);
        }else if(this.getDesignation=="consultant"){
            salary = (this.getHours*70);
        }else if(this.getDesignation=="trainee"){
            salary = (this.getHours*45);
        }
        this.ename='Dhana';
        var outputText = this.getName+" who is a "+"'"+this.getDesignation+"'"+" will get "+"$"+salary;
        
        return outputText;
    }
}
