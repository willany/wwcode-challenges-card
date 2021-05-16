import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders card", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    /Willany Silva/i
  );

  expect(
    screen.getByText(
      "Software engineer no iFood formada em Tecnologia em Sistemas para internet. Sempre trabalhei como full stack mas hoje estou focada em frontend, de vez em quando faço umas gracinhas com Ruby on Rails 💟"
    )
  ).toBeInTheDocument();

  expect(
    screen.getByAltText(/Mulher com um computador no colo/i)
  ).toBeInTheDocument();

  expect(
    screen.getByAltText(/Ícone do Linkedin/i).closest("a")
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/willany-silva-abb14726/"
  );

  expect(screen.getByAltText(/Ícone do Github/i).closest("a")).toHaveAttribute(
    "href",
    "https://github.com/willany"
  );

  expect(
    screen.getByAltText(/Ícone do Instagram/i).closest("a")
  ).toHaveAttribute("href", "https://www.instagram.com/willanysilva/");
});
