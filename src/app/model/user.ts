import { Address } from "./address";

export class User {
    id:number;
    firstName:string;
    lastName:string;
    dateOfBirth:number;
    gender:string;
    consent: string;
    email:string;
    password:string;
    adress:Address;
 }