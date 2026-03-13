import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Origami Consulting Group - Premium Strategy'
export const size = { width: 1200, height: 600 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0D1B35', // Navy background
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
            }}
          >
            Origami <span style={{ color: '#7DC242' }}>Consulting</span> Group
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
