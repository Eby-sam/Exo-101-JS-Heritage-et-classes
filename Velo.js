class Velo extends Vehicule {
    constructor(couleur, roues, marque,rayonRoues, typePeinture) {
        super(couleur, roues, marque);
        this.rayon = rayonRoues;
        this.peint = typePeinture;
    }

    monter() {
        console.log('monter sur le velo');
    }
}