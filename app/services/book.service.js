const { ObjectId } = require("mongodb");
class BookService {
  constructor(client) {
    this.Book = client.db().collection("books");
  }
  // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractBookData(payload) {
      const book = {
        maSach: payload.maSach,
        tenSach: payload.tenSach,
        docGia: payload.donGia,
        soQuyen: payload.soQuyen,
        namXuatBan: payload.namXuatBan,
        maNXB: payload.maNXB,
        tacGia: payload.tacGia,
      };
    // Remove undefined fields
    Object.keys(book).forEach(
      (key) => book[key] === undefined && delete book[key]
    );
    return book;
  }
  async create(payload) {
    const book = this.extractBookData(payload);
    const result = await this.Book.findOneAndUpdate(
      book,
    );
    return result.value;
  }
}

module.exports = BookService;
