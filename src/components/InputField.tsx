import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input">;

export const InputField = ({ ...rest }: InputFieldProps) => {
  return (
    <>
      <label htmlFor="dropzone">
        <span className="hover:text-purple-500 cursor-pointer">
          Selecione o Arquivo
        </span>
      </label>
      <input
        {...rest}
        id="dropzone"
        className="sr-only"
        type="file"
        accept="application/json"
      />
    </>
  );
};
