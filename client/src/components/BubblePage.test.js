import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from "../utils/fetchBubbles";

jest.mock("../utils/fetchBubbles");

let data = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
];

test("Fetches data and renders the bubbles", async () => {
  mockFetchBubbles.mockResolvedValueOnce(data);

  await render(<BubblePage />);
  waitFor(() => {
    const bubble = screen.getByTestId(/bubble/i);
    expect(bubble).toHaveLength(2);
  });
});