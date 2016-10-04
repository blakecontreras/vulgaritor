export class Word {
  constructor(id = null, text = "", selected = false) {
    this.id = id;
    this.text = text;
    this.selected = selected;
  }
  id: number;
  text: string;
  selected: boolean;
}