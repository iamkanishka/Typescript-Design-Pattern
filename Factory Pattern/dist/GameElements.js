export class BaseClassArtifact {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} Createdd`);
    }
    move() {
        console.log("BaseGameArtifact.move()");
    }
    act() {
        console.log("BaseGameArtifact.act()");
    }
}
export class Bomb extends BaseClassArtifact {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`Bomb, ${this.name} created`);
    }
    move() {
        console.log("Bombs dont move)");
    }
    act() {
        console.log("Bomb go BOOOOOOOOOOOOM");
    }
}
export class NFC extends BaseClassArtifact {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`NFC, ${this.name} created`);
    }
    move() {
        console.log("NFC  is already walking");
    }
    act() {
        console.log(`${this.name} stay and listen`);
    }
}
export class Enemy extends BaseClassArtifact {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`Enemy, ${this.name} created, who disturbed me`);
    }
    move() {
        console.log(`${this.name} is charging forword`);
    }
    act() {
        console.log(`${this.name} has attached you, you lost 10 Point`);
    }
}
export class Knight extends Enemy {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`Knight, ${this.name} created, Im Evil, but Glorius`);
    }
    move() {
        console.log(`${this.name} is riding the horse`);
    }
    act() {
        console.log(`${this.name} has attact you, you have lost NP`);
    }
}
export class Mage extends Enemy {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`Mage, ${this.name} created, I Conjrea and cast Spell`);
    }
    move() {
        console.log(`${this.name} is Teleporting `);
    }
    act() {
        console.log(`${this.name} has turned you into Sheep`);
    }
}
export class Undead extends Enemy {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`Undead, ${this.name} created, My Farts will kill you`);
    }
    move() {
        console.log(`${this.name} Im Walking towords you`);
    }
    act() {
        console.log(`${this.name} has attaked you with cynaid fards you lost 50 Point`);
    }
}
//# sourceMappingURL=GameElements.js.map