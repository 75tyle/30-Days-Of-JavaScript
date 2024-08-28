const user = {
    username: 'sanghpal',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('get user details form database')
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User('sanghpal',12,true)
const userTwo = new User('userTwo',11,false)
console.log(userOne)
console.log(userTwo)