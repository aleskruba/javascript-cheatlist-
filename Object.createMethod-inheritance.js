var person = {
    fname:'',
    lname:'',
    fullname: function() {
        return this.fname+' '+this.lname 
    },
    calculateAge: function() {
        var currentYear = new Date().getFullYear();
        var age = currentYear - this.birthday;
        return age
    }
}

// first method
const ales = Object.create(person)
console.log(ales)

console.log(ales.__proto__===person)

ales.fname = 'Ales';
ales.lname = "Kruba";
ales.birthday = 1978;

console.log(ales.fullname())
console.log(ales.calculateAge())

// second method

var mark = Object.create(person, {
    fname: {value:'Mark'},
    lname: {value:"spencer"},
    birthday : {value:1990}
})
console.log(mark.fullname())
console.log(mark.calculateAge())
