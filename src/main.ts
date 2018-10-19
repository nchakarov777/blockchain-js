import SHA256 from 'crypto-js/sha256';

export class Block {
    index: number;
    timestamp: string;
    data: any;
    previousHash: string;
    hash: string;
    nonce: number;

    constructor(timestamp: any, data: any) {
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash();
        this.nonce = 0;
        console.log('initialized');
    }

    calculateHash(): string {
        console.log(SHA256);
        console.log('in the game bby');
        return "";
    }

    mineBlock(difficulty: any) {

    }
}

(function startIt() {
    let firstBLock = new Block("none", {});
})();

