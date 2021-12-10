class Voiture extends  Vehicule {
    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque);
        this.assur = assurance;
        this.proprio = proprietaire;
    }

    carchere() {
        console.log('elle est toute propre');
    }
}