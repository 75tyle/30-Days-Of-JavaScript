// let myName = 'sanghpal      '
// let myChannel = 'sanghpalYT     '

// console.log(myName.truelength)

let myHeros = ['thor','spider']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sanghpal = function(){
    console.log('sanghpal is present in all objects')
}

Array.prototype.heySanghpal = function(){
    console.log(`Sanghpal say hello`);
}

// heroPower.sanghpal()

// myHeros.sanghpal()
// myHeros.heySanghpal()
// heroPower.heySanghpal()


// inheritance

const User = {
    name: 'sanghpal',
    email:'san@google.com'
}

const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// mordern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'sanghpal   '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
'sshgaofgl'.trueLength()
'sdflajjfasl '.trueLength()