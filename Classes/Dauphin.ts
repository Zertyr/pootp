import Aquatique from "../Interfaces/Aquatique";
import Mammifere from "./Mammifere";

export default class Dauphin extends Mammifere implements Aquatique {
    
    constructor(nom: string, poid: number, dateNaissance: Date) {
        super(nom, poid, dateNaissance)
    }

    /**
     * Permet d'afficher si il respire sous l'eau
     * @param bool: on indique true ou false
    */
    respirerSousEau(bool: boolean): void {
        if (bool) {
            console.log(`Je respire sous l'eau`);

        } else {
            console.log(`Je ne respire pas sous l'eau`);
        }
    }

    /**
     * Permet d'afficher si il nage
     * @param bool: on indique true ou false
    */
    nager(bool: boolean): void {
        if (bool) {
            console.log(`Je nage librement`);

        } else {
            console.log(`Je ne nage pas et je reste au fond de l'eau`);

        }
    }

    /**
     * Permet d'afficher le cliquetement du dauphin
    */
    cliqueter(): void {
        console.log(`clic clic`);
    }

    /**
     * Permet d'afficher les informations du dauphin
     * @param nager: on indique true ou false si il nager pour afficher la phrase
     * @param respirerSousEau: on indique true ou false si il respire pour afficher la phrase
    */
    display(nager?: boolean, respirerSousEau?: boolean): void {
        console.log(`Je suis un Dauphin de nom ${this._nom}, je fais ${this._poids} kg et je suis née le ${this._dateNaissance}.\n
        De plus mon principal signe distinctif est que je fais `);
        this.cliqueter();
        if (nager) {
            this.nager(nager)
        }
        if (respirerSousEau) {
            this.respirerSousEau(respirerSousEau)
        }
    }
}