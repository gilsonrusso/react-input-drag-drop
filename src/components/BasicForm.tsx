import { Field, Formik } from "formik";
import { InputField } from "./InputField";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type Question = {
  id: string;
  sentenca: string;
};

export const BasicForm = () => {
  const [perguntas, setPerguntas] = useState<Question[]>([]);
  const [isDragging, setIsDragging] = useState(false); // Estado para indicar arraste
  const dropAreaRef = useRef<HTMLDivElement | null>(null);

  const processFile = (file: File) => {
    if (file && file.type === "application/json") {
      console.log({ file });
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("Resultado do FileReader:", e.target?.result); // Log para verificar o resultado
        try {
          if (e.target && e.target.result) {
            const dados = JSON.parse(e.target.result as string);
            setPerguntas(dados);
          }
        } catch (error) {
          console.error("Erro ao analisar o arquivo JSON:", error);
        }
      };
      reader.readAsText(file);
    } else {
      alert("Por favor, selecione um arquivo JSON válido.");
    }
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }
    const file = event.target.files[0];
    processFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      console.log("Tamanho do arquivo recebido:", file.size); // Adicione este log
      if (file.type === "application/json") {
        processFile(file);
      } else {
        alert("Por favor, solte um arquivo JSON válido.");
      }
    }
    setIsDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true); // Indicar que o arquivo está sendo arrastado
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false); // Remover estado de arraste
  };

  useEffect(() => {
    console.log("Área de drop registrada:", dropAreaRef.current);
  }, []);

  return (
    <div>
      <div
        className={`border border-dashed p-10 ${
          isDragging ? "border-green-500" : "border-purple-400"
        }`}
        ref={dropAreaRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <InputField onChange={handleFile} />
        <p>Arraste e solte o arquivo JSON</p>
      </div>
      <h1>My Form</h1>

      {!perguntas.length ? (
        <div>Nao ha registros de perguntas</div>
      ) : (
        <Formik
          initialValues={{ perguntas: perguntas }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              {perguntas.map((pergunta) => (
                <div key={pergunta.id}>
                  <label htmlFor={`id-${pergunta.id}`}>ID: {pergunta.id}</label>
                  <Field
                    type="text"
                    id={`sentenca-${pergunta.id}`}
                    name={`sentenca-${pergunta.id}`}
                    value={pergunta.sentenca}
                    disabled
                  />
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};
