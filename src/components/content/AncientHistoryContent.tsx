// File: src/components/content/AncientHistoryContent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { MapPin, Home, Crop, ShoppingCart, Palette, Crosshair, ChevronDown } from "lucide-react";

export const AncientHistoryContent: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string[]>([]);
  
  // Color scheme for different sections
  const sectionColors: Record<string, string> = {
    "indus-valley": "bg-blue-50 border-blue-200",
    "town-planning": "bg-amber-50 border-amber-200",
    "agriculture": "bg-emerald-50 border-emerald-200",
    "trade-crafts": "bg-purple-50 border-purple-200"
  };

  const iconColors: Record<string, string> = {
    "indus-valley": "text-blue-600 bg-blue-100",
    "town-planning": "text-amber-600 bg-amber-100",
    "agriculture": "text-emerald-600 bg-emerald-100",
    "trade-crafts": "text-purple-600 bg-purple-100"
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Title Section */}
      <motion.div 
        className="text-center p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          Ancient History Overview
        </motion.h2>
        <motion.p 
          className="text-indigo-100 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Indus Valley Civilization - 2500–1750 B.C.
        </motion.p>
      </motion.div>

      {/* Timeline Visualization */}
      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-gray-700">2500 B.C.</div>
          <div className="text-sm font-semibold text-gray-700">1750 B.C.</div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
            style={{ width: '75%' }}
          ></div>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="text-xs text-gray-600">Flourishing period</div>
          <div className="text-xs text-gray-600">Decline</div>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion.Root 
        type="multiple" 
        className="space-y-4"
        value={activeAccordion}
        onValueChange={setActiveAccordion}
      >
        {/* Indus Valley Civilization */}
        <Accordion.Item 
          value="indus-valley"
          className={`rounded-xl border overflow-hidden transition-all duration-300 ${sectionColors["indus-valley"]}`}
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-blue-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${iconColors["indus-valley"]}`}>
                  <Home size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Indus Valley Civilization</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Harappan Civilization</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Saraswati-Sindhu</span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${activeAccordion.includes("indus-valley") ? 'rotate-180' : ''}`} 
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-5 px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-blue-700 mb-3">Key Facts</h3>
                    <p className="mb-4 text-gray-700">
                      The <span className="font-bold text-blue-800">Indus Valley Civilization</span> flourished along the Indus and Ghaggar-Hakra rivers between 2500–1750 B.C.
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Major Sites</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Harappa", "Mohenjodaro", "Lothal", "Kalibangan", "Banawali", "Surkotda"].map((site, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full"
                          >
                            {site}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-blue-700 mb-3">Materials & Trade</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>Known materials: <span className="font-semibold">copper, bronze, silver, gold</span>; no iron usage</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>Trade via barter; <span className="font-semibold">standardized weights & measures</span> (16-unit system)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>Over <span className="font-semibold">100 excavated settlements</span>; advanced urban planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-blue-700 mb-3">SSC Exam Pattern</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-blue-50">
                            <th className="p-3 font-semibold text-blue-800 border-b border-blue-200">Section</th>
                            <th className="p-3 font-semibold text-blue-800 border-b border-blue-200">MCQs</th>
                            <th className="p-3 font-semibold text-blue-800 border-b border-blue-200">Marks</th>
                            <th className="p-3 font-semibold text-blue-800 border-b border-blue-200">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["General Intelligence & Reasoning", "25", "50 (−0.5/wrong)", "1h"],
                            ["General Awareness", "25", "50 (−0.5/wrong)", "1h"],
                            ["Numerical Aptitude", "25", "50 (−0.5/wrong)", "1h"],
                            ["English Comprehension", "25", "50 (−0.5/wrong)", "1h"],
                            ["Total", "100", "200", "2h"],
                          ].map(([sec, q, m, d], index) => (
                            <tr 
                              key={index} 
                              className={`hover:bg-blue-50 ${index === 4 ? "bg-blue-100/50 font-semibold" : ""}`}
                            >
                              <td className="p-3 border-b border-blue-100">{sec}</td>
                              <td className="p-3 border-b border-blue-100">{q}</td>
                              <td className="p-3 border-b border-blue-100">{m}</td>
                              <td className="p-3 border-b border-blue-100">{d}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Town Planning */}
        <Accordion.Item 
          value="town-planning"
          className={`rounded-xl border overflow-hidden transition-all duration-300 ${sectionColors["town-planning"]}`}
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-amber-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${iconColors["town-planning"]}`}>
                  <Crosshair size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Town Planning</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Urban Design</span>
                    <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Architecture</span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${activeAccordion.includes("town-planning") ? 'rotate-180' : ''}`} 
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-5 px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-amber-700 mb-3">City Structure</h3>
                    <p className="text-gray-700">
                      Harappan cities were split into an elevated <span className="font-semibold text-amber-800">citadel</span> and lower town. 
                      The citadel (30–50 ft high) housed public buildings, while the lower town contained residences.
                    </p>
                    
                    <div className="mt-4">
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                        <div className="text-amber-600">
                          <MapPin size={20} />
                        </div>
                        <span className="text-sm">Cities followed a <span className="font-semibold">grid layout</span> with advanced drainage systems</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-amber-700 mb-3">The Great Bath</h3>
                    <div className="flex items-start">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-3" />
                      <div>
                        <p className="text-gray-700">
                          Notable feature: the <span className="font-semibold text-amber-800">Great Bath of Mohenjodaro</span> (12×7×2.4 m), 
                          likely used for ritual bathing.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-amber-700">
                          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                          <span>Waterproofed with natural tar</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-amber-700">
                          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                          <span>Surrounded by corridors and rooms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Agriculture */}
        <Accordion.Item 
          value="agriculture"
          className={`rounded-xl border overflow-hidden transition-all duration-300 ${sectionColors["agriculture"]}`}
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-emerald-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${iconColors["agriculture"]}`}>
                  <Crop size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Agriculture</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Cultivation</span>
                    <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Harvesting</span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${activeAccordion.includes("agriculture") ? 'rotate-180' : ''}`} 
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-5 px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-emerald-700 mb-3">Crops & Cultivation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>Sowed <span className="font-semibold text-emerald-800">wheat and barley</span> in floodplains (Nov sowing, Apr harvest)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>Cultivated <span className="font-semibold text-emerald-800">cotton</span> (world's first), rice (Lothal), peas, sesame, mustard</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Seasonal Calendar</h4>
                      <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg">
                        <div className="text-center">
                          <div className="font-semibold text-emerald-700">Nov</div>
                          <div className="text-xs text-gray-600">Sowing</div>
                        </div>
                        <div className="h-1 w-8 bg-emerald-300 mx-2"></div>
                        <div className="text-center">
                          <div className="font-semibold text-emerald-700">Apr</div>
                          <div className="text-xs text-gray-600">Harvest</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-emerald-700 mb-3">Transport & Tools</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>Used <span className="font-semibold text-emerald-800">bullock carts</span> for transportation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>Elephants for transport; horses were rare</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                        <span>Wooden ploughs and stone tools for farming</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4 flex items-center p-3 bg-emerald-50 rounded-lg">
                      <div className="text-emerald-600 mr-3">
                        <Crop size={20} />
                      </div>
                      <span className="text-sm">Evidence of <span className="font-semibold">irrigation systems</span> found at various sites</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Trade and Art */}
        <Accordion.Item 
          value="trade-crafts"
          className={`rounded-xl border overflow-hidden transition-all duration-300 ${sectionColors["trade-crafts"]}`}
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-purple-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${iconColors["trade-crafts"]}`}>
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Trade & Crafts</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Commerce</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Artistry</span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${activeAccordion.includes("trade-crafts") ? 'rotate-180' : ''}`} 
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-5 px-5">
              <div className="grid grid-cols-1 gap-6">
                <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-lg text-purple-700 mb-3">Trade Networks</h3>
                  <p className="text-gray-700 mb-4">
                    Harappans traded internally and externally (Mesopotamia). They used a barter system; no coins. 
                    High-precision cubical weights made of limestone/steatite.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                          <Palette size={20} className="text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-purple-700">Craft Production</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          <span>Bead-making factories at Chanhudaro and Lothal</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          <span>Pottery with geometric designs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          <span>Advanced metallurgy techniques</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                          <MapPin size={20} className="text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-purple-700">Key Locations</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          <span>Dockyard at Lothal for maritime trade</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          <span>Specialized workshops in Harappa</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                          <span>Storage facilities in Mohenjodaro</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      {/* Summary Card */}
      <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-xl text-indigo-800 mb-4">Key Takeaways</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-indigo-100">
            <div className="text-indigo-600 mb-2">
              <Home size={20} />
            </div>
            <h4 className="font-semibold text-indigo-700 mb-1">Urban Planning</h4>
            <p className="text-sm text-gray-600">Advanced grid systems, drainage, and architecture</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-indigo-100">
            <div className="text-indigo-600 mb-2">
              <Crop size={20} />
            </div>
            <h4 className="font-semibold text-indigo-700 mb-1">Agricultural Innovation</h4>
            <p className="text-sm text-gray-600">First to cultivate cotton, advanced irrigation</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-indigo-100">
            <div className="text-indigo-600 mb-2">
              <ShoppingCart size={20} />
            </div>
            <h4 className="font-semibold text-indigo-700 mb-1">Trade Networks</h4>
            <p className="text-sm text-gray-600">Extensive internal and external trade routes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
