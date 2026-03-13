import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name;

    const { data, error } = await resend.emails.send({
      from: 'Origami Valoracion <onboarding@resend.dev>', // Usar dominio de prueba o uno verificado
      to: ['alianzas@oriconsultoria.com'],
      subject: `Nueva Valoración: ${filename}`,
      text: `Se ha recibido un nuevo formulario de valoración de un cliente.\n\nArchivo adjunto: ${filename}`,
      attachments: [
        {
          filename: filename,
          content: buffer,
        },
      ],
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
