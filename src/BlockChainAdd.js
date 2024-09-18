import BlockData from "./BlockData";

export default class BlockChainAdd {
  constructor() {
    // 제네시스 블록을 생성하고 체인에 추가
    const genesisBlock = new BlockData("hello");
    this.chain = [genesisBlock];
  }

  // 새로운 블록을 추가하는 메서드
  addBlock(data) {
    // 새 블록을 생성
    const newBlock = new BlockData(data);

    // 체인의 마지막 블록을 가져옵니다.
    const lastBlock = this.chain[this.chain.length - 1];

    // 새 블록의 previousHash를 마지막 블록의 해시값으로 설정합니다.
    newBlock.previousHash = lastBlock.toHash();

    // 새 블록을 체인에 추가합니다.
    this.chain.push(newBlock);
  }
}
