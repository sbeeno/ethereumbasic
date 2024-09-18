import BlockHash from "./BlockHash";

export default class BlockChainAddLink {
  constructor() {
    const genesisBlock = new BlockHash({ data: "hello" }); // 제네시스 블록
    this.chain = [this.genesisBlock]; // 블록체인 초기화
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1]; // 마지막 블록 가져오기
    const previousHash = lastBlock.toHash(); // 마지막 블록의 해시
    const newBlock = new BlockHash({ data }, previousHash); // 데이터 객체로 전달
    this.chain.push(newBlock); // 블록체인에 추가
  }
}
