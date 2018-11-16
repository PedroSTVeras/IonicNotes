
import { Note } from "./Note";
import { NavController } from 'ionic-angular';
import { CreatePage } from "../pages/create/create";
import { EditPage } from "../pages/edit/edit";


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

    /*  export function RemoveArray(array, object) {
         let index = array.indexOf(object, 0)
         if (index > -1)
     
             array.splice(index, 1);
     
     } */
    Delete(note: Note): void {
        let index = this.list.indexOf(note, 0)

        if (index > -1)
            this.list.splice(index, 1);
    }

    Edit(title: string) {
        for (let i = 0; i < this.list.length; i++) {
            let n: Note = this.list[i];
            if (n.title == title) {
                //this.list[i].Edit();
                // navCtrl.push(NotePage)
                console.log(n.title);
                console.log(n.text);
                
                //document.getElementById("title").innerHTML = n.title;
                this.navCtrl.push(EditPage);
            }
        }
    }

    Get(title: string): Note {
        for (let i = 0; i < this.list.length; i++) {

            if (this.list[i].title == title) {
                return this.list[i];
            }
        }
    }

    /*   GetNote(note: Note):Note
      {
          let index = this.list.indexOf(note, 0)
  
          if (index > -1)
              return this.list[index];
      } */



    Front(): Note {
        return this.list[0];
    }

    Back(): Note {

        return this.list[this.list.length - 1];
    }
}

