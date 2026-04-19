import React from 'react';
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("my suite", () => {
  it("Renders", () => {
    render(<App />);

    screen.debug();
  });
});
