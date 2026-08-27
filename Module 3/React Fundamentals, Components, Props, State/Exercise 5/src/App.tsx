import React from "react";
import PricingCard from "./PricingCard";
import { useState } from "react";

type Card = {
  id: number;
  title: string;
  service: string;
  content: string;

  price: number | null;
  borderColor: string;
};

export default function CardList() {
  const [title, setTitle] = useState("");
  const [service, setService] = useState("Basic");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [borderColor, setBorderColor] = useState("blue");
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      title: "Gói cơ bản",
      service: "Basic",
      content: "Dành cho người dùng cá nhân",
      price: 99000,
      borderColor: "blue",
    },
    {
      id: 2,
      title: "Gói chuyên nghiệp",
      service: "Pro",
      content: "Dành cho người dùng chuyên nghiệp",
      price: 199000,
      borderColor: "green",
    },
    {
      id: 3,
      title: "Gói doanh nghiệp",
      service: "Enterprise",
      content: "Dành cho doanh nghiệp",
      price: null,
      borderColor: "red",
    },
  ]);

  const handleAddCard = () => {
    if (title.trim() === "" || content.trim() === "") {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const newCard: Card = {
      id: Date.now(),
      title: title,
      service: service,
      content: content,
      price: price,
      borderColor: borderColor,
    };

    setCards([...cards, newCard]);

    setTitle("");
    setContent("");
    setService("");
    setError("");
    setPrice(null);
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2>Thêm card</h2>

        <label htmlFor="title">Nhập tiêu đề</label>
        <input
          id="title"
          type="text"
          placeholder="Tiêu đề truyện..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        <label htmlFor="content">Nhập nội dung</label>
        <input
          id="content"
          type="text"
          placeholder="Nhập nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>

        <label htmlFor="price">Giá tiền</label>
        <input
          id="price"
          type="number"
          placeholder="Nhập giá"
          value={price ?? ""}
          onChange={(e) =>
            setPrice(e.target.value === "" ? null : Number(e.target.value))
          }
        />

        <label htmlFor="borderColor">Màu viền</label>
        <input
          id="borderColor"
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />

        <button onClick={handleAddCard}>Thêm card</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {cards.map((card) => (
          <PricingCard
            key={card.id}
            id={card.id}
            title={card.title}
            service={card.service}
            content={card.content}
            price={card.price}
            borderColor={card.borderColor}
          ></PricingCard>
        ))}
      </div>
    </>
  );
}
