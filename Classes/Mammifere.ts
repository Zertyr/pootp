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
     * Permet d'afficher la date de naissance de l'animal proprement
    */
    get dateNaissance(){
        return this._dateNaissance.toLocaleDateString();
    }

    /**
     * Permet d'afficher l'age de l'animal
    */
    get age() {
        let diff_ms = Date.now() - this._dateNaissance.getTime();
        let age_dt = new Date(diff_ms); 
        let age = Math.abs(age_dt.getUTCFullYear() - 1970);
        return age;
    }

    /**
     * Permet d'afficher les informations de l'animal
    */
    display(): void {
        console.log(`${this._nom} est un animal qui fait ${this._poids} et qui est née le ${this.dateNaissance}, j'ai donc ${this.age} ans.`);
    }
}