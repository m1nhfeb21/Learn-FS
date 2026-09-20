import React from "react";
import NewsletterButton from "./NewsletterButton";

type NewsletterFormProps = {
  onSubmit: () => void;
};
function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Nhập email"></input>
      <NewsletterButton />
    </form>
  );
}

export default NewsletterForm;
