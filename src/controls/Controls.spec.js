import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("provides buttons to toggle the close and locked states", () => {
    const { getByTestId } = render(<Controls />);

    const closeButton = getByTestId("closeButton");
    const lockButton = getByTestId("lockButton");
    expect(closeButton).toBeVisible();
    expect(lockButton).toBeVisible();
  });
  it("lock button changes text to reflect door state", () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Controls closed={true} toggleLocked={mock} />
    );
    const lockButton = getByTestId("lockButton");

    fireEvent.click(lockButton);

    expect(mock).toHaveBeenCalled();
  });
  it("close button changes text to reflect door state", () => {
    const mock = jest.fn();
    const { getByTestId } = render(<Controls toggleClosed={mock} />);
    const closeButton = getByTestId("closeButton");

    fireEvent.click(closeButton);

    expect(mock).toHaveBeenCalled();
  });
  it("close button is disabled if the gate is locked", () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Controls locked={true} toggleLocked={mock} />
    );
    const closeButton = getByTestId("closeButton");

    fireEvent.click(closeButton);

    expect(mock).toHaveBeenCalledTimes(0);
  });
  it("the lock button is disabled if the gate is open", () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Controls closed={false} toggleClosed={mock} />
    );
    const lockButton = getByTestId("lockButton");

    fireEvent.click(lockButton);

    expect(mock).toHaveBeenCalledTimes(0);
  });
});
