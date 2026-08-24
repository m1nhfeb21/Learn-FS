type BookItemsProps = {
  id: number;
  title: string;
  author: string;
};

export function BookItem({ id, title, author }: BookItemsProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Mã sách: {id}</p>
      <p>Tác giả: {author}</p>
    </div>
  );
}

// export default BookItem
