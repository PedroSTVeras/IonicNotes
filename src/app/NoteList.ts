import { NavController } from 'ionic-angular';

import { CreatePage } from "../pages/create/create";
import { Note } from "./Note";

export class List {

    list: Note[];

    constructor(public navCtrl: NavController) {

        this.list = new Array<Note>();
    }

    Size(): number {
        return this.list.length;
    }

    Add(item: Note): void {
        this.list.push(item);

    }

    Delete(note: Note): void {
        let index = this.list.indexOf(note, 0)

        if (index > -1)
            this.list.splice(index, 1);
    }

/*     Edit(title: string) {
        for (let i = 0; i < this.list.length; i++) {
            let n: Note = this.list[i];
            if (n.title == title) {

                //this.navCtrl.push(CreatePage);
            }
        }
    } */

    Get(title: string): Note {
        for (let i = 0; i < this.list.length; i++) {

            if (this.list[i].title == title) {
                return this.list[i];
            }
        }
    }

    Front(): Note {
        return this.list[0];
    }

    Back(): Note {

        return this.list[this.list.length - 1];
    }
}

