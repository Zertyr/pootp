export default interface Animal {
    _nom: string,
    _poids: number,
    _dateNaissance: Date,

    /**
     * Permet d'afficher les informations de l'animal
     */
    display():void
}