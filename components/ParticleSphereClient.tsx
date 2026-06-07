'use client';
import dynamic from 'next/dynamic';

const ParticleSphere = dynamic(() => import('@/components/ParticleSphere'), { ssr: false });

export default function ParticleSphereClient() {
  return <ParticleSphere />;
}
