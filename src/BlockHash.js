import sha256 from "crypto-js/sha256";

export default class BlockHash {
  constructor(data, previousHash = null) {
    this.data = data; // data는 객체로 유지
    this.previousHash = previousHash; // 이전 해시 값
  }

  toHash() {
    // data와 previousHash를 결합하여 해시값을 반환
    return sha256(
      JSON.stringify(this.data) + (this.previousHash || "")
    ).toString();
  }
}
