import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

it("displays closed if gate is closed", () => {
  const { getByText } = render(<Display closed={true} />);

  getByText("Closed");
});
it("displays open if gate is open", () => {
  const { getByText } = render(<Display closed={false} />);

  getByText("Open");
});
it("displays locked if locked", () => {
  const { getByText } = render(<Display locked={true} />);

  getByText("Locked");
});
it("displays unlocked if locked", () => {
  const { getByText } = render(<Display locked={false} />);

  getByText("Unlocked");
});
it("when locked or closed use the red-led class", () => {
  const { getByText } = render(<Display locked={true} closed={true} />);
  const indicator1 = getByText("Locked");
  const indicator2 = getByText("Closed");
  expect(indicator1).toHaveClass("red-led");
  expect(indicator2).toHaveClass("red-led");
});

it("when unlocked or open use the green-led class", () => {
  const { getByText } = render(<Display locked={false} closed={false} />);
  const indicator1 = getByText("Unlocked");
  const indicator2 = getByText("Open");
  expect(indicator1).toHaveClass("green-led");
  expect(indicator2).toHaveClass("green-led");
});
