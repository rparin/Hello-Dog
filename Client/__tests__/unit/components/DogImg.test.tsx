import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import DogImg from "@/components/DogImg";

expect.extend(toHaveNoViolations);

const IMG = "https://images.dog.ceo/breeds/basenji/n02110806_3702.jpg";
const ALT = "Dog image from https://dog.ceo of type basenji";

test("it should have no accessibility violations", async () => {
  const { container } = render(<DogImg src={IMG} alt={ALT} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("it renders component unchanged", () => {
  const { container } = render(<DogImg src={IMG} alt={ALT} />);
  expect(container).toMatchSnapshot();
});
