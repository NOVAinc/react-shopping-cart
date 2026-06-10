import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, it } from "vitest";
import UserEvent, { userEvent } from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "./routes";

describe("App navigation", () => {
  it("Shows home page by default", () => {
    render(<RouterProvider router={routes} />);
    const user = userEvent.setup();

    screen.debug();

    expect(screen.getByTestId("home")).toBeInTheDocument();

    expect(screen.queryByTestId("catalog")).not.toBeInTheDocument();
    expect(screen.queryByTestId("checkout")).not.toBeInTheDocument();
  });

  it("Shows Catalog", async () => {
    render(<RouterProvider router={routes} />);
    const user = userEvent.setup();

    await user.click(screen.getByTestId("catalog-link"));

    screen.debug();

    const catalog = await screen.findByTestId("catalog");

    expect(catalog).toBeInTheDocument();

    expect(screen.queryByTestId("home")).not.toBeInTheDocument();
    expect(screen.queryByTestId("checkout")).not.toBeInTheDocument();
  });

  it("Shows Checkout", async () => {
    render(<RouterProvider router={routes} />);
    const user = userEvent.setup();

    await user.click(screen.getByTestId("checkout-link"));

    screen.debug();

    const checkout = await screen.findByTestId("checkout");

    expect(checkout).toBeInTheDocument();

    expect(screen.queryByTestId("home")).not.toBeInTheDocument();
    expect(screen.queryByTestId("catalog")).not.toBeInTheDocument();
  });

  it("Shows Home again", async () => {
    render(<RouterProvider router={routes} />);
    const user = userEvent.setup();

    await user.click(screen.getByTestId("home-link"));

    screen.debug();

    const home = await screen.findByTestId("home");

    expect(home).toBeInTheDocument();
    expect(screen.queryByTestId("catalog")).not.toBeInTheDocument();
    expect(screen.queryByTestId("checkout")).not.toBeInTheDocument();
  });
});
