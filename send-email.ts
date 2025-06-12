"use server";
import nodemailer from "nodemailer";

export async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "szymon.osinski.2009@gmail.com",
        pass: "vepm mdtu dbry fiae",
      },
    });

    const mailOption = {
      from: email,
      to: "biuro@on-tech.net.pl",
      subject: "Nowa wiadomość od użytkownika",
      html: `
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Wiadomość:</strong> ${message}</p>
    `,
    };

    await transporter.sendMail(mailOption);

    return { success: true, error: "" };
  } catch (err) {
    console.error("Błąd podczas wysyłania maila:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Nieznany błąd",
    };
  }
}
