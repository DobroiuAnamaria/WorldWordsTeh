export class Word {
    public word: string;
    public description: string;

    constructor(word: any) {
        this.word = word.word || '';
        this.description = word.description || '';
    }
}