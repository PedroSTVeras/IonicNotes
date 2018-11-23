import {NavController} from "ionic-angular";
import { CreatePage } from "../pages/create/create";

export class Note {

    icon: string;
    title: string;
    text: string;
    creationDate: string;
    modificationDate: Date;    

    constructor(title: string,text: string) {

        this.title = title;
        this.text = text;
        this.modificationDate = new Date();
        this.icon = "paper";
    }

}