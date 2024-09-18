import sha256 from "crypto-js/sha256";

export default class Block {
  constructor(data) {
    this.data = data; // 블록에 저장될 데이터
  }

  // TODO: sha256 함수를 이용하여 문자열을 해시값으로 변환한 뒤 반환해보세요.
  toHash() {
    return sha256(this.data).toString(); // 문자열 데이터의 해시 값을 반환
  }
}
