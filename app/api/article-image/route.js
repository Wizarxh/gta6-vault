import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'GTA6 Vault';
  const status = searchParams.get('status') || 'VERIFIED';
  const category = searchParams.get('category') || 'News';

  // Status colors
  const statusColors = {
    VERIFIED: { bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', text: '#10b981' },
    RUMOR: { bg: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', text: '#fbbf24' },
    DEBUNKED: { bg: 'linear-gradient(135deg, #FF6B9D 0%, #ff1493 100%)', text: '#FF6B9D' },
  };

  const colors = statusColors[status] || statusColors.VERIFIED;

  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            background: colors.bg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 50%)',
            }}
          />

          {/* Grid overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(0deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              color: 'white',
              maxWidth: '1000px',
              padding: '60px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            {/* Status badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: colors.text,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: colors.text,
                }}
              />
              {status}
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '64px',
                fontWeight: '900',
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>

            {/* Category */}
            <div
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: '500',
              }}
            >
              {category}
            </div>
          </div>

          {/* Logo bottom-right */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '40px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: '#FF6B9D' }}>GTA</span>
            <span style={{ color: '#00D4FF' }}>6</span>
            <span>VAULT</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('OG Image generation error:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
