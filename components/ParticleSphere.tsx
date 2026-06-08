'use client';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement!;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const numNodes = 100;
    const radius = 150;
    const focalLength = 300;
    const itTerms = ['Cloud Systems','Cybersecurity','Mobile Apps','Web Platforms','Odoo ERP','DevOps','AI Automation','Custom APIs','Data Analytics','UI/UX Design'];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const nodes: { x: number; y: number; z: number; label: string | null }[] = [];
    for (let i = 0; i < numNodes; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / numNodes);
      nodes.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        label: (i % 10 === 0 && i / 10 < itTerms.length) ? itTerms[i / 10] : null,
      });
    }

    let rotX = 0.002, rotY = 0.003;
    let targetRotX = 0.002, targetRotY = 0.003;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left - width / 2;
      const my = e.clientY - rect.top - height / 2;
      targetRotX = (my / (height / 2)) * 0.02;
      targetRotY = (mx / (width / 2)) * 0.02;
    };
    const onMouseLeave = () => { targetRotX = 0.002; targetRotY = 0.003; };
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      rotX += (targetRotX - rotX) * 0.1;
      rotY += (targetRotY - rotY) * 0.1;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      const projected: { x: number; y: number; z: number; scale: number }[] = [];
      nodes.forEach(node => {
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;
        node.x = x1; node.y = y2; node.z = z2;
        const scale = focalLength / (focalLength + z2);
        projected.push({ x: x1 * scale + width / 2, y: y2 * scale + height / 2, z: z2, scale });
      });

      ctx.lineWidth = 0.8;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          if (dx*dx + dy*dy + dz*dz < 3025) {
            const avgZ = (projected[i].z + projected[j].z) / 2;
            const alpha = (1 - (avgZ + radius) / (2 * radius)) * 0.15;
            ctx.strokeStyle = `rgba(0,86,210,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      const isDark = resolvedTheme === 'dark';
      projected.forEach((node, idx) => {
        const alpha = (1 - (node.z + radius) / (2 * radius)) * 0.8;
        const size = node.scale * 3.5;
        ctx.fillStyle = `rgba(0,86,210,${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
        ctx.fill();
        if (node.z < -20) {
          ctx.fillStyle = `rgba(255,84,33,${alpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 0.4, 0, 2 * Math.PI);
          ctx.fill();
        }
        const orig = nodes[idx];
        if (orig.label && node.z < 30) {
          ctx.fillStyle = isDark ? `rgba(248,250,252,${alpha * 0.95})` : `rgba(14,27,77,${alpha * 0.95})`;
          ctx.font = `600 ${Math.max(9, node.scale * 11)}px 'Plus Jakarta Sans', sans-serif`;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(orig.label, node.x + size + 7, node.y);
        }
      });

      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <div className="canvas3d-container">
      <canvas ref={canvasRef} id="canvas3d" />
    </div>
  );
}
