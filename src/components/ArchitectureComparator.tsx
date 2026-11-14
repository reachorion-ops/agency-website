import React, { useState } from 'react';
import { ARCHITECTURE_COMPARISONS } from '../data/agencyData';
import { Check, X } from 'lucide-react';

export const ArchitectureComparator: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(0);

  return (
    <section id="architecture" className="bg-[#FFFFFF] text-[#1D1D1F] min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#D9D9D9]">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
              // 02 ARCHITECTURAL TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mt-2">
              Decoupled Headless vs Legacy Monolith
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-editorial-mono text-neutral-500 max-w-md">
            AN OBJECTIVE TECHNICAL AUDIT FOR ENTERPRISE LEADERSHIP EVALUATING DIGITAL REPLATFORMING.
          </p>
        </div>

        {/* Live Interactive Comparison Matrix */}
        <div className="mt-8 overflow-x-auto border border-[#D9D9D9]">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#D9D9D9] bg-[#F5F5F7]">
                <th className="p-4 text-xs font-black tracking-wider uppercase font-editorial-mono text-neutral-500 w-1/4">
                  Evaluation Dimension
                </th>
                <th className="p-4 text-xs font-black tracking-wider uppercase font-editorial-mono text-[#0071E3] w-5/12 bg-blue-50/50 border-x border-[#D9D9D9]">
                  Reach Orion Headless Standard
                </th>
                <th className="p-4 text-xs font-black tracking-wider uppercase font-editorial-mono text-neutral-400 w-1/3">
                  Legacy Monolith (WordPress / Drupal)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9D9D9] text-xs sm:text-sm">
              {ARCHITECTURE_COMPARISONS.map((comp, idx) => (
                <tr
                  key={idx}
                  onClick={() => setSelectedRow(idx)}
                  className={`cursor-pointer transition-colors ${
                    selectedRow === idx ? 'bg-neutral-50' : 'hover:bg-neutral-50/60'
                  }`}
                >
                  {/* Dimension */}
                  <td className="p-4 font-bold text-[#1D1D1F]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-editorial-mono text-neutral-400">0{idx + 1}</span>
                      <span>{comp.feature}</span>
                    </div>
                  </td>

                  {/* Reach Orion Standard */}
                  <td className="p-4 border-x border-[#D9D9D9] bg-blue-50/30">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-1 rounded-full bg-[#0071E3] text-white shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1D1D1F]">{comp.reachOrionWay}</div>
                        <div className="text-[11px] text-[#0F766E] font-editorial-mono mt-0.5 font-medium">
                          ✦ {comp.highlight}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Legacy Monolith */}
                  <td className="p-4 text-neutral-500">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-1 rounded-full bg-neutral-200 text-neutral-600 shrink-0">
                        <X className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div className="text-xs sm:text-sm">{comp.legacyMonolith}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Dimension Deep-Dive Callout */}
        {selectedRow !== null && (
          <div className="mt-5 p-5 bg-[#F5F5F7] border border-[#D9D9D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#1D1D1F] text-white text-[10px] font-editorial-mono uppercase font-bold">
                AUDIT NOTE
              </span>
              <span className="text-xs sm:text-sm text-[#1D1D1F] font-medium">
                {ARCHITECTURE_COMPARISONS[selectedRow].highlight}
              </span>
            </div>
            <div className="text-xs font-editorial-mono text-neutral-500">
              ARCHITECTURE PRINCIPLE {selectedRow + 1} OF {ARCHITECTURE_COMPARISONS.length}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
