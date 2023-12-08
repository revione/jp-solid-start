import { sendTheEmail } from "~/utils/nodemail";

export async function POST(event) {
  try {
    const data = await event.request.json();

    // Llama a la función que envía el correo electrónico
    await sendTheEmail(data);

    // Si la función anterior no arroja excepciones, significa que se procesó con éxito
    return new Response("Procesado con éxito", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);

    // Si hubo algún error, devuelve una respuesta de error
    return new Response("Procesado sin éxito", {
      status: 500,
      statusText: "Procesado sin éxito",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
