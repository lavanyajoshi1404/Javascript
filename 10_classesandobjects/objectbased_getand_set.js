const User={
    _email:'h@hc.com',
    _password:"abc",
  
    get email(){
        return this._email.toUpperCase();
    },

    set email(newEmail){
        this._email=newEmail;
    },


    get password(){
        return `${this._password}lavanya`;
    },

    set password(newPassword){
        this._password=newPassword;
    }

}
const tea=Object.create(User);
console.log(tea.email)
//# is used in getter and setter nowadays