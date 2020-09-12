import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import App from '../App';

test("Fetches data and renders the bubbles", () => {
  // const {getByTestId} = render(<BubblePage />);
  // const bubbles = getByTestId(/bubble/i);
  // expect(bubbles).toHaveLength(11);

  // const {getByTestId, rerender} = render(<App/>)
  // const username = getByTestId(/username/i)
  // const password = getByTestId(/password/i)
  // fireEvent.change(username, { target: { value: 'Lambda School' } })
  // fireEvent.change(password, { target: { value: 'i<3Lambd4' } })
  // expect(username.value).toBe('Lambda School')
  // expect(password.value).toBe('i<3Lambd4')
  // const leftClick = { button: 1 }
  // const button = getByTestId(/loginbtn/i)
  // fireEvent.click(button, leftClick)
  // const button = getByTestId(/loginbtn/i)
  // fireEvent.click(button)
  const {getByTestId} = render(<BubblePage />)
  const bubbles = getByTestId('/bubble/i')
  expect(bubbles).toHaveLength(11)
});