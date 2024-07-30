const user = {
    name: "sanghpal",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website.`);
        console.log(this);
    }
}

user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()

// console.log(this);