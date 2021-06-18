class Acc {
    constructor(email, username, pass) {
        this._email = email;
        this._name = username;
        this._pass = pass;
        // this._level = level;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    get email() {
        return this._email;
    }

    set email(val) {
        this._email = this.email;
    }

    get pass() {
        return this._pass;
    }

    set pass(val) {
        this._pass = this.pass;
    }

    // get level (){
    //   return this._level;
    // }

    // set level (val){
    //   this._level = val;
    // }
}

export default Acc;