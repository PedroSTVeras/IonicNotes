import {NavController} from "ionic-angular";
import { CreatePage } from "../pages/create/create";

export class Note {


    title: string;
    text: string;
    creationDate: string;
    modificationDate: string;
    

    constructor(title: string) {

        this.title = title;
        this.modificationDate = ' '

    }

    Print() {

    }

    /* Edit() {

        this.navCtrl.push(NotePage)
        console.log(this.title);
         
    } */

}