class Vehicule {
    constructor(couleur, roues, marque) {
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }

    demarrer() {
        console.log("Demarer");
    }

    arreter() {
        console.log("Arreter")
    }
}