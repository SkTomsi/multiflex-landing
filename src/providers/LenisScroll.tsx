'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

function LenisScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;
