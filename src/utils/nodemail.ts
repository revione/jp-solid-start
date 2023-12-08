import nodemailer from "nodemailer";

const SERVICE = import.meta.env.VITE_EMAIL_SERVICE;
const USER = import.meta.env.VITE_EMAIL_USER;
const PASSWORD = import.meta.env.VITE_EMAIL_PASSWORD;

interface FormDataContact {
  name: string;
  email: string;
  tel: string;
  message: string;
}

export const sendTheEmail = async (data: FormDataContact) => {
  if (!SERVICE || !USER || !PASSWORD) {
    throw new Error(
      "Configuración de correo electrónico incompleta. Verifica las variables de entorno."
    );
  }

  try {
    const transport = nodemailer.createTransport({
      service: SERVICE,
      auth: {
        user: USER,
        pass: PASSWORD,
      },
    });

    // const result = await transport.verify((err, success) => {
    //   if (err) console.error(err);
    //   console.log("Your config is correct");
    // });

    const result = await transport.sendMail({
      from: USER,
      to: "revi-pruebas@outlook.com",
      subject: "Data del formulario",
      text: `Data del formulario ${JSON.stringify(data, null, 2)}`,
      html: `
<div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 10px; margin: 20px;">
  <h1 style="color: #333; text-align: center; margin-bottom: 20px;">Información del formulario</h1>
  <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h2 style="color: #555; margin-bottom: 15px; font-size: 18px;">Detalles del formulario:</h2>
    <pre style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; overflow-x: auto;">
${JSON.stringify(data, null, 2)}
    </pre>
  </div>
</div>
`,
    });

    // console.log({ result });
    return result;
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    throw error;
  }
};
