import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SelectionPanel } from "./SelectionPanel";

describe("SelectionPanel", () => {
  describe("SelectionPanel", () => {
    it("should render the SelectionPanel component", () => {
      const onClickMock = jest.fn();
      render(<SelectionPanel typeReceived="fullName" onClick={onClickMock} />);
      expect(SelectionPanel).toBeTruthy();
    });

    it("should display the correct label based on typeReceived prop", () => {
      const onClickMock = jest.fn();
      render(<SelectionPanel typeReceived="firstName" onClick={onClickMock} />);
      expect(screen.getByLabelText("Primeiro Nome")).toBeInTheDocument();
    });

    it("should show validation error when name is empty and form is submitted", async () => {
      const onClickMock = jest.fn();
      render(<SelectionPanel typeReceived="fullName" onClick={onClickMock} />);

      fireEvent.click(screen.getByText("Submit"));

      expect(
        await screen.findByText("name is a required field")
      ).toBeInTheDocument();
    });

    it("should update the name field value when typing", () => {
      const onClickMock = jest.fn();
      render(<SelectionPanel typeReceived="fullName" onClick={onClickMock} />);

      const nameInput = screen.getByLabelText("Primeiro Nome");
      fireEvent.change(nameInput, { target: { value: "John Doe" } });

      expect(nameInput).toHaveValue("John Doe");
    });

    it("should update the choice field value when selecting an option", async () => {
      render(<SelectionPanel typeReceived="fullName" onClick={jest.fn()} />);

      // Abre o Select clicando no botão que representa o select do MUI
      const select = screen.getByLabelText("Escolha");
      fireEvent.mouseDown(select);

      // Aguarda o item aparecer no DOM e clica nele
      const firstNameOption = await screen.findByText("First Name");
      fireEvent.click(firstNameOption);

      screen.logTestingPlaygroundURL();

      // Verifica se o valor visível agora é "First Name"
      const updatedSelect = screen.getByRole("combobox", {
        name: /first name/i,
      });
      expect(updatedSelect).toBeInTheDocument();
    });

    it("should call onSubmit with form values when form is submitted", () => {
      const onClickMock = jest.fn();
      render(<SelectionPanel typeReceived="fullName" onClick={onClickMock} />);

      const nameInput = screen.getByLabelText("Nome Completo");
      fireEvent.change(nameInput, { target: { value: "John Doe" } });

      const selectInput = screen.getByLabelText("Escolha");
      fireEvent.mouseDown(selectInput);
      fireEvent.click(screen.getByText("First Name"));

      fireEvent.click(screen.getByText("Submit"));

      expect(window.alert).toHaveBeenCalledWith(
        JSON.stringify({ name: "John Doe", choise: "First Name" }, null, 2)
      );
    });
  });
});
