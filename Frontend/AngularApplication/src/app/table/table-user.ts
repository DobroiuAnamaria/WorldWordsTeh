export class TableUser {
    public place: number;
    public name: string;
    public points: number;

    constructor(place: number, name: string, points: number) {
        this.place = place || -1;
        this.name = name || '';
        this.points = points || 0;
    }
}