class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase();

    }
   set email(newEmail){
        this._email=newEmail;
    }
    
    get password(){
        return `${this._password}lavanya`;
    }

    set password(newPassword){
        this._password=newPassword;
    }
} 
const lavanya=new User("joshilav32@gmail.com","abc");
console.log(lavanya.password);
console.log(lavanya.email);