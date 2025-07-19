// File: src/components/content/AncientHistoryContent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { MapPin, Home, Crop, ShoppingCart, Palette, Crosshair, ChevronDown, Book, Building2, Lightbulb, UserCircle2, CheckCircle2 } from "lucide-react";

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
                  <span className="font-bold text-xl text-gray-800">Indus Valley Civilization (2500–1750 B.C.)</span>
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
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Introduction */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">Overview</h3>
                <p className="text-gray-800">
                  The <strong>Indus Valley Civilization</strong> was an ancient civilization thriving along the Indus and Ghaggar-Hakra rivers in what is now Pakistan and north-western India.
                  Known also as the <strong>Harappan Civilization</strong> and <strong>Saraswati-Sindhu Civilization</strong>, it existed between <strong>2500–1750 B.C.</strong> and included over 100 discovered sites.
                </p>
              </motion.div>

              {/* Origins and Discovery */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">Origin & Key Discoveries</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Discovered at Harappa (1921) by R.B. Dayaram Sahni on the Ravi River</li>
                  <li>Mohenjodaro (1922) by R.D. Banerjee on the Indus River, also called “Mound of the Dead”</li>
                  <li>Central to excavations was Sir John Marshall</li>
                  <li>Transition from nomadic to settled agriculture in Eastern Baluchistan</li>
                </ul>
              </motion.div>

              {/* Geographical Extent */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">Geographical Extent</h3>
                <p className="mb-2 text-gray-700">
                  Spanned from <strong>Manda</strong> in Jammu (north) to <strong>Daimabad</strong> in Maharashtra (south), and from <strong>Alamgirpur</strong> in UP (east) to 
                  <strong> Sutkagendor</strong> in Baluchistan (west). Covered present-day Punjab, Sindh, Gujarat, Rajasthan, Haryana, and Western UP.
                </p>
                <p className="text-sm text-blue-600 font-medium">Notable Sites:</p>
                <ul className="text-gray-700 list-disc list-inside">
                  <li><strong>Pakistan</strong>: Harappa, Mohenjodaro, Chanhudaro</li>
                  <li><strong>India</strong>: Kalibangan, Lothal, Banawali, Surkotda, Rangpur, Alamgirpur</li>
                </ul>
              </motion.div>

              {/* Culture and People */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">Culture and Society</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Four main racial groups: Mediterraneans, Proto-Australoids, Mongoloids, Alpines</li>
                  <li>Known metals: <strong>copper, bronze, gold, silver</strong>; no iron found</li>
                  <li>Script is <strong>pictographic</strong> and undeciphered (600+ symbols), written in <strong>Boustrophedon</strong> style</li>
                </ul>
              </motion.div>

              {/* Down the line you'll continue these sections */}
              {/* Layout continues for ➤ Town Planning, Agriculture, Trade & Commerce, Art, Religion, Seals, Pottery, Decline, Important Sites... */}

            </motion.div>
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

        {/* Rig Vedic Age */}
        <Accordion.Item 
          value="rig-vedic-age"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-orange-50 border-orange-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-orange-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-orange-600 bg-orange-100">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Rig Vedic Age (1500–1000 B.C.)</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Early Vedic Period</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Rigveda Source</span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${activeAccordion.includes("rig-vedic-age") ? 'rotate-180' : ''}`} 
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Overview */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Source & Introduction</h3>
                <p className="text-gray-800">
                  Key information about the Rig Vedic Age comes from both archaeological evidence and the <b>Rigveda</b>, the oldest Vedic text composed in this period. This era marks the settlement of Indo-Aryans in northwestern India post-Indus Valley Civilization and is foundational for the evolution of early Indian society and religion[1][2][3][4].
                </p>
              </motion.div>

              {/* Key Concepts */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Key Concepts</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>The society was much simpler than that of the Indus Valley. The main occupation was <span className="font-semibold text-orange-800">cattle rearing</span>. Agriculture became prominent only later[3][4].</li>
                  <li>No urbanization: The economy and society were entirely <span className="font-semibold text-orange-800">rural-tribal</span>[1][4].</li>
                  <li>The most important animals were <b>the horse and the cow</b>—unlike the Indus Valley, the Rig Vedic Age features many references to horses, while there is no evidence of horses in the former[1][4].</li>
                  <li>Horse: Essential for mobility and warfare, representing a major advance from earlier eras.</li>
                  <li>Key gods: <b>Indra, Agni, Som</b>. No evidence of mother goddess worship or proto-Shiva, unlike earlier periods[2][4].</li>
                  <li>Pottery: <span className="font-semibold">Red ware</span> was widely popular; <span className="font-semibold">Painted Grey Ware</span> was distinctive to this period[2][5].</li>
                  <li>Most mentioned river in Rigveda: <span className="font-semibold text-orange-800">Sindhu</span> (Indus); Most pious river: <span className="font-semibold text-orange-800">Saraswati</span>. Ganga and Yamuna appear less frequently[1][4].</li>
                  <li>Rig Vedic Aryans were aware of the sea.</li>
                  <li>Neither <b>iron nor copper</b> was commonly used; iron use becomes common in the later Vedic Age[2][3].</li>
                </ul>
              </motion.div>

              {/* Society and Economy */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Society & Institutions</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    Tribal institutions such as <span className="font-semibold text-orange-800">Sabha, Samiti, Vidhata, and Gana</span> were important assemblies for governance and decision-making[4][5].
                  </li>
                  <li>
                    The first reference to the <span className="font-semibold text-orange-800">Varna system</span> comes from the Purushsukta hymn of the Rigveda’s tenth Mandala; the system was not rigid, and occupational mobility was common[1][3]. Example: A bard’s family included a physician father and a grain-grinding mother.
                  </li>
                  <li>
                    Cows were considered very valuable and the chief measure of wealth and prosperity[3][4].
                  </li>
                </ul>
              </motion.div>

              {/* Rivers and Geography */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Geography & Rivers</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    Rigveda mentions <b>40 rivers</b>; Nadisukta hymn lists 21, from the Ganga in the east to the Kubha (Kabul) in the west[1][4].
                  </li>
                  <li>
                    Aryans lived in the “<span className="font-semibold text-orange-800">Sapta Sindhu</span>”—land of seven rivers: Sindhu (Indus), Saraswati, Ravi, Beas, Jhelum, Chenab, Satluj[1][4].
                  </li>
                </ul>
              </motion.div>

              {/* Social Life and Gender */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Social Life & Gender</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Rig Vedic society was patriarchal and patrilineal, organized into tribes and families (<b>kula</b>, <b>grama</b>, <b>visu</b>, <b>jana</b>)[3][4].</li>
                  <li>Women could attend assemblies (Sabha and Samiti), though social distinctions existed, they were not hereditary nor rigid[4].</li>
                  <li>Monogamy was common, polygamy observed among nobles; no evidence of child marriage[4].</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Rig Vedic Economy */}
        <Accordion.Item
          value="rig-vedic-economy"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-teal-50 border-teal-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-teal-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-teal-600 bg-teal-100">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Rig Vedic Economy</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Pastoralism</span>
                    <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Professions</span>
                    <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Barter System</span>
                  </div>
                </div>
              </div>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${activeAccordion.includes("rig-vedic-economy") ? 'rotate-180' : ''}`} 
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* General Overview */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-teal-700 mb-3">General Overview</h3>
                <p className="text-gray-800">
                  The early Vedic (Rig Vedic) economy was <strong>primarily pastoral</strong>, with <strong>cattle rearing</strong> as the chief occupation and major source of wealth and status. Cows were so important that wealth was measured in number of cattle (<i>gomat</i>), and cattle raids were a source of inter-tribal conflict and wealth acquisition[1][2][3][4][5][8].
                </p>
              </motion.div>

              {/* Wealth, Trade and Professions */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-teal-700 mb-3">Wealth, Trade & Professions</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    <strong>Cows</strong> and gold ornaments were the main media of exchange. There was no coined money; all trade and payments were through barter[1][2][4][5][8].
                  </li>
                  <li>
                    <span className="font-semibold text-teal-800">Cattle, sheep, goats, and horses</span> were raised for milk, meat, hides, and transport[6].
                  </li>
                  <li>
                    <span className="font-semibold text-teal-800">Professions</span> mentioned in the Rig Veda include carpenters (making chariots, ploughs, houses), smiths (weapons, implements), weavers, leather workers, potters, corn grinders, tanners, and healers[3][4][5][6].
                  </li>
                  <li>
                    Items like leather and wool were commonly traded, but the scale and impact of trade on the rig Vedic economy was small.
                  </li>
                </ul>
              </motion.div>

              {/* Agriculture and Industry */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-teal-700 mb-3">Agriculture & Industry</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    Although <strong>cattle rearing</strong> was primary, <strong>agriculture</strong> was practiced: barley and some other crops were grown, but pastoralism dominated[2][3][4][6][7].
                  </li>
                  <li>
                    Weaving of cotton and wool was a major industry involving both men and women, while carpentry (chariots, wagons, ploughs), blacksmithing, and goldsmithing were highly respected and technically advanced professions[3][4].
                  </li>
                  <li>
                    Milk, butter, ghee, and curd were daily staples from cows; their leather was used for various goods, and cattle powered ploughs and carts. Cows were sometimes given as offerings or for payment in rituals[3][5].
                  </li>
                </ul>
              </motion.div>

              {/* Medicine and Healing */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-teal-700 mb-3">Medicine & Healing</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    <strong>Medical knowledge</strong> was present: Rig Vedic texts describe healers skilled in <span className="font-semibold text-teal-800">treating wounds, diseases, and performing surgery</span>. Some herbs and plant-based remedies were known.
                  </li>
                  <li>
                    Surgeons and physicians seem to have enjoyed social respect, and healing was an established craft[3][4].
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Rig Vedic Society */}
        <Accordion.Item
          value="rig-vedic-society"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-pink-50 border-pink-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-pink-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-pink-600 bg-pink-100">
                  <Home size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Society</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Social Structure</span>
                    <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Varna System</span>
                    <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Customs</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("rig-vedic-society") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Varna System */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-pink-700 mb-3">Varna System in Rig Vedic Society</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Society was organized into <strong>four Varnas</strong>: <span className="font-semibold text-pink-800">Brahmana, Kshatriya, Vaishya, and Shudra</span>[1][2][3][4][5][6][7][8].</li>
                  <li>
                    <b>Brahmanas</b> (priests & teachers), <b>Kshatriyas</b> (rulers & warriors), <b>Vaishyas</b> (farmers, merchants & bankers), <b>Shudras</b> (artisans & laborers)[1][2][4][6][7][8].
                  </li>
                  <li>
                    The <b>Purusha Sukta</b> hymn (Rig Veda 10.90) describes all four varnas as originating from the cosmic being's body[1][2][3][4].
                  </li>
                  <li>
                    Varna was initially <b>occupation-based and relatively flexible</b>, allowing some social mobility[1][2][3].
                  </li>
                </ul>
              </motion.div>

              {/* Women, Marriage, and Family */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-pink-700 mb-3">Women, Marriage & Family</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>The usual age of marriage was <b>16-17 years</b>; child marriage was not in vogue[8].</li>
                  <li>
                    <b>Widow marriage</b> was accepted — a widow could marry the younger brother of her deceased husband (<b>Niyoga</b>)[8].
                  </li>
                  <li>
                    <b>Women had right to education</b>, and could participate in assemblies and even wars[8].
                  </li>
                  <li>
                    There is <b>no evidence of sati or purdah</b> practices in this period[8].
                  </li>
                </ul>
              </motion.div>

              {/* Rights, Property, and Food */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
              >
                <h3 className="font-semibold text-lg text-pink-700 mb-3">Rights, Property & Diet</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    Property rights were recognized in both movable goods (like cattle, horses, gold, ornaments) and immovable goods (such as land and houses)[8].
                  </li>
                  <li>
                    Diet consisted largely of <b>milk and milk products</b>—curd, butter, and ghee. <b>Meat</b> of fish, birds, and animals was also consumed[8].
                  </li>
                  <li>
                    The cow was revered as <b>Aghanya</b> (not to be killed)[8].
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        {/*rig-vedic-kingship-polity */}
        <Accordion.Item
          value="rig-vedic-kingship-polity"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-yellow-50 border-yellow-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-yellow-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-yellow-600 bg-yellow-100">
                  <Crosshair size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Theory of Kingship & Polity</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Kingship</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Early Polity</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("rig-vedic-kingship-polity") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Role of the King */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Role of Kingship</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>The king’s primary duty was to lead and protect his tribe, especially during wars and crises.</li>
                </ul>
              </motion.div>

              {/* Taxation and Economy */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Taxation System</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>No formal taxation system existed; land tax was absent because society was largely semi-nomadic.</li>
                  <li><span className="font-semibold text-yellow-800">Bali</span> was the earliest known tax, given as a voluntary offering rather than a mandatory levy.</li>
                </ul>
              </motion.div>

              {/* Type of Government */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Government & Political Structure</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>The system was predominantly <b>monarchial</b>, but some non-monarchical tribal assemblies also existed.</li>
                </ul>
              </motion.div>

              {/* The Battle of Ten Kings */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">The Battle of Ten Kings (Dasrajan War)</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>A legendary tribal conflict described in the Rigveda, known as the <b>Dasrajan War</b>.</li>
                  <li>Ten kings allied against King Sudas of the Bharata tribe (Tritsus family) on the banks of the Parushani (Ravi) river.</li>
                  <li>Sudas emerged victorious in this decisive inter-Aryan rivalry, establishing his tribe’s supremacy.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

              {/* Rig Vedic Religion */}
        <Accordion.Item
          value="rig-vedic-religion"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-red-50 border-red-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-red-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-red-600 bg-red-100">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Religion</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Gods of Rig Veda</span>
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Sacrifice Culture</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("rig-vedic-religion") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Overview */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-red-700 mb-3">General Beliefs & Worship</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Male gods were worshipped, unlike the Mother Goddess of the Indus Valley.</li>
                  <li>There was no worship of trees or animals during this period.</li>
                  <li>Life after death was not a part of Rig Vedic belief.</li>
                  <li>The primary mode of worship was <strong>sacrifice</strong> (Yajna), especially through fire.</li>
                  <li><strong>Agni (fire)</strong> was sacred and acted as an intermediary between humans and gods—linking this practice with the Indus Valley fire altars.</li>
                  <li>Rig Vedic religion followed <strong>Henotheism</strong>: belief in many gods, each exalted individually during ritual invocation.</li>
                  <li>There were approximately <strong>33 deities</strong> categorized into terrestrial, aerial, and celestial domains.</li>
                </ul>
              </motion.div>

              {/* Key Gods */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-red-700 mb-3">Major Deities</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><strong>Indra (Purandara)</strong>: Most important deity, god of thunder and war. 250 Rig Vedic hymns are dedicated to him. Known as “destroyer of forts” and linked to rainfall and strength.</li>
                  <li><strong>Agni</strong>: Fire god, second most important with 200 hymns. Deity of sacrifice and chief priest.</li>
                  <li><strong>Varuna</strong>: God of cosmic order (Rita), law, and morality. Personified water and upholder of truth—“Ritasyagopa”.</li>
                  <li><strong>Soma</strong>: Sacred intoxicating drink derived from a divine plant—used in sacrifices. Soma is later personified as the Moon. The entire 9th Mandala is devoted to Soma (called Soma Mandala).</li>
                  <li><strong>Surya</strong>: Sun god, viewed in five aspects—Surya, Savitri, Mitra, Pushan, and Vishnu.</li>
                  <li><strong>Savitri</strong> (god of light): To whom the famous Gayatri Mantra is addressed in Rig Veda.</li>
                </ul>
              </motion.div>

              {/* Classification of Gods */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
              >
                <h3 className="font-semibold text-lg text-red-700 mb-3">Types of Gods</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li><strong>Terrestrial gods</strong>: Prithvi (Earth), Agni (Fire).</li>
                  <li><strong>Aerial gods</strong>: Indra (Rain & Thunder), Vayu (Wind), Parjanya, Soma.</li>
                  <li><strong>Celestial gods</strong>: Varuna (Cosmic order), Surya (Sun), Dyaus (Sky), and Savitri.</li>
                </ul>
              </motion.div>

              {/* Unique Religious Features */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-red-700 mb-3">Special Religious Notes</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li><strong>No idol worship</strong> or temples—gods were mostly invoked through hymns and ritual fire sacrifices.</li>
                  <li><strong>Priests (Hotri)</strong> chanted hymns during Yajnas; rituals were central to spiritual life.</li>
                  <li>Sacrifices aimed to win the favor of gods for <i>rain, health, children, cattle, and victory</i>.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Vedic Literature */}
        <Accordion.Item
          value="vedic-literature"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-indigo-50 border-indigo-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-indigo-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-indigo-600 bg-indigo-100">
                  <Book size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Vedic Literature</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">Rig to Upanishads</span>
                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">Sacred Texts</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("vedic-literature") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Structure of Vedic Literature */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-indigo-700 mb-3">Structure & Types</h3>
                <p className="text-gray-700">
                  Vedic literature is the foundation of Hindu religious and philosophical thought and can be divided into four major parts:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
                  <li><strong>Vedas</strong></li>
                  <li><strong>Brahmanas</strong></li>
                  <li><strong>Aranyakas</strong></li>
                  <li><strong>Upanishads</strong></li>
                </ul>
                <p className="mt-4 text-gray-700">
                  These are collectively considered <strong>"Apaurusheya"</strong> (not of human origin) and <strong>"Nitya"</strong> (eternal).
                </p>
              </motion.div>

              {/* The Four Vedas */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-indigo-700 mb-3">The Four Vedas</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>
                    <strong>Rig Veda</strong>: Oldest Veda, written in verse with 1028 hymns across 10 Mandalas. Recited by <b>Hotri</b>. One of the world’s most ancient texts.
                  </li>
                  <li>
                    <strong>Sama Veda</strong>: Important for music. Contains 1549 hymns, mostly borrowed from Rig Veda (excluding 75 unique ones). Recited by <b>Udgatri</b>. Less historical but highly cultural.
                  </li>
                  <li>
                    <strong>Yajur Veda</strong>: A ritual-centric Veda used in sacrifices. Recited by <b>Adhvaryus</b>. Divided into: 
                    <ul className="ml-5 list-disc list-inside">
                      <li><i>Krishna Yajurveda</i> – mixture of verse and prose</li>
                      <li><i>Shukla Yajurveda</i> – clearer division of content</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Atharva Veda</strong>: Includes spells, charms, and non-Aryan beliefs. Rich source for socio-cultural and pragmatic aspects of Aryan life.
                  </li>
                </ul>
              </motion.div>

              {/* Brahmanas + Aranyakas */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-indigo-700 mb-3">Brahmanas & Aranyakas</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li><strong>Brahmanas</strong>: Prose texts explaining Vedic rituals, ceremonies, and prayers. Each Veda has its associated Brahmana(s).</li>
                  <li><strong>Aranyakas</strong>: “Forest texts” — philosophical conclusions of Brahmanas. Meant for hermits and forest dwellers.</li>
                </ul>
              </motion.div>

              {/* Upanishads */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-indigo-700 mb-3">Upanishads (Vedanta)</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    Upanishads are the philosophical core of Vedic literature, investigating the soul, creation, and ultimate reality.
                  </li>
                  <li>Also known as <strong>Vedanta</strong> (end of the Vedas).</li>
                  <li>
                    <strong>Brihadaranyaka</strong> is the <i>oldest</i> Upanishad and presents early concepts of rebirth and life after death.
                  </li>
                  <li>
                    The <i>last</i> Upanishad is thought to have been compiled during the reign of <strong>Akbar</strong> (Mughal era), showing its extended philosophical tradition.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="later-vedic-literature"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-yellow-50 border-yellow-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-yellow-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-yellow-600 bg-yellow-100">
                  <Book size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Later Vedic Literature</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Epics & Sutras</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Post-Vedic Texts</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("later-vedic-literature") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Classification */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Classification</h3>
                <p className="text-gray-700">
                  Later Vedic literature, also known as Smriti literature, expands beyond the Vedas and includes many branches of knowledge and culture. It can be categorized into six main heads:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
                  <li><b>Vedangas</b></li>
                  <li><b>Smritis</b></li>
                  <li><b>Mahakavyas</b></li>
                  <li><b>Puranas</b></li>
                  <li><b>Upvedas</b></li>
                  <li><b>Darshanas</b></li>
                </ul>
              </motion.div>

              {/* Sutras */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Sutras of Rituals and Customs</h3>
                <p className="text-gray-700">
                  Ritual and daily life in the Later Vedic period are detailed through three major types of Sutras:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
                  <li><b>Shrauta Sutras / Shulva Sutras</b> – deal with solemn public sacrifices and ceremonies</li>
                  <li><b>Grihya Sutras</b> – outline family and domestic ceremonies</li>
                  <li><b>Dharma Sutras</b> – address laws regarding varnas, ashramas, and broader duties</li>
                </ul>
              </motion.div>

              {/* The Epics */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">The Great Epics</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    <b>Ramayana</b> – Composed by Valmiki, also known as <em>Adi Kavya</em> (the first epic), currently contains 24,000 shlokas (verses).
                  </li>
                  <li>
                    <b>Mahabharata</b> – Composed by Ved Vyasa, the world’s oldest epic, with around 100,000 shlokas. Includes the <b>Bhagavad Gita</b> (extracted from the Bhishma Parva) and the longest section, <b>Shanti Parva</b>.
                  </li>
                </ul>
              </motion.div>

              {/* Upvedas and Smriti */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Upvedas & Other Smriti Texts</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>
                    <b>Upvedas</b> (“auxiliary Vedas”): Ancient texts traditionally associated with the main Vedas, covering arts, sciences, and applied knowledge.
                  </li>
                  <li>
                    <b>Smritis</b>, <b>Puranas</b>, <b>Mahakavyas</b>, and <b>Darshanas</b> collectively cover law, mythology, poetry, and philosophy, forming a major legacy of post-Vedic India.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="religious-movements"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-lime-50 border-lime-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-lime-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-lime-600 bg-lime-100">
                  <Crosshair size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Religious Movements (6th Century B.C.)</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Jainism</span>
                    <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Buddhism</span>
                    <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Upanishads</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("religious-movements") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Overview */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-lime-700 mb-3">Overview</h3>
                <p className="text-gray-700">
                  The 6th century B.C. was an age of intense religious transformation in Indian history. It witnessed two parallel developments: internal reform within the Vedic system and the rise of new non-Vedic, heterodox movements.
                </p>
                <p className="mt-3 text-gray-700">
                  This period is marked as one of spiritual awakening, rational thought, and philosophical experimentation that would shape the future of Indian belief systems.
                </p>
              </motion.div>

              {/* Inner Reforms - Upanishads */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-lime-700 mb-3">Internal Reform – The Upanishads</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>The Upanishadic philosophy emerged as a response to excessive ritualism and sacrifice in the Vedic tradition.</li>
                  <li>They emphasized <strong>knowledge (Jnana)</strong> and introspection as the path to attain <strong>Moksha</strong> (liberation).</li>
                  <li>It reformed the Vedic system while remaining anchored to it — not dismantling, but transcending the ritualistic framework.</li>
                </ul>
              </motion.div>

              {/* New Religious Movements - Jainism & Buddhism */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-lime-700 mb-3">External Challenge – Heterodox Sects</h3>
                <p className="text-gray-700 mb-2">
                  In contrast to internal reform, the 6th century B.C. also saw the rise of sects that completely rejected the authority of the Vedas.
                </p>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li><strong>Jainism</strong> and <strong>Buddhism</strong> arose as major non-Vedic religions.</li>
                  <li>They opposed <strong>ritualism, caste-based discrimination, and priesthood dominance</strong>.</li>
                  <li>Their goals were not to reform or purify Vedic thought but to offer complete alternatives to it, emphasizing non-violence, meditation, and ethical living.</li>
                </ul>
              </motion.div>

              {/* Contrast & Impact */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-lime-700 mb-3">Impact on Indian Religious Thought</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>This period represents a rupture between orthodoxy and reform — leading to diversification in spiritual options for the Indian masses.</li>
                  <li>Buddhism and Jainism emphasized <strong>universal values over ritual duty</strong>.</li>
                  <li>The Upanishadic stream reinforced the spiritual depth of the Vedic tradition, integrating philosophy with religion.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhism"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-blue-50 border-blue-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-blue-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-blue-600 bg-blue-100">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Buddhism</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Gautama Buddha</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Buddhist Councils</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhism") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Buddha's Life */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">Buddha's Life</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li><b>Names:</b> Gautama, Siddhartha, Sakyamuni, Tathagata</li>
                  <li><b>Birth:</b> 563 BCE (widely accepted), Lumbini near Kapilvastu (Shakya republic capital, present-day Nepal)[1][2][4][5][7][8][9]</li>
                  <li>Son of King Suddhodana and Queen Mayadevi</li>
                  <li><b>The Great Renunciation:</b> Left home at age 29 to seek enlightenment</li>
                  <li><b>Enlightenment:</b> Attained "Nirvana" or "Bodhi" at age 35 under the Bodhi tree, Bodh Gaya, c. 528 BCE[1][2][3]</li>
                  <li><b>First Sermon:</b> Delivered at Sarnath (Deer Park, near Varanasi), teaching the Four Noble Truths to his first five disciples—this is described as "Turning the Wheel of Dharma"[1][2][3][7]</li>
                  <li><b>Travels:</b> Taught across northeast India for 45 years, gathering a large monastic community (Sangha)[1][2][3]</li>
                  <li><b>Mahaparinirvana (Death):</b> 483 BCE, at the age of 80, in Kusinara (Kushinagar, Uttar Pradesh)[1][2][3][4][5][6][7][8][9]</li>
                </ul>
              </motion.div>

              {/* Buddhist Councils */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-3">Buddhist Councils</h3>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>
                    <b>First Council (483 BCE):</b>
                    <ul className="ml-5 list-disc">
                      <li>Location: Sattapanni cave, near Rajagriha</li>
                      <li>Purpose: Compiling the <b>Sutta Pitaka</b> and <b>Vinaya Pitaka</b></li>
                    </ul>
                  </li>
                  <li>
                    <b>Second Council (383 BCE):</b>
                    <ul className="ml-5 list-disc">
                      <li>Location: Vaisali</li>
                      <li>Purpose: Resolving disputes regarding monastic discipline and practice</li>
                    </ul>
                  </li>
                  <li>
                    <b>Third Council:</b>
                    <ul className="ml-5 list-disc">
                      <li>Location: Pataliputra, during Ashoka's reign (around 236 years after Buddha's death)</li>
                      <li>President: Moggaliputta Tissa</li>
                      <li>Purpose: Revising and purifying the Buddhist scriptures</li>
                    </ul>
                  </li>
                  <li>
                    <b>Fourth Council:</b>
                    <ul className="ml-5 list-disc">
                      <li>Location: Kashmir, during Kanishka's reign</li>
                      <li>President: Vasumitra, with Asvaghosha as deputy</li>
                      <li>Significance: Division of Buddhism into <b>Mahayana</b> and <b>Hinayana</b> sects</li>
                    </ul>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-councils"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-cyan-50 border-cyan-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-cyan-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-cyan-600 bg-cyan-100">
                  <Crosshair size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Buddhist Councils</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Texts & Sects</span>
                    <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Succession</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-councils") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Council 1 */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-cyan-700 mb-3">1st Buddhist Council (483 BCE)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><strong>Location:</strong> Sattapanni cave, near Rajagriha</li>
                  <li><strong>Purpose:</strong> Compilation of <em>Sutta Pitaka</em> and <em>Vinaya Pitaka</em></li>
                </ul>
              </motion.div>

              {/* Council 2 */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-cyan-700 mb-3">2nd Buddhist Council (383 BCE)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><strong>Location:</strong> Vaishali</li>
                  <li><strong>Purpose:</strong> Resolve differences related to monastic practices and discipline</li>
                </ul>
              </motion.div>

              {/* Council 3 */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-cyan-700 mb-3">3rd Buddhist Council (c. 250 BCE)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><strong>Location:</strong> Pataliputra (under Ashoka)</li>
                  <li><strong>President:</strong> Moggaliputta Tissa</li>
                  <li><strong>Purpose:</strong> Revision of scriptures and purging of heretical sects</li>
                </ul>
              </motion.div>

              {/* Council 4 */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-cyan-700 mb-3">4th Buddhist Council (Kanishka Era)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><strong>Location:</strong> Kashmir (Kundalvana)</li>
                  <li><strong>President:</strong> Vasumitra (with Asvaghosha)</li>
                  <li><strong>Outcome:</strong> Division of Buddhists into <strong>Mahayana</strong> and <strong>Hinayana</strong></li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-scriptures"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-green-50 border-green-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-green-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-green-600 bg-green-100">
                  <Book size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Buddhist Scriptures</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Tipitaka</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Canon & Chronicles</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-scriptures") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Tripitaka Overview */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-green-700 mb-3">The Tripitaka (Three Baskets)</h3>
                <p className="text-gray-700">
                  The core Buddhist scriptures are collectively called the <b>Tripitaka</b> (Pali: Tipitaka), or "Three Baskets": <b>Vinaya Pitaka</b>, <b>Sutta (Sutra) Pitaka</b>, and <b>Abhidhamma Pitaka</b>. These texts comprise the foundation of the Theravada canon and much of Buddhist teaching<sup>[1][2][3][4][5][6][7][9][10]</sup>.
                </p>
              </motion.div>

              {/* Vinaya Pitaka */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-green-700 mb-3">Vinaya Pitaka</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Mainly deals with rules and regulations for monastic discipline and describes how the <b>Sangha</b> (monastic community) developed.</li>
                  <li>Contains many stories, with an account of the Buddha’s life and teachings interwoven.</li>
                  <li>Divided into three main sections:</li>
                  <ul className="ml-4 list-disc text-gray-700">
                    <li><b>Sutta-vibhanga:</b> Commentary on the central rules (Patimokkha) for monks and nuns.</li>
                    <li><b>Khandhakas:</b> Detailed regulations on monastic life, grouped into Mahavagga and Cullavagga.</li>
                    <li><b>Parivara:</b> An appendix-like summary/handbook, often attributed to a Ceylonese monk.</li>
                  </ul>
                </ul>
              </motion.div>

              {/* Sutta/Sutra Pitaka */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-green-700 mb-3">Sutta (Sutra) Pitaka</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Contains discourses delivered chiefly by Buddha, but also by some key disciples (Sariputta, Ananda, Moggalana, etc.).</li>
                  <li>Lays out the foundational principles and teachings of Buddhism in five <b>Nikayas</b> (collections):</li>
                  <ul className="ml-4 list-disc text-gray-700">
                    <li>Digha Nikaya (Long Discourses)</li>
                    <li>Majjhima Nikaya (Middle-length)</li>
                    <li>Samyutta Nikaya (Grouped by subject)</li>
                    <li>Anguttara Nikaya (Arranged numerically)</li>
                    <li>Khuddaka Nikaya (Miscellaneous texts, including the Dhammapada)</li>
                  </ul>
                </ul>
              </motion.div>

              {/* Abhidhamma Pitaka */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-green-700 mb-3">Abhidhamma Pitaka</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Presents the deeper philosophy and psychology of the Buddha’s teaching.</li>
                  <li>Investigates mind and matter to help explain reality “as it truly is,” refining and systematizing doctrine for scholarly reflection.</li>
                  <li>Composed of seven analytical books, classified as “higher teaching.”</li>
                </ul>
              </motion.div>

              {/* Non-Canonical Literature */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-semibold text-lg text-green-700 mb-3">Other Important Buddhist Literature</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li><b>Milindapanho</b>: A famous dialog between King Menander (Milinda) and monk Nagasena.</li>
                    <li><b>Dipavamsa</b> & <b>Mahavamsa</b>: The two great chronicles of ancient Ceylon (Sri Lanka), key for Buddhist history.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-important-facts"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-orange-50 border-orange-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-orange-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-orange-600 bg-orange-100">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Know The Important Facts</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Key Figures</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Buddhist Thought</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-important-facts") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >

              {/* Asvaghosha */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Aśvaghoṣa</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Contemporary of Kanishka.</li>
                  <li>Poet, dramatist, musician, scholar, and debater.</li>
                </ul>
              </motion.div>

              {/* Nagarjuna */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Nāgārjuna</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Friend and contemporary of Satavahana king Yajnasri Gautamiputra (Andhra region).</li>
                  <li>Founder of the <b>Madhyamika School</b> of Buddhist philosophy, also known as <b>Śūnyavāda</b> (Doctrine of Emptiness).</li>
                </ul>
              </motion.div>

              {/* Asanga & Vasubandhu */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Asaṅga & Vasubandhu</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Brothers who flourished in Punjab region (4th century AD).</li>
                  <li>Asaṅga: Foremost teacher of the <b>Yogāchāra (Vijñānavāda) School</b>, founded by his guru Maitreyanātha.</li>
                  <li>Vasubandhu: Famous for his treatise <b>Abhidharmakośa</b>, an authoritative Buddhist encyclopedia.</li>
                </ul>
              </motion.div>

              {/* Buddhaghosha */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Buddhaghoṣa</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Lived in the 5th century AD (Theravada tradition).</li>
                  <li>Pali scholar noted for the <b>Visuddhimagga</b> and exhaustive commentaries on the Buddhist canon, pillars of post-Tripitaka literature.</li>
                </ul>
              </motion.div>

              {/* Dinnaga */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.20 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Dinnāga</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Lived in late 5th century AD.</li>
                  <li>Pioneering Buddhist logician; recognized as the founder of Buddhist logic (Hetuvidya).</li>
                </ul>
              </motion.div>

              {/* Dharmakīrti */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Dharmakīrti</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Lived in the 7th century AD.</li>
                  <li>Great Buddhist logician and dialectician; known for his subtle philosophical thought.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-philosophy"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-fuchsia-50 border-fuchsia-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-fuchsia-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-fuchsia-600 bg-fuchsia-100">
                  <Crosshair size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Buddhist Philosophy</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">Core Doctrines</span>
                    <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">Epistemology & Reality</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-philosophy") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {/* Idealism */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-fuchsia-700 mb-3">Idealism & Epistemology</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Buddhism holds that there are two valid sources of knowledge (<b>pramana</b>):</li>
                  <ul className="ml-4 list-disc text-gray-700">
                    <li><b>Perception (pratyaksha)</b> — direct sensory experience</li>
                    <li><b>Inference (anumana)</b> — reasoning based on observation</li>
                  </ul>
                </ul>
              </motion.div>

              {/* Pratityasamutpada */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-fuchsia-700 mb-3">
                  Doctrine of Dependent Origination <span className="text-sm text-gray-500">(Pratītyasamutpāda)</span>
                </h3>
                <p className="text-gray-700">
                  This is a central principle of Buddhist thought. It states that:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-2 text-gray-700">
                  <li>All things arise due to causes and conditions.</li>
                  <li>The empirical world dominated by the intellect is not absolute—everything is interdependent, relative, and conditioned.</li>
                  <li>Hence, all phenomena are transient, subject to birth and death, and inherently <b>impermanent (Anitya)</b>.</li>
                </ul>
              </motion.div>

              {/* Theory of Momentariness */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-fuchsia-700 mb-3">
                  Theory of Momentariness <span className="text-sm text-gray-500">(Kṣaṇabhaṅga)</span>
                </h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Everything in existence is momentary and constantly changing.</li>
                  <li>The universe is a series of perishable qualities and fleeting mental or physical formations (skandhas).</li>
                  <li>Only those things that can produce effects are considered to have real existence—what cannot produce effect is considered non-existent.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-core-teachings"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-sky-50 border-sky-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-sky-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-sky-600 bg-sky-100">
                  <Crosshair size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Core Teachings of Buddhism</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">Four Noble Truths</span>
                    <span className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">Eight-Fold Path</span>
                    <span className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">Five Great Events</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-core-teachings") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >

              {/* Five Great Events */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-sky-700 mb-3">Five Great Events of Buddha’s Life & Their Symbols</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><b>Birth:</b> Symbol – Lotus & Bull</li>
                  <li><b>Great Renunciation:</b> Symbol – Horse</li>
                  <li><b>Nirvana (Enlightenment):</b> Symbol – Bodhi Tree</li>
                  <li><b>First Sermon:</b> Symbol – Dharmachakra (Wheel of Dharma)</li>
                  <li><b>Parinirvana (Death):</b> Symbol – Stupa</li>
                </ul>
              </motion.div>

              {/* Four Noble Truths */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-sky-700 mb-3">Four Noble Truths</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>The world is full of sorrows (dukkha).</li>
                  <li>Desire (<i>tanha</i>) is the root cause of sorrow.</li>
                  <li>Elimination of desire ends suffering (dukkha nirodha).</li>
                  <li>Desire can be eliminated by following the Eight-Fold Path.</li>
                </ul>
              </motion.div>

              {/* Eight-Fold Path */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-sky-700 mb-3">Eight-Fold Path (<i>Ashtangika Marga</i>)</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-700 list-disc list-inside">
                  <li>Right Understanding</li>
                  <li>Right Thought</li>
                  <li>Right Speech</li>
                  <li>Right Action</li>
                  <li>Right Livelihood</li>
                  <li>Right Effort</li>
                  <li>Right Mindfulness</li>
                  <li>Right Concentration</li>
                </ul>
              </motion.div>

              {/* Three Jewels */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="font-semibold text-lg text-sky-700 mb-3">Three Jewels / Three Ratnas</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><b>Buddha</b> – the enlightened one (the teacher)</li>
                  <li><b>Dhamma</b> – the teachings of Buddha</li>
                  <li><b>Sangha</b> – the community of monks and followers</li>
                </ul>
              </motion.div>

            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-sacred-shrines"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-rose-50 border-rose-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-rose-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-rose-600 bg-rose-100">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Sacred Shrines & Architecture</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">Ashta Mahasthanas</span>
                    <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">Stupa · Chaitya · Vihara</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-sacred-shrines") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{ hidden: {}, visible: {} }}
            >
              {/* Primary Sacred Sites */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-rose-700 mb-3">Eight Great Buddhist Shrines (Ashta Mahasthanas)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><b>Lumbini</b> – Birthplace of Buddha</li>
                  <li><b>Bodh Gaya</b> – Place of Enlightenment</li>
                  <li><b>Sarnath</b> – First Sermon (Dharmachakra)</li>
                  <li><b>Kushinagar</b> – Mahaparinirvana (death)</li>
                  <li><b>Sravasti</b> – Place of many sermons and miracles</li>
                  <li><b>Rajgriha</b> – Venue of first Buddhist Council</li>
                  <li><b>Vaishali</b> – Site of second Buddhist Council</li>
                  <li><b>Sankasya</b> – Buddha’s descent from heaven</li>
                </ul>
              </motion.div>

              {/* Other Buddhist Centres */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-rose-700 mb-3">Other Important Buddhist Centres in Ancient India</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 list-disc list-inside text-gray-700">
                  <li>Amravati, Nagarjunakonda (Andhra Pradesh)</li>
                  <li>Nalanda (Bihar)</li>
                  <li>Sanchi, Bharhut (Madhya Pradesh)</li>
                  <li>Ajanta, Ellora (Maharashtra)</li>
                  <li>Dhaulagiri (Odisha)</li>
                  <li>Junagadh, Valabhi (Gujarat)</li>
                  <li>Kannauj, Kausambi, Mathura (Uttar Pradesh)</li>
                  <li>Jagadala, Somapuri (West Bengal)</li>
                </ul>
              </motion.div>

              {/* Buddhist Architecture */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-rose-700 mb-3">Forms of Buddhist Architecture</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><b>Stupa</b> – Dome-shaped structure to enshrine relics of Buddha or famous monks.</li>
                  <li><b>Chaitya</b> – Prayer hall for collective worship.</li>
                  <li><b>Vihara</b> – Monasteries and residential complexes for monks.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="types-of-buddhism"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-yellow-50 border-yellow-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-yellow-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-yellow-600 bg-yellow-100">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Types of Buddhism</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Hinayana</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Mahayana</span>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Vajrayana</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("types-of-buddhism") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{ hidden: {}, visible: {} }}
            >
              {/* Hinayana */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Hinayana (Theravada)</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Follows the original teachings of Buddha, focusing on individual salvation through self-discipline and meditation<sup>[1][2][3][4][5][6][7][8]</sup>.</li>
                  <li>Does not believe in the divinity of Buddha or idol worship.</li>
                  <li>Emphasizes the Arhat ideal—aiming for personal nirvana rather than universal salvation.</li>
                  <li>Like Jainism, it is a non-theistic system; Karma replaces the idea of God.</li>
                  <li>Considers Nirvana as complete extinction of all desires and suffering (negative cessation).</li>
                  <li>Scriptures primarily in Pali; prominent in Sri Lanka, Myanmar, Thailand, Cambodia, and Laos.</li>
                  <li>The oldest school is Sthaviravada (Theravada in Pali), with sub-schools like Sarvastivada and Sautantrika (only Sarvastivada survived in Sanskrit tradition).</li>
                </ul>
              </motion.div>

              {/* Mahayana */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Mahayana</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Believes in the heavenly nature and divinity of Buddha<sup>[1][2][3][4][5][6][7][8]</sup>, and the ideal of universal salvation (Bodhisattva path).</li>
                  <li>Practices and encourages idol worship and devotion to Buddhas and Bodhisattvas.</li>
                  <li>Considers Nirvana as a positive state of bliss, not simply the cessation of suffering.</li>
                  <li>Scriptures are written in Sanskrit; followed in China, Korea, Japan, and Tibet.</li>
                  <li>Two chief philosophical schools: <b>Madhyamika</b> (propounded by Nagarjuna, teaching the middle way) and <b>Yogachara</b> (founded by Maitreyanatha and developed by Asanga and Vasubandhu, emphasizing absolute idealism).</li>
                  <li>Encourages participation of both monks and laypeople in the spiritual path.</li>
                </ul>
              </motion.div>

              {/* Vajrayana */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-yellow-700 mb-3">Vajrayana</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Believes that salvation can be achieved by acquiring magic power, called "Vajra".</li>
                  <li>Chief divinities: <b>Taras</b> and other tantric deities.</li>
                  <li>Became popular in Eastern India, especially Bengal and Bihar, and later spread to Tibet and Mongolia.</li>
                  <li>Incorporates secret rituals, mantras, and esoteric practices in the quest for rapid enlightenment.</li>
                </ul>
              </motion.div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          value="buddhist-key-facts-2"
          className="rounded-xl border overflow-hidden transition-all duration-300 bg-orange-50 border-orange-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-orange-100/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg text-orange-600 bg-orange-100">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-800">Know The Important Facts</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Philosophy</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Teachings</span>
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeAccordion.includes("buddhist-key-facts-2") ? 'rotate-180' : ''}`}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <motion.div
              className="pb-5 px-5 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
              variants={{ hidden: {}, visible: {} }}
            >

              {/* Buddha's Teachers */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Early Influences</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>The Buddha extended the spiritual teachings of two elder contemporaries—<b>Alara Kalama</b> and <b>Uddaka Ramaputta</b>.</li>
                </ul>
              </motion.div>

              {/* Core Philosophy */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Buddhist Worldview</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Buddhism teaches: <b>no Self, no Soul (Anatta), no God, and no Spirit</b>.</li>
                  <li>Little interest in theological/metaphysical speculation — it's practical and focused on <b>experience</b>.</li>
                  <li>Buddhism is considered both <b>scientific</b> (based on cause & effect) and <b>psychological</b> (focused on human perception).</li>
                </ul>
              </motion.div>

              {/* Women in Monasteries */}
              <motion.div
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold text-lg text-orange-700 mb-3">Buddha’s Reflection on Monastic Orders</h3>
                <blockquote className="italic text-gray-600 border-l-4 pl-4 border-orange-300">
                  “If women were not admitted into the monasteries, Buddhism would have continued for a thousand years,  
                  but because this admission has been granted, it would last only five hundred years.”  
                  <br />– <span className="font-semibold">Gautama Buddha</span>
                </blockquote>
                <p className="mt-2 text-gray-700">
                  A historically significant quote — it reflects debates around gender and monastic regulation in early Sangha formation.
                </p>
              </motion.div>

            </motion.div>
          </Accordion.Content>
        </Accordion.Item>

      <Accordion.Item
        value="jainism-life-of-mahavira"
        className="rounded-xl border overflow-hidden transition-all duration-300 bg-emerald-50 border-emerald-200"
      >
        <Accordion.Header>
          <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-emerald-100/50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg text-emerald-600 bg-emerald-100">
                <UserCircle2 size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">Jainism: Life of Mahavira</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Mahavira</span>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Tirthankara</span>
                </div>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${activeAccordion.includes("jainism-life-of-mahavira") ? 'rotate-180' : ''}`}
            />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <motion.div
            className="pb-5 px-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            variants={{ hidden: {}, visible: {} }}
          >

            {/* Birth and Early Life */}
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg text-emerald-700 mb-3">Birth and Early Life</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Born in <b>540 BCE</b> at <b>Kundagrama</b> near Vaishali (modern Bihar) into the noble Kshatriya clan of King Siddhartha and Queen Trisala.<sup>[1][2][5][7]</sup></li>
                <li>His original name was <b>Vardhamana</b>.</li>
                <li>Father: Siddhartha; Mother: Trisala; Wife: Yasoda; Daughter: Jameli.<sup>[3][4][5]</sup></li>
              </ul>
            </motion.div>

            {/* Renunciation and Enlightenment */}
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h3 className="font-semibold text-lg text-emerald-700 mb-3">Renunciation and Kaivalya (Enlightenment)</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>At age 30, Mahavira renounced his royal life and became an ascetic.<sup>[1][2][6]</sup></li>
                <li>Practiced rigorous penance and meditation for 12 years, including extreme austerities.<sup>[3][4][6]</sup></li>
                <li>Attained <b>Kevala Jnana</b> (omniscience/absolute knowledge), also called <b>Kaivalya</b>, at age 42 at Jrimbhikagrama in eastern India.<sup>[2][4][5]</sup></li>
              </ul>
            </motion.div>

            {/* Later Life, Titles, and Death */}
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg text-emerald-700 mb-3">Later Life, Titles, and Death</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Preached Jain principles for 30 years after enlightenment, traveling widely across northeast India.<sup>[2][3][4]</sup></li>
                <li>Died at the age of 72 in <b>468 BCE</b> at <b>Pavapuri</b> near Rajgriha (Rajgir, Bihar).<sup>[2][4][5]</sup></li>
                <li>Known by titles: <b>Jina</b> (“victor”), <b>Jitendriya</b> (“conqueror of the senses”), <b>Nirgrantha</b> (“free from bonds”), and <b>Mahavira</b> (“great hero”).<sup>[2][3][4]</sup></li>
              </ul>
            </motion.div>

          </motion.div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="jainism-path-principles"
        className="rounded-xl border overflow-hidden transition-all duration-300 bg-teal-50 border-teal-200"
      >
        <Accordion.Header>
          <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-teal-100/50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg text-teal-600 bg-teal-100">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">Jainism: The Path to Liberation & Principles</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Three Ratnas</span>
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Five Main Teachings</span>
                  <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Core Principles</span>
                </div>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${activeAccordion.includes("jainism-path-principles") ? 'rotate-180' : ''}`}
            />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <motion.div
            className="pb-5 px-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            variants={{ hidden: {}, visible: {} }}
          >

            {/* Way to Nirvana: Three Ratnas */}
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg text-teal-700 mb-3">Way to Nirvana: The Three Ratnas (Three Jewels)</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li><b>Right Faith (Samyak Darshan / Samyak Vishwas):</b> Belief in the truth of Jain teachings and reality.<sup>[1][2][3][4][5][6][7][8][9][10]</sup></li>
                <li><b>Right Knowledge (Samyak Jnana):</b> Clear and correct understanding of the universe, the soul, karma, and liberation.</li>
                <li><b>Right Conduct (Samyak Charitra or Samyak Karma):</b> Following a moral and ethical life through self-control, non-violence, truthfulness, and virtuous action.</li>
              </ul>
              <p className="mt-2 text-gray-700">
                These three—faith, knowledge, and conduct—together guide Jains toward liberation (moksha or nirvana), and must be harmonized for genuine progress.<sup>[1][3][6][10]</sup>
              </p>
            </motion.div>

            {/* Core Philosophical Principles */}
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h3 className="font-semibold text-lg text-teal-700 mb-3">Core Principles of Jainism</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Rejected the authority of the Vedas and the Vedic rituals.</li>
                <li>Did not believe in the existence of a creator God.</li>
                <li>Emphasized belief in karma and the transmigration of the soul.</li>
                <li>Laid great emphasis on spiritual and social equality.</li>
              </ul>
            </motion.div>
            
            {/* Five Main Teachings */}
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg text-teal-700 mb-3">Five Main Teachings (Mahavratas)</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li><b>Ahimsa</b> (Non-injury/Non-violence)</li>
                <li><b>Satya</b> (Non-lying/Truthfulness)</li>
                <li><b>Asteya</b> (Non-stealing)</li>
                <li><b>Aparigraha</b> (Non-possession/Non-attachment)</li>
                <li><b>Brahmacharya</b> (Observing continence or chastity) <span className="text-gray-500 text-xs">(added by Mahavira)</span></li>
              </ul>
              <p className="mt-2 text-gray-700 text-sm">
                The first four principles were preached by Parsvanatha; the fifth, Brahmacharya, was added by Mahavira.
              </p>
            </motion.div>

          </motion.div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="mauryan-empire-ssc-cgl"
        className="rounded-xl border overflow-hidden transition-all duration-300 bg-blue-50 border-blue-200"
      >
        <Accordion.Header>
          <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-blue-100/50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg text-blue-600 bg-blue-100">
                <Building2 size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">Mauryan Empire (325 BC -183 BC)</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Ancient History</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Most Asked</span>
                </div>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${activeAccordion.includes("mauryan-empire-ssc-cgl") ? 'rotate-180' : ''}`}
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <motion.div
            className="pb-5 px-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  <b>Founder:</b> Chandragupta Maurya, with the help of Chanakya (Kautilya), overthrew the Nanda dynasty (around 322 BCE).
                </li>
                <li>
                  <b>Greatest ruler:</b> Ashoka (grandson of Chandragupta); famous for Kalinga War, conversion to Buddhism, and edicts spread across India.
                </li>
                <li>
                  <b>Capital:</b> Pataliputra (modern Patna).
                </li>
                <li>
                  <b>Administration:</b> Highly centralized, described in Kautilya's Arthashastra.
                </li>
                <li>
                  <b>Ashoka’s Edicts:</b> Rock and pillar edicts in Prakrit language using Brahmi script.
                </li>
                <li>
                  <b>Key Officers:</b> Amatyas (ministers), Dhamma Mahamatras (appointed by Ashoka for moral welfare).
                </li>
                <li>
                  <b>Decline:</b> Began after Ashoka’s death (232 BCE); last ruler was Brihadratha, killed by Pushyamitra Shunga (185 BCE).
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="gupta-empire"
        className="rounded-xl border overflow-hidden transition-all duration-300 bg-yellow-50 border-yellow-200"
      >
        <Accordion.Header>
          <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-yellow-100/50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg text-yellow-600 bg-yellow-100">
                <Building2 size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">Gupta Empire (320–550 CE)</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Golden Age</span>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Ancient India</span>
                </div>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${activeAccordion.includes("gupta-empire") ? 'rotate-180' : ''}`}
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <motion.div
            className="pb-5 px-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li><b>Founder:</b> Sri Gupta; his successors included Ghatotkacha and Chandragupta I.</li>
                <li><b>Chandragupta I:</b> Started the Gupta Era (320 CE); married Kumaradevi; used the title <b>Maharajadhiraja</b>.</li>
                <li><b>Samudragupta:</b> Known as 'Napoleon of India'; source – Allahabad Pillar Inscription by Harisena.</li>
                <li><b>Chandragupta II:</b> Also known as Vikramaditya; defeated Shakas; associated with Kalidasa and Navaratnas.</li>
                <li><b>Fa-Hien:</b> Chinese pilgrim visited during Chandragupta II’s reign; noted peaceful society & religious tolerance.</li>
                <li><b>Capital:</b> Pataliputra; major cities included Ujjain and Prayag.</li>
                <li><b>Administration:</b> Centralized monarchy with provinces (Bhuktis) and districts (Vishayas).</li>
                <li><b>Revenue & Economy:</b> Land revenue was main income; coins in gold (Dinaras); active trade with SE Asia & Rome.</li>
                <li><b>Army:</b> Standing army with divisions for elephants, cavalry, infantry; no harsh punishments.</li>
                <li><b>Golden Age:</b> Major progress in art (Ajanta caves), literature (Kalidasa), astronomy (Aryabhata), mathematics (zero, decimal).</li>
                <li><b>Religion:</b> Revival of Hinduism with Vishnu worship; tolerance toward Buddhism & Jainism.</li>
                <li><b>Decline:</b> After Skandagupta; weakened by Hun invasions; end by mid-6th century.</li>
              </ul>
            </motion.div>
          </motion.div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="post-gupta-period"
        className="rounded-xl border overflow-hidden transition-all duration-300 bg-orange-50 border-orange-200"
      >
        <Accordion.Header>
          <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-orange-100/50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg text-orange-600 bg-orange-100">
                <Crosshair size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">
                  Post-Gupta Period (550–750 BC)
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Regional Powers</span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Transition Era</span>
                </div>
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${activeAccordion.includes("post-gupta-period") ? 'rotate-180' : ''}`}
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="accordion-panel overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <motion.div
            className="pb-5 px-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.div
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  <b>Period:</b> Roughly <b>6th–8th century CE</b>; marked by the decline of the Gupta Empire and rise of many <b>regional kingdoms</b> in North and South India.
                </li>
                <li>
                  <b>Political Fragmentation:</b> No strong central power; <b>Maukharis</b> (Kannauj), <b>Gaudas</b> (Bengal), <b>Maitrakas</b> (Valabhi), <b>Pushyabhutis</b> (Thanesar), and others emerged.<sup>[1][3][5][7][8]</sup>
                </li>
                <li>
                  <b>Battle of Sondani (528 CE):</b> Yashodharman of Malwa defeated the Hunas, further weakening northern polity.<sup>[1]</sup>
                </li>
                <li>
                  <b>Key Dynasty: Harsha (Pushyabhutis), 606–647 CE:</b> Last great emperor of North India; capital at Kannauj; promoted art, culture, and religious tolerance; defeated by Pulakesin II (Chalukya) in the Deccan.<sup>[2][3][5]</sup>
                </li>
                <li>
                  <b>Age of Three Empires/Tripartite Struggle (8th–9th century):</b>
                  - <b>Palas</b> (Bengal, capital at Mongyr),
                  - <b>Gurjara-Pratiharas</b> (Kannauj),
                  - <b>Rashtrakutas</b> (Manyakheta, Deccan).
                  <br />
                  Fought for control over Kannauj and North India.<sup>[3]</sup>
                </li>
                <li>
                  <b>South India:</b> Rise of <b>Pallavas</b> (Kanchipuram) and <b>Chalukyas</b> (Badami, later Kalyani); both were powerful, known for temple architecture.<sup>[2][6]</sup>
                </li>
                <li>
                  <b>Economy:</b> Trade declined due to Huna invasions; loss of gold and Roman trade;
                  shift towards a <b>self-sufficient village economy</b>; rise of feudalism (land grants, new hierarchy over land, rise of Kayasthas as scribes).<sup>[4]</sup>
                </li>
                <li>
                  <b>Society:</b> Formation of new castes; improved position of Shudras (agriculture), decline of Vaishyas (trade). Status of women declined (early marriages).<sup>[4]</sup>
                </li>
                <li>
                  <b>Religion & Culture:</b>
                  <ul className="ml-4 list-disc text-gray-700">
                    <li>Religious tolerance; <b>Brahmanism, Buddhism, and Shaivism</b> all flourished; growth of temples & monasteries.</li>
                    <li>Emergence of <b>Bhakti</b> and <b>Tantric</b> movements.</li>
                    <li>Local rulers issued land grants to Brahmanas, monks, and religious institutions.</li>
                  </ul>
                </li>
                <li>
                  <b>Art & Learning:</b> Regional styles in temple architecture (Ellora, Mahabalipuram, Badami caves); literature in Sanskrit, Tamil, Prakrit.<sup>[2]</sup>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </Accordion.Content>
      </Accordion.Item>


      </Accordion.Root>

      {/* Summary Card */}
      <div className="p-6 bg-gradient-to-br from-indigo-50 to-red-50 rounded-xl border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-2xl text-indigo-800 mb-4">Key Takeaways</h3>
        <div className="text-xl text-gray-600 mb-4">
          <b>Note:</b> The following points are carefully summarized for quick SSC exam revision. For more detailed explanations, refer to <span className="font-semibold">Lucent</span> or recommended YouTube channels.
        </div>
      </div>


      
    </div>
  );
};
