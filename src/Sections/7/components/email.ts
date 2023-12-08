import emailjs from "@emailjs/browser";

// const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
// const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
// const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
// const to = import.meta.env.VITE_EMAIL_TO_;

const serviceID = "import.meta.env.VITE_EMAIL_SERVICE_ID";
const templateID = "import.meta.env.VITE_EMAIL_TEMPLATE_ID";
const publicKey = "import.meta.env.VITE_EMAIL_PUBLIC_KEY";
const to = "import.meta.env.VITE_EMAIL_TO_";

export const sendContact = (
  templatePrams: Record<string, unknown> | undefined
) => emailjs.send(serviceID, templateID, { ...templatePrams, to }, publicKey);
