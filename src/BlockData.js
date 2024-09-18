import sha256 from "crypto-js/sha256";

export default class BlockData {
  constructor(data) {
    this.data = data;
    this.previousHash = null; // 이전 블록의 해시값을 저장하기 위한 속성
  }

  toHash() {
    return sha256(this.data + (this.previousHash || "")).toString();
  }
}
