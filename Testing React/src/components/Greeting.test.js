import Greeting from "./Greeting";
//userEvent lets us trigger events in this virtual screen(testing env.)
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
//describes the component we want to use then a anon function as a 2nd param
describe("Greeting component", () => {
  test("Tests state", () => {
    //Arrange
    render(<Greeting />);

    //Act ...Nothing

    //Assert
    const HelloWorld = screen.getByText("Hello World!", { exact: false });
    expect(HelloWorld).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const paragraphOutput = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphOutput).toBeInTheDocument();
  });

  test("render changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button", { name: /change Text/i });
    userEvent.click(buttonElement);
    //Assert
    const paragraphOutput = screen.getByText("Changed!");
    expect(paragraphOutput).toBeInTheDocument();
  });

  test("doesn't render 'good to see you' if the button wasn't clicked", () => {
        //Arrange
        render(<Greeting />);

        //Act set up a fake/virtual event scenario on a dom element 
        const buttonElement = screen.getByRole("button", { name: /change Text/i });
        userEvent.click(buttonElement);

        //Assert
        const paragraphOutput = screen.queryByText("good to see you", { exact: false });
        expect(paragraphOutput).toBeNull();
  });
});
