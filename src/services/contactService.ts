import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../FireBase/FirebaseConfig";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactMessage): Promise<boolean> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Falta la clave de acceso de Web3Forms (VITE_WEB3FORMS_ACCESS_KEY).");
    return false;
  }

  try {
    // 1. Guardar en Firestore (colección "mensajes")
    await addDoc(collection(db, "mensajes"), {
      Nombre: data.name,
      email: data.email,
      asunto: data.subject,
      mensaje: data.message,
      fecha: servermTimestamp(),
    });

    // 2. Enviar email vía Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        from_name: "Contacto Portafolio",
      }),
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    return false;
  }
}
