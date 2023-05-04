import { ImageResponse } from 'next/server';
import { equipmentPic } from '@/public/img'

export const alt = 'RevoluTRON';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = equipmentPic;

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        RevoluTRON
      </div>
    ),
    size,
  );
}
