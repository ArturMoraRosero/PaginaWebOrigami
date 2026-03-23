import { ImageResponse } from 'next/og'
 

export const alt = 'Origami Consulting Group - Consultoría Estratégica'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0D1B35', // Navy background to match the site
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Subtle geometric background hint */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at center, rgba(30, 61, 122, 0.5) 0%, rgba(13, 27, 53, 1) 100%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: '#fff',
              fontSize: 80,
              fontWeight: 700,
              fontFamily: 'sans-serif',
              letterSpacing: '-0.02em',
              marginBottom: 20,
              textAlign: 'center',
              display: 'flex',
            }}
          >
            Origami <span style={{ color: '#7DC242' }}>Consulting</span> Group
          </div>
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 40,
              fontFamily: 'sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Estrategia • Crecimiento • Valoración
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
