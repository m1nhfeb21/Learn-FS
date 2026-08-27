import React from "react";

type Card = {
  id: number;
  title: string;
  service: string;
  content: string;
  price: number | null;
  borderColor: string;
};
export default function PricingCard({
  id,
  title,
  service,
  content,
  price,
  borderColor,
}: Card) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "250px",
      }}
    >
      <p>Mã sách: {id}</p>
      <p>Tiêu đề: {title}</p>
      <p>
        Dịch vụ: <strong>{service}</strong>
      </p>
      <p>Nội dung: {content}</p>

      <p>
        Giá:{" "}
        {price === 0 || price === null
          ? "Liên hệ"
          : `${price.toLocaleString()} VND`}
      </p>
    </div>
  );
}
