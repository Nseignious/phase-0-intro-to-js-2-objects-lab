// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newEmployee = {...employeeObj}
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    console.log("This is the value of my second parameter.", key)
    delete newEmployee[key] 
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key]
    return employee
}


