import React from "react";
import { mount } from "enzyme";
import NewsletterForm from "./NewsletterForm";

describe("NewsletterForm Intergration Test", () => {
  it("Gọi onSubmit khi form được submit", () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(<NewsletterForm onSubmit={mockSubmit} />);

    wrapper.find("form").simulate("submit");
    expect(mockSubmit).toHaveBeenCalled();

    wrapper.unmount();
  });
});
