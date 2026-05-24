"use client";

import { useEffect, useRef } from "react";

type Shape = "heart" | "star" | "circle";

interface Particle {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  alpha: number;
  alphaDir: number;
  shape: Shape;
  rotation: number;
  rotSpeed: number;
  color: string;
}

const COLORS = [
  "255,255,255",   // white
  "255,182,193",   // light pink
  "255,215,160",   // soft peach/gold
  "180,230,220",   // soft teal
];

function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const s = size * 0.55;
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, s * 0.3);
  ctx.bezierCurveTo(-s * 0.05, 0, -s * 0.5, 0, -s * 0.5, -s * 0.3);
  ctx.bezierCurveTo(-s * 0.5, -s * 0.7, 0, -s * 0.7, 0, -s * 0.3);
  ctx.bezierCurveTo(0, -s * 0.7, s * 0.5, -s * 0.7, s * 0.5, -s * 0.3);
  ctx.bezierCurveTo(s * 0.5, 0, s * 0.05, 0, 0, s * 0.3);
  ctx.closePath();
  ctx.restore();
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const outerR = size * 0.5;
  const innerR = outerR * 0.42;
  const points = 5;
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (i * Math.PI) / points - Math.PI / 2;
    if (i === 0) ctx.moveTo(r * Math.cos(angle), r * Math.sin(angle));
    else ctx.lineTo(r * Math.cos(angle), r * Math.sin(angle));
  }
  ctx.closePath();
  ctx.restore();
}

export default function Particles({ count = 40 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const shapes: Shape[] = ["heart", "heart", "star", "circle"];
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      pointer.active = x >= 0 && x <= width && y >= 0 && y <= height;
      if (pointer.active) {
        pointer.x = x;
        pointer.y = y;
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 12 + 10,
        dx: (Math.random() - 0.5) * 0.25,
        dy: -(Math.random() * 0.4 + 0.12),
        alpha: Math.random() * 0.28 + 0.12,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.012,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `rgb(${p.color})`;
        ctx.shadowColor = `rgba(${p.color},0.35)`;
        ctx.shadowBlur = 8;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.translate(-p.x, -p.y);

        if (p.shape === "heart") {
          drawHeart(ctx, p.x, p.y, p.size);
        } else if (p.shape === "star") {
          drawStar(ctx, p.x, p.y, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
        }

        ctx.fill();
        ctx.restore();

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.max(1, Math.hypot(dx, dy));
          const influence = Math.max(0, 1 - dist / 160);
          p.x += (dx / dist) * influence * 0.6;
          p.y += (dy / dist) * influence * 0.6;
        }

        p.x += p.dx;
        p.y += p.dy;
        p.rotation += p.rotSpeed;

        // gentle alpha pulse
        p.alpha += p.alphaDir * 0.001;
        if (p.alpha > 0.5 || p.alpha < 0.1) p.alphaDir *= -1;

        // wrap top → respawn from bottom
        if (p.y < -p.size * 2) {
          p.y = height + p.size;
          p.x = Math.random() * width;
        }
        if (p.x < -p.size * 2) p.x = width + p.size;
        if (p.x > width + p.size * 2) p.x = -p.size;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
