function User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
          get :function(){
            return this._email.toUpperCase();

          },
          set:function(newEmail){
            this._email=newEmail;
          }

     });
    Object.defineProperty(this,'password',{
          get :function(){
            return `${this._password}lavanya`;
          },
          set:function(newPassword){
            this._password=newPassword;
          }
    })

     } 

    
const lavanya=new User("joshilav32@gmail.com","abc");
console.log(lavanya.password);
console.log(lavanya.email);