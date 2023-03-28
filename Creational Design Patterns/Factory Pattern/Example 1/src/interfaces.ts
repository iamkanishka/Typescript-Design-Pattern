export enum ArtifactType{
    Bomb = 1,
    NPC,
    Enemy
}


export interface IGameArtifact{
    name: string;
    move(): void;
    act(): void;
}


export enum EnemyType{
    Knight = 1,
    Mage,
    Undead,
}