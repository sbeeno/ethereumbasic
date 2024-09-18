import BlockData from "./BlockData";

export default class BlockChain {
  // TODO 1: BlockChain 클래스의 chain 속성에 제네시스 블록을 추가
  constructor() {
    this.chain = []; // 블록체인 초기화

    // 제네시스 블록 생성
    const genesisBlockData = "Genesis Block"; // 제네시스 블록의 초기 데이터
    const genesisBlock = new BlockData(genesisBlockData); // BlockData 클래스를 사용하여 제네시스 블록 생성
    this.chain.push(genesisBlock);
  }
}
