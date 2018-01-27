import { Address } from "./address";

export class User {
    id:number = 0;
    firstName:string;
    lastName:string;
    private _displayName:string = null;
    dateOfBirth:string;
    dob:Object;
    gender:string = "male";
    consent:string;
    email:string;
    password:string;
    address:Address = new Address();



    constructor() {
        let date:Date = new Date();
        let year:number = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        console.log(`${month}/${day}/${year}`);
        this.dob = { date: { year: year, month: month, day: day } };
    }

    set displayName(name) {
      this._displayName = name;
    }
    get displayName() {
      return this._displayName;
    }
 }
