import {NavController} from "ionic-angular";
import { CreatePage } from "../pages/create/create";

export class Note {

    icon: string;
    title: string;
    text: string;
    creationDate: string;
    modificationDate: string;    

    constructor(title: string,text: string) {

        this.title = title;
        this.text = text;
        this.modificationDate = '01/01/2018'
        this.icon = "paper";
    }

}