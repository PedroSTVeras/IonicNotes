import {NavController} from "ionic-angular";
import { CreatePage } from "../pages/create/create";

export class Note {

    icon: string;
    title: string;
    text: string;
    creationDate: string;
    modificationDate: string;
    

    constructor(title: string) {

        this.title = title;
        this.modificationDate = ' '
        this.icon = "paper";
    }

    Print() {

    }


}