import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("matches snapshot while closed and locked by default", () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("displays unlocked and open by default", () => {
    const message1 = "Unlocked";
    const message2 = "Open";

    const { getByText } = render(<Dashboard />);
    getByText(message1);
    getByText(message2);
  });
});
