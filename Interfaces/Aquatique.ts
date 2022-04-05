import MilieuNaturel from "./MilieuNaturel";

export default interface Aquatique extends MilieuNaturel {

    /**
     * Permet de savoir si l'animal respire sous l'eau
     * @param bool : boolean pour savoir si il respire sous l'eau
     */
    respirerSousEau(bool: boolean): void;

    /**
     * Permet de savoir si l'animal nage
     * @param bool : boolean pour savoir si il nage
     */
    nager(bool: boolean): void;
}