export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactMessage): Promise<boolean> {
  // Web3Forms access key from environment variables
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  if (!accessKey) {
    console.error("Falta la clave de acceso de Web3Forms (VITE_WEB3FORMS_ACCESS_KEY). Por favor configúrala en tu archivo .env.");
    return false;
  }

  try {
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
    console.error("Error al enviar el correo:", error);
    return false;
  }
}
