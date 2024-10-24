import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import SearchAutoComplete from "@/components/SearchAutoComplete";

describe("testing SearchAutoComplete Accessibility", () => {
  expect.extend(toHaveNoViolations);

  test("it should have no accessibility violations", async () => {
    const { container } = render(<SearchAutoComplete />);
    const results = await act(async () => axe(container));
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<SearchAutoComplete />);
  expect(container).toMatchSnapshot();
});

test("it should show the placeholder text", () => {
  const PLACE_HOLDER = "Hello Dog Placeholder";
  render(<SearchAutoComplete placeholder={PLACE_HOLDER} />);
  const placeholderElement = screen.getByPlaceholderText(PLACE_HOLDER);
  expect(placeholderElement).toBeInTheDocument();
});

test("it should be auto-focused on render", () => {
  render(<SearchAutoComplete autofocus={true} />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveFocus();
});

test("it should not be auto-focused on render", () => {
  render(<SearchAutoComplete autofocus={false} />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).not.toHaveFocus();
});

test("it should show 2 corgi items", async () => {
  render(<SearchAutoComplete />);
  const SEARCH = "corgi";
  const inputElement = screen.getByRole("textbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: SEARCH } });
  expect(inputElement.value).toBe(SEARCH);

  //Search DOM for all elements with 'Welsh Corgi' (case insensitive)
  const items = await screen.findAllByText(/\bwelsh\s+corgi\b/i);
  expect(items).toHaveLength(2);
});

test("it should call useRouter when suggestion is clicked", async () => {
  const routerSpy = jest.spyOn(require("next/navigation"), "useRouter");
  render(<SearchAutoComplete />);

  const SEARCH = "corgi";
  const SUGGESTION = "Pembroke Welsh Corgi";
  const inputElement = screen.getByRole("textbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: SEARCH } });
  expect(inputElement.value).toBe(SEARCH);

  const items = await screen.findByText(SUGGESTION);

  fireEvent.click(items);
  expect(inputElement.value).toBe(SUGGESTION);

  //Router is called once on render, another on suggestion click
  expect(routerSpy).toHaveBeenCalledTimes(2);
});

test("it should call onSubmit on userInput enter", async () => {
  render(<SearchAutoComplete />);

  const handleOnSubmitMock = jest.fn();
  const formElement = screen.getByRole("form");
  formElement.onsubmit = handleOnSubmitMock;

  const SEARCH = "corgi";
  const inputElement = screen.getByRole("textbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: SEARCH } });
  expect(inputElement.value).toBe(SEARCH);

  expect(handleOnSubmitMock).not.toHaveBeenCalled();

  fireEvent.submit(formElement);
  expect(handleOnSubmitMock).toHaveBeenCalled();
});
