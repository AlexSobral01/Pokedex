
"use client";

import { useEffect, useRef } from "react";

export const PokeballAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        container.classList.remove("animando");
        void container.offsetWidth;
        container.classList.add("animando");
    }, []);

    return (
        <div
            ref={containerRef}
            className="foto-pokemon relative h-[280px] w-[280px] bg-transparent"
        >
            {/* Pokébola */}
            <div className="pokebola pointer-events-none absolute bottom-[40px] left-1/2 h-[80px] w-[80px] -translate-x-1/2 opacity-0">
                <div className="metade topo absolute left-0 top-0 box-border h-1/2 w-full rounded-t-full border-[4px] border-b-[3px] border-[#222] bg-[#e53935]" />

                <div className="metade base absolute bottom-0 left-0 box-border h-1/2 w-full rounded-b-full border-[4px] border-t-[3px] border-[#222] bg-white" />

                <div className="botao absolute left-1/2 top-1/2 z-[2] box-border h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#222] bg-white" />

                <span className="luz absolute left-1/2 top-1/2 z-[3] h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1a1a] opacity-0 shadow-[0_0_14px_6px_rgba(255,26,26,0.9)]" />
            </div>

            {/* Círculo de energia */}
            <div className="circulo pointer-events-none absolute bottom-[160px] left-1/2 z-[5] h-[120px] w-[120px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-0 [background:radial-gradient(circle,#ff3b3b_0_55%,rgba(229,57,53,0.7)_100%)] shadow-[0_0_30px_10px_rgba(255,26,26,0.8)]" />
        </div>
    );
};
