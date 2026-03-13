import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined');
      return NextResponse.json({ error: 'Configuración de servidor incompleta' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name;

    const { data, error } = await resend.emails.send({
      from: 'Origami Valoracion <onboarding@resend.dev>', // Usar dominio de prueba o uno verificado
      to: ['arturmorarosero@gmail.com'],
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
      console.error('Resend API Error:', error);
      return NextResponse.json({ 
        error: error.message || 'Error en el servicio de Resend',
        details: error 
      }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server Catch Error:', error);
    return NextResponse.json({ 
      error: (error as Error).message || 'Error interno del servidor' 
    }, { status: 500 });
  }
}
