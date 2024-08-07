/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import products from "../data/products";
import userEvent from "@testing-library/user-event";

jest.mock("../data/products", () => [
  {
    id: 1,
    name: "Product 1",
    company: "Company A",
    category: "Category 1",
    type: "Type 1",
    imageUrl: "url1",
  },
  {
    id: 2,
    name: "Product 2",
    company: "Company B",
    category: "Category 2",
    type: "Type 2",
    imageUrl: "url2",
  },
]);

jest.mock("../components/ProductCard", () => ({ product, loading }) => (
  <div data-testid="product-card">{product.name}</div>
));

jest.mock("../components/NoResults", () => () => (
  <div data-testid="no-results">No Results</div>
));

jest.mock("../components/Utils", () => ({
  getPageTitle: (company, category) =>
    `${company || ""} ${category || ""}`.trim(),
}));

describe("Products Page", () => {
  const renderComponent = (path) =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/products/:category?/:company?" element={<Products />} />
        </Routes>
      </MemoryRouter>
    );

  it("should render the products page without crashing", () => {
    renderComponent("/products");
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should display products based on search query", async () => {
    renderComponent("/products?search=Product 1");
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
    });
  });

  it("should filter products by category", async () => {
    renderComponent("/products/Category 1");
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
    });
  });

  it("should filter products by company", async () => {
    renderComponent("/products/Category 1/Company A");
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
    });
  });

  it('should display "No Results" when no products match the criteria', async () => {
    renderComponent("/products?search=NonExistentProduct");
    await waitFor(() => {
      expect(screen.getByTestId("no-results")).toBeInTheDocument();
    });
  });
});
