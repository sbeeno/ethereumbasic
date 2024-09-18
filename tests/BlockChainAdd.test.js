import BlockData from "../src/BlockData";
import BlockChainAdd from "../src/BlockChainAdd";

describe("BlockChainAdd", () => {
  let blockChain;

  beforeEach(() => {
    blockChain = new BlockChainAdd();
  });

  it("addBlock 함수를 가지고 있어야 한다.", () => {
    expect(typeof blockChain.addBlock).toBe("function");
  });

  describe("블록 추가", () => {
    let data1;
    let data2;

    beforeEach(() => {
      data1 = "Some data";
      data2 = "Some other data";
      blockChain.addBlock(data1);
      blockChain.addBlock(data2);
    });

    it("총 3개의 블록으로 구성되어야 한다.", () => {
      expect(blockChain.chain.length).toBe(3); // 제네시스 블록을 포함하여 총 3개
    });

    it("추가된 두 개의 블록이 체인에 들어있어야 한다.", () => {
      expect(blockChain.chain[1].data).toBe(data1);
      expect(blockChain.chain[2].data).toBe(data2);
    });
  });
});
