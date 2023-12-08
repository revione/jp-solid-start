"use client";
import { Show, createSignal, onMount } from "solid-js";
import { debounce } from "lodash";

interface FormDataContact {
  name: string;
  email: string;
  tel: string;
  message: string;
}

const ErrorElement = (props) => (
  <Show when={props.when}>
    <p class="text-red-700" role="alert" aria-live="assertive">
      {props.text}
    </p>
  </Show>
);

const ServerErrorElement = (props) => (
  <Show when={props.when}>
    <p class="text-red-700" role="alert" aria-live="assertive">
      {props.text}
    </p>
  </Show>
);

export const Form = () => {
  const [loading, setLoading] = createSignal(false);
  const [submitSuccess, setSubmitSuccess] = createSignal(false);
  const [allowSend, setAllowSend] = createSignal(false);
  const [serverError, setServerError] = createSignal<string>(undefined);

  const [errors, setErrors] = createSignal<{
    name?: string;
    email?: string;
    tel?: string;
  }>({});

  let nameRef!: HTMLInputElement;
  let telRef!: HTMLInputElement;
  let emailRef!: HTMLInputElement;
  let messageRef!: HTMLTextAreaElement;

  onMount(() => {
    setTimeout(() => {
      nameRef.value = "Johan";
      emailRef.value = "johan@was.de";
      telRef.value = "+123123123";
      messageRef.value = "Sons was?";
    }, 1000);
    setAllowSend(true);
  });

  const genericCleanErrorInput = (inputName: "email" | "tel" | "name") => {
    if (errors()[inputName]) {
      let { [inputName]: _, ...rest } = errors();
      setErrors(rest);
    }

    setTimeout(() => {
      if (!!nameRef.value && !!emailRef.value && !!telRef.value)
        if (Object.keys(errors()).length === 0) setAllowSend(true);
        else if (allowSend && Object.keys(errors()).length > 0)
          setAllowSend(false);
    }, 1500);
    setLoading(false);
  };

  const fetchMail = async (data: FormDataContact) => {
    const response = await fetch("api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response;
  };

  const onSubmit = async () => {
    setLoading(true);

    const data = {
      name: nameRef.value.trim(),
      email: emailRef.value.trim(),
      tel: telRef.value.trim(),
      message: messageRef.value.trim(),
    };

    try {
      const response = await fetchMail(data);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setServerError(
        "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
      setAllowSend(false);
      nameRef.value = "";
      telRef.value = "";
      emailRef.value = "";
      messageRef.value = "";

      setTimeout(() => {
        setSubmitSuccess(false);
        setServerError(undefined);
      }, 3000);
    }
  };

  const validateName = () => {
    let value = nameRef.value.trim();
    if (value.length <= 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Nombre debe de ser mayor a 3 caracteres",
      }));
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    let value = emailRef.value.trim();
    let errorMessage = undefined;

    if (value.length === 0) errorMessage = "Correo electrónico es requerido";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (errorMessage === undefined && !emailRegex.test(value))
      errorMessage = "Correo electrónico no es válido";

    if (errorMessage === undefined) return true;

    setErrors((prev) => ({
      ...prev,
      email: errorMessage,
    }));

    return false;
  };

  const validateTel = () => {
    let value = telRef.value.trim();
    let errorMessage = undefined;

    if (value.length === 0) errorMessage = "Teléfono es requerido";

    const isPlusPrefixed = value.startsWith("+");
    const numericPart = isPlusPrefixed ? value.slice(1) : value;

    const phoneRegex = /^\d{7,}$/;
    if (errorMessage === undefined && !phoneRegex.test(numericPart))
      errorMessage = "Teléfono ha de ser mas de 7 caracteres";

    if (errorMessage === undefined) return true;

    setErrors((prev) => ({
      ...prev,
      tel: errorMessage,
    }));

    return false;
  };

  return (
    <div>
      <div class="text-[24px] xl:text-[41px] font-bold font-gopher text-center">
        ¿Quieres compartirme algo?
      </div>
      <div class="flex flex-col gap-[8px] xl:gap-[22px] px-[50px] xl:px-[95px] mt-1 xl:mt-5 text-white xl:text-[22px]">
        <ServerErrorElement when={!!serverError()} text={serverError()} />

        <label for="name">
          <div>Nombre:</div>
          <input
            id="name"
            type="text"
            aria-label="Nombre"
            ref={nameRef}
            maxlength="40"
            onInput={() => {
              debounce(validateName, 1000)();
              genericCleanErrorInput("name");
            }}
            class={`w-full bg-[#FAFAFA] rounded-md h-[28px] xl:h-[46px] border-2 ${
              errors().name ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
          <ErrorElement when={!!errors().name} text={errors().name} />
        </label>

        <label for="email">
          <div>Correo electrónico:</div>
          <input
            id="email"
            type="text"
            aria-label="Correo"
            ref={emailRef}
            maxlength="40"
            onInput={() => {
              debounce(validateEmail, 1500)();
              genericCleanErrorInput("email");
            }}
            class={`w-full bg-[#FAFAFA] rounded-md h-[28px] xl:h-[46px] border-2 ${
              errors().email ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
          <ErrorElement when={!!errors().email} text={errors().email} />
        </label>

        <label for="tel">
          <div>Teléfono:</div>
          <input
            id="tel"
            type="text"
            aria-label="Telefono"
            ref={telRef}
            onInput={(e) => {
              const inputValue = e.currentTarget.value;
              const sanitizedValue = inputValue.replace(/[^+\d]/g, "");
              e.currentTarget.value = sanitizedValue;
              debounce(validateTel, 1000)();
              genericCleanErrorInput("tel");
            }}
            maxlength="20"
            class={`w-full bg-[#FAFAFA] rounded-md h-[28px] xl:h-[46px] border-2 ${
              errors().tel ? "border-red-500" : "border-[#122E3F]"
            } text-[#071E2C] px-[7px]`}
          />
          <ErrorElement when={!!errors().tel} text={errors().tel} />
        </label>

        <label for="message">
          <div>Tu mensaje (opcional)</div>
          <textarea
            id="message"
            aria-label="Mensaje"
            ref={messageRef}
            class={`w-full bg-[#FAFAFA] rounded-md h-[120px] xl:h-[196px] border-2 border-[#122E3F] text-[#071E2C] px-[7px]`}
          />
        </label>
        <div>
          <button
            type="button"
            class="flex justify-center items-center text-[13px] xl:text-[16px] font-bold bg-[#09202E] rounded-md h-[28px] xl:h-[40px] w-full xl:w-[320px] m-auto xl:mt-[16px] disabled:opacity-70"
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            onClick={onSubmit}
            disabled={!allowSend() || loading()}
          >
            {loading() ? "Enviando..." : "Enviar"}
          </button>
          {submitSuccess() && (
            <p class="text-center">¡Formulario enviado con éxito!</p>
          )}
        </div>
      </div>
    </div>
  );
};
