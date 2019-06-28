import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("matches snapshot while closed and locked by default", () => {
    const tree = renderer.create(<Dashboard closed={false} locked={false} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
