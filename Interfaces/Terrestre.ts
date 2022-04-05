import MilieuNaturel from "./MilieuNaturel";

export default interface Terrestre extends MilieuNaturel {
    /**
     * Permet de savoir si l'animal respire sous l'eau
     * @param bool : boolean pour savoir si il respire sous l'eau
     */
    respirerHorsDeLeau(): void;

    /**
     * Permet de savoir si l'animal nage
     * @param bool : boolean pour savoir si il nage
     */
    marcher(bool: boolean): void;
}