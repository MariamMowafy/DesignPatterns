function Developer(name){
    this.name = name
    this.type = "Developer"
}
function Tester(name){
    this.name = name
    this.type = "Tester"
}

function EmployeeFacotry(){
    this.create = (name,type) => {
        switch(type){
        case 1: 
            return new Developer(name) 
            break;
        case 2: 
            return new Tester(name) 
            break;
        }
    }
}

const employeeFactory = new EmployeeFacotry()
const employees = []
employees.push(employeeFactory.create("Mariam",1))
employees.push(employeeFactory.create("Omar",2))
employees.push(employeeFactory.create("Mohamed",2))
console.log(employees)