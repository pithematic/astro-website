import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Satellite } from '../types';

const OrbitSimulation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [aiEnabled, setAiEnabled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.clientWidth;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', 'transparent');

    svg.selectAll("*").remove();

    // Earth
    const earthGradient = svg.append("defs")
      .append("radialGradient")
      .attr("id", "earthGrad")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%");
    
    earthGradient.append("stop").attr("offset", "0%").attr("stop-color", "#2563eb");
    earthGradient.append("stop").attr("offset", "100%").attr("stop-color", "#0f172a");

    svg.append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", 40)
      .style("fill", "url(#earthGrad)")
      .style("filter", "drop-shadow(0 0 10px #3b82f6)");

    // Initialize Satellites
    const sats: Satellite[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      angle: (Math.PI * 2 * i) / 20,
      radius: 100 + Math.random() * 120,
      speed: (0.005 + Math.random() * 0.005) * (Math.random() > 0.5 ? 1 : -1),
      type: i % 3 === 0 ? 'OBSERVATION' : 'COMM'
    }));

    const linksLayer = svg.append("g");
    const satsLayer = svg.append("g");

    let animationId: number;

    const animate = () => {
      // Update positions
      sats.forEach(s => {
        s.angle += s.speed;
      });

      // Draw Links
      // AI Enabled: Connect nearest neighbors efficiently + avoid earth occlusion
      // AI Disabled: Random connection chaos
      const linksData: {x1: number, y1: number, x2: number, y2: number, opacity: number}[] = [];
      
      if (aiEnabled) {
         for (let i = 0; i < sats.length; i++) {
           let closestDist = Infinity;
           let closestIdx = -1;
           const s1 = sats[i];
           const x1 = centerX + Math.cos(s1.angle) * s1.radius;
           const y1 = centerY + Math.sin(s1.angle) * s1.radius;

           for (let j = 0; j < sats.length; j++) {
             if (i === j) continue;
             const s2 = sats[j];
             const x2 = centerX + Math.cos(s2.angle) * s2.radius;
             const y2 = centerY + Math.sin(s2.angle) * s2.radius;
             const dist = Math.hypot(x2 - x1, y2 - y1);
             
             // Simple line of sight check (distance < earth diameter roughly)
             if (dist < closestDist && dist < 150) {
               closestDist = dist;
               closestIdx = j;
             }
           }
           if (closestIdx !== -1) {
             const s2 = sats[closestIdx];
             linksData.push({
               x1, y1,
               x2: centerX + Math.cos(s2.angle) * s2.radius,
               y2: centerY + Math.sin(s2.angle) * s2.radius,
               opacity: 0.6
             });
           }
         }
      } else {
        // Chaos mode
        sats.forEach((s1, i) => {
           if (i % 2 === 0) { // Connect to randoms
             const s2 = sats[(i + 5) % sats.length];
             const x1 = centerX + Math.cos(s1.angle) * s1.radius;
             const y1 = centerY + Math.sin(s1.angle) * s1.radius;
             const x2 = centerX + Math.cos(s2.angle) * s2.radius;
             const y2 = centerY + Math.sin(s2.angle) * s2.radius;
             linksData.push({ x1, y1, x2, y2, opacity: 0.2 });
           }
        });
      }

      const links = linksLayer.selectAll("line").data(linksData);
      links.enter().append("line")
        .merge(links as any)
        .attr("x1", d => d.x1)
        .attr("y1", d => d.y1)
        .attr("x2", d => d.x2)
        .attr("y2", d => d.y2)
        .attr("stroke", aiEnabled ? "#06b6d4" : "#ef4444") // Cyan for AI, Red for unoptimized
        .attr("stroke-width", aiEnabled ? 1.5 : 0.5)
        .attr("opacity", d => d.opacity);
      links.exit().remove();

      // Draw Satellites
      const nodes = satsLayer.selectAll("circle").data(sats);
      nodes.enter().append("circle")
        .merge(nodes as any)
        .attr("cx", d => centerX + Math.cos(d.angle) * d.radius)
        .attr("cy", d => centerY + Math.sin(d.angle) * d.radius)
        .attr("r", 4)
        .attr("fill", d => d.type === 'COMM' ? "#fff" : "#fbbf24");
      
      nodes.exit().remove();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [aiEnabled]);

  return (
    <div className="relative w-full bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 shadow-2xl" ref={wrapperRef}>
      <div className="absolute top-4 left-4 z-10 bg-black/60 p-4 rounded-lg backdrop-blur-sm border border-slate-700">
        <h3 className="text-white font-bold mb-2">NeuroOrbit™ Simulator</h3>
        <div className="flex items-center space-x-3">
          <span className={`text-sm ${!aiEnabled ? 'text-red-400 font-bold' : 'text-slate-400'}`}>Standard</span>
          <button 
            onClick={() => setAiEnabled(!aiEnabled)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${aiEnabled ? 'bg-cyan-500' : 'bg-slate-600'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${aiEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${aiEnabled ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>AI Optimized</span>
        </div>
        <p className="text-xs text-slate-300 mt-2 max-w-[200px]">
          {aiEnabled 
            ? "AI actively routing traffic via shortest low-latency paths and avoiding interference."
            : "Legacy constellation management with static routing and inefficient spectrum usage."}
        </p>
      </div>
      <svg ref={svgRef} className="w-full h-[500px]" />
    </div>
  );
};

export default OrbitSimulation;
