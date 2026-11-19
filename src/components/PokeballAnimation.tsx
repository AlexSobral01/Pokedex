
"use client";

import { useEffect, useRef } from "react";
import "../styles/pokeballAnimation.css";

const N = 32;
const C = N / 2;

const COR = {
    contorno: "#222",
    verm: "#e53935",
    vermEscuro: "#b71c1c",
    vermBrilho: "#ff8a80",
    branco: "#fff",
    brancoEscuro: "#cfd8dc",
};

type PixelFunction = (x: number, y: number) => string | null;

function pintar(
    canvas: HTMLCanvasElement,
    w: number,
    h: number,
    yIni: number,
    fn: PixelFunction
) {
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const cor = fn(x, y + yIni);

            if (cor) {
                ctx.fillStyle = cor;
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }
}

function dist(x: number, y: number) {
    const dx = x + 0.5 - C;
    const dy = y + 0.5 - C;

    return {
        dx,
        dy,
        d: Math.hypot(dx, dy),
    };
}

function corpo(x: number, y: number): string | null {
    const { dx, dy, d } = dist(x, y);

    if (d > C) return null;
    if (d > C - 2) return COR.contorno;
    if (Math.abs(dy) <= 1.5) return COR.contorno;

    const topo = dy < 0;
    const sombra = dx + dy > 10;

    if (topo) {
        if (Math.hypot(dx + 8, dy + 8) < 2.6) {
            return COR.vermBrilho;
        }

        return sombra ? COR.vermEscuro : COR.verm;
    }

    return sombra ? COR.brancoEscuro : COR.branco;
}

function botao(x: number, y: number): string | null {
    const { dx, dy, d } = dist(x, y);

    if (d > 6) return null;
    if (d > 4) return COR.contorno;

    return dx + dy > 2 ? COR.brancoEscuro : COR.branco;
}

function luz(x: number, y: number): string | null {
    const d = Math.hypot(x + 0.5 - 2.5, y + 0.5 - 2.5);

    if (d > 2.6) return null;

    return d < 1 ? "#ff8a80" : "#ff1a1a";
}

function circle(x: number, y: number): string | null {
    const { d } = dist(x, y);

    if (d > C - 0.5) return null;
    if (d > 14) return "#b71c1c";
    if (d > 11) return "#e53935";

    return "#ff3b3b";
}

export const PokeballAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const topoRef = useRef<HTMLCanvasElement>(null);
    const baseRef = useRef<HTMLCanvasElement>(null);
    const botaoRef = useRef<HTMLCanvasElement>(null);
    const luzRef = useRef<HTMLCanvasElement>(null);
    const circleRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (
            !topoRef.current ||
            !baseRef.current ||
            !botaoRef.current ||
            !luzRef.current ||
            !circleRef.current
        ) {
            return;
        }

        pintar(topoRef.current, N, N / 2, 0, corpo);
        pintar(baseRef.current, N, N / 2, N / 2, corpo);
        pintar(botaoRef.current, N, N, 0, botao);
        pintar(luzRef.current, 5, 5, 0, luz);
        pintar(circleRef.current, N, N, 0, circle);

        const container = containerRef.current;

        if (!container) return;

        container.classList.remove("animando");
        void container.offsetWidth;
        container.classList.add("animando");

        return () => {
            container.classList.remove("animando");
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="foto-pokemon relative h-[200px] w-[200px] bg-transparent"
        >
            <div className="pokebola">
                <canvas ref={topoRef} className="topo" />
                <canvas ref={baseRef} className="base" />
                <canvas ref={botaoRef} className="botao" />
                <canvas ref={luzRef} className="luz" />
            </div>

            <canvas ref={circleRef} className="circle" />
        </div>
    );
};
