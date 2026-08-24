import React from "react";
import { BookItem } from "./BookItem";

type books = {
  id: number;
  title: string;
  author: string;
};
type BookStoreState = {
  books: books[];
};

export default class BookStore extends React.Component<{}, BookStoreState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: "Dế mèn phiên lưu ký", author: "Tô Hoài" },
        {
          id: 2,
          title: "Lão Hạc",
          author: "Nam Cao",
        },
        {
          id: 3,
          title: "Tắt Đèn",
          author: "Ngô Tất Tố",
        },
      ],
    };
  }

  clearBook = () => {
    this.setState({
      books: [],
    });
  };

  addBook = () => {
    this.setState((prevState) => ({
      books: [
        ...prevState.books,
        { id: Date.now(), title: "Sách mới", author: "Tác giả mới" },
      ],
    }));
  };
  render() {
    return (
      <div>
        <h1> Kho sách</h1>
        {this.state.books.length === 0 ? (
          <p>Hiện chưa có cuốn sách nào trong kho</p>
        ) : (
          this.state.books.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))
        )}

        <button onClick={this.addBook}>Thêm sách</button>
        <button onClick={this.clearBook}>Xóa toàn bộ</button>
      </div>
    );
  }
}
