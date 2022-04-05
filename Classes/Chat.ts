import Terrestre from "../Interfaces/Terrestre";
import Mammifere from "./Mammifere";

export default class Chat extends Mammifere implements Terrestre {
    
    constructor(nom: string, poid: number, dateNaissance: Date) {
        super(nom, poid, dateNaissance)
    }
    /**
     * Permet d'afficher qu'il respire hors de l'eau
    */
    respirerHorsDeLeau(): void {
        console.log(`Respire hors de l'eau`);
    }

    /**
     * Permet d'afficher si il marche ou si il court
     * @param bool: on indique true ou false si il marche ou si il court
    */
    marcher(bool: boolean): void {
        if (bool) {
            console.log(`Je marche.`);

        } else {
            console.log(`Je cours.`);
        }
    }

    /**
     * Permet d'afficher si le chat sait nager ou pas
     * @param bool: on indique true ou false si il nager pour afficher la phrase
    */
    nager(bool: boolean): void {
        if (bool) {
            console.log(`Je sais nager`);

        } else {
            console.log(`Je ne sais pas nager car j'aime pas l'eau`);
        }
    }

    /**
     * Simule le miaulement du chat
     */
    miaule():void {
        console.log(`woof woof`);
    }

    /**
     * Permet d'afficher les informations du chat
     * @param nager: on indique true ou false si il nager pour afficher la phrase
     * @param marcher: on indique true ou false si il marche ou si il court
    */
    display(nager?: boolean, marcher?: boolean): void {
        console.log(`Je suis un Chat de nom ${this._nom}, je fais ${this._poids} kg et je suis née le ${this.dateNaissance}, j'ai donc ${this.age} ans.\n
        Mon principal signe distinctif est que je fais : `);
        this.miaule();
        if (nager) {
            this.nager(nager)
        }
        if (marcher) {
            this.marcher(marcher)
        }
    }
}