
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Pokédex <onboarding@resend.dev>",
            to: [process.env.EMAIL!],
            replyTo: email,
            subject: `[Pokédex] ${subject}`,
            text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
        });

        if (error) {
            return Response.json({ error: error.message }, { status: 400 });
        }

        return Response.json({ success: true, data });
    } catch {
        return Response.json(
            { error: "Não foi possível enviar a mensagem." },
            { status: 500 }
        );
    }
}
