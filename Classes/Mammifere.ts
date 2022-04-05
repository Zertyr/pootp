import Animal from "../Interfaces/Animal";

export default abstract class Mammifere implements Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;
    constructor(nom: string, poid: number, dateNaissance: Date) {
        this._nom = nom;
        this._poids = poid;
        this._dateNaissance = dateNaissance;
    }

    /**
     * Permet d'afficher les informations de l'animal
    */
    display(): void {
        console.log(`${this._nom} est un animal qui fait ${this._poids} et qui est née le ${this._dateNaissance}`);
    }
}