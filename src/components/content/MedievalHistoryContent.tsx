// File: src/components/content/MedievalHistoryContent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Cog, Swords, BookOpen, Globe, ChevronDown, ShieldCheck, Crown } from "lucide-react";

export const MedievalHistoryContent: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string[]>([]);
  
  // Color scheme for different sections

  return (
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* Accordion Sections */}
            <Accordion.Root 
                type="multiple" 
                className="space-y-4"
                value={activeAccordion}
                onValueChange={setActiveAccordion}
            >
                {/* Delhi Sultanat */}
                <Accordion.Item
                value="delhi-sultanate"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-lime-50 border-lime-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-lime-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-lime-600 bg-lime-100">
                        <ShieldCheck size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Delhi Sultanate <span className="text-sm font-normal text-gray-600">(1206–1526)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Dynasties</span>
                            <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Administration</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("delhi-sultanate") ? 'rotate-180' : ''}`}
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
                    {/* General Overview */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            The <b>Delhi Sultanate</b> (1206–1526) ruled much of northern India for over 300 years and consisted of five dynasties: Slave (Mamluk), Khilji, Tughlaq, Sayyid, and Lodi.<sup>[2][3][4]</sup>
                        </li>
                        <li>
                            The Sultanate established centralized Muslim rule in India; it paved the way for later Mughal expansion and Indo-Islamic culture.<sup>[2][4][6]</sup>
                        </li>
                        <li>
                            Its rulers introduced key administrative, economic, and military reforms that shaped medieval Indian governance.<sup>[1][3][4]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Slave (Mamluk) Dynasty */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-lime-700 mb-1">Slave Dynasty (1206–1290)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>Qutb-ud-din Aibak</b>: Founder; constructed Qutb Minar (foundation laid), built Quwwat-ul-Islam mosque, died in a polo accident.<sup>[2][3][4]</sup></li>
                        <li><b>Iltutmish</b>: Consolidated empire; introduced <b>Iqta system</b> (land revenue assignment to officers); saved Delhi from Mongol invasion; got Caliph's Investiture.<sup>[2][3]</sup></li>
                        <li><b>Razia Sultan</b>: First and only female ruler of the Sultanate; faced opposition from nobles.<sup>[2][4]</sup></li>
                        <li><b>Balban</b>: Strengthened monarchy, established strong central control, enforced 'Niyabat-i-Khudai' (king as God's deputy), broke power of Turkish nobles (Chahalgani).</li>
                        </ul>
                    </motion.div>

                    {/* Khilji Dynasty */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-lime-700 mb-1">Khilji Dynasty (1290–1320)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>Alauddin Khilji</b>: Most powerful Khilji ruler; expanded empire up to Deccan/South India, repelled Mongol invasions.<sup>[2][3]</sup></li>
                        <li>Introduced <b>market control system</b> (regulated prices of essential goods), land measurement for revenue, maintained a large, efficient standing army.</li>
                        <li>Imposed taxes: Kharaj (land tax), Ghari (house tax), and Charai (grazing tax).</li>
                        </ul>
                    </motion.div>

                    {/* Tughlaq Dynasty */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09 }}
                    >
                        <h3 className="font-semibold text-lg text-lime-700 mb-1">Tughlaq Dynasty (1320–1414)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>Ghiyas-ud-din Tughlaq</b>: Founder, restored order after Khiljis.</li>
                        <li><b>Muhammad bin Tughlaq</b>: Known for ambitious but unsuccessful experiments—<b>currency reforms</b> (token copper coins), <b>transfer of capital</b> from Delhi to Daulatabad and back, increase of taxation in Doab, and failed expedition to Khurasan.<sup>[2][3][4]</sup></li>
                        <li><b>Firoz Shah Tughlaq</b>: Focused on welfare (canal construction, hospitals, madrasas); repaired Qutb Minar, built new towns (Firozabad, Jaunpur); imposed <b>jizya tax</b> on Brahmins.</li>
                        </ul>
                    </motion.div>

                    {/* Sayyid and Lodi Dynasties */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                    >
                        <h3 className="font-semibold text-lg text-lime-700 mb-1">Sayyid (1414–1451) & Lodi Dynasty (1451–1526)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>Sayyids:</b> Khizr Khan founded dynasty after Timur’s invasion; weak control, mainly symbolic authority.<sup>[2][4]</sup></li>
                        <li><b>Lodis:</b> Bahlul Lodi established Afghan rule; <b>Sikandar Lodi</b> was an able ruler (founded Agra); <b>Ibrahim Lodi</b> last Sultan, defeated by Babur at First Battle of Panipat (1526), ending the Sultanate.<sup>[2][3]</sup></li>
                        </ul>
                    </motion.div>

                    {/* Administrative System & Military Organization */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <h3 className="font-semibold text-lg text-lime-700 mb-1">Administration & Military</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Central Administration:</b> Sultan as absolute authority; key officials—Naib (deputy), Wazir (finance), Ariz-i-mamalik (army), Diwan-i-insha (records), Sadr-us-Sudur (religious endowments).
                        </li>
                        <li>
                            <b>Provincial Administration:</b> Provinces (Iqtas) ruled by governors (muqtis/iqladar); revenue extracted through <b>Iqta</b> system.
                        </li>
                        <li>
                            <b>Military:</b> Sultanate maintained large standing armies, paid in cash; introduced branding of horses (dagh) and descriptive rolls (chehra system) under Alauddin Khilji.
                        </li>
                        <li>
                            Strategically built forts & city walls; recruited Turkish, Afghan, and local soldiers; cavalry was the backbone.
                        </li>
                        </ul>
                        <div className="text-xs text-lime-700 mt-2">
                        Exam Tip: Questions often focus on administrative innovations (Iqta, Chehra, Dagh), reforms of Alauddin & Muhammad bin Tughlaq, and sequence of dynasties.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="mughal-empire"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-rose-50 border-rose-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-rose-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-rose-600 bg-rose-100">
                        <Crown size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Mughal Empire <span className="text-sm font-normal text-gray-600">(1526–1857)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">Major Rulers</span>
                            <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">Policies & Decline</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("mughal-empire") ? 'rotate-180' : ''}`}
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
                    {/* Babur and First Battle of Panipat */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Babur and the First Battle of Panipat (1526)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Babur, a Timurid ruler from Central Asia, defeated Ibrahim Lodi at the First Battle of Panipat on 21 April 1526<sup>[1][2][3][4][5]</sup>, marking the beginning of the Mughal Empire in India.</li>
                        <li>This was one of the first Indian battles using gunpowder firearms and cannons; Babur’s smaller force (around 15,000 troops, 20+ cannons) overcame Lodi’s large army (30,000–40,000 and 1000+ war elephants).</li>
                        <li>Babur used new tactics: <b>Tulughma</b> (dividing army into flanks and center) and <b>Araba</b> (defensive carts tied with hides in front of artillery) which gave him a strategic advantage.</li>
                        <li>Ibrahim Lodi died on the battlefield; Delhi and Agra fell to Babur, ending the Delhi Sultanate and starting Mughal rule.</li>
                        </ul>
                    </motion.div>

                    {/* Humayun and his Struggles */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Humayun and His Struggles (1530–1556)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Babur’s son, Humayun, ascended the throne in 1530; faced opposition from Afghans (Sher Shah Suri), his brothers, and Rajputs.</li>
                        <li>Lost his kingdom to Sher Shah Suri (who founded the Suri Dynasty and built the Grand Trunk Road).</li>
                        <li>Spent years in exile in Persia, later reconquered Delhi with Persian support in 1555. Died accidentally in 1556.</li>
                        </ul>
                    </motion.div>

                    {/* Akbar's Reign */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Akbar’s Reign (1556–1605): Expansion & Reforms</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Ascended the throne at age 13 after Humayun; won Second Battle of Panipat (1556) over Hemu.</li>
                        <li>Introduced <b>Din-i-Ilahi</b> (1582): a syncretic faith promoting religious tolerance (not widely accepted).</li>
                        <li>Established <b>Mansabdari system</b>: all nobles/military commanders ranked (mansab), given jagirs (land revenues) as salary.</li>
                        <li>Promoted meritocracy, abolished jizya tax, and encouraged Rajput alliances via marriage.</li>
                        <li>Patronized arts and literature (“Navratnas” or Nine Jewels): e.g. Birbal, Tansen, Abul Fazl, Raja Todar Mal (finance), Faizi (poet), Abu'l-Fazl (historian).</li>
                        </ul>
                    </motion.div>

                    {/* Jahangir and his Policies */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Jahangir and His Policies (1605–1627)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Known for justice (“Chain of Justice” at Agra Fort for public grievances).</li>
                        <li>Promoted arts and Persian-style painting; his court had many European visitors like Sir Thomas Roe (English ambassador).</li>
                        <li>Wife Nur Jahan was influential in court politics and administration.</li>
                        </ul>
                    </motion.div>

                    {/* Shah Jahan */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Shah Jahan and Architectural Achievements (1628–1658)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Golden age of Mughal architecture: constructed the Taj Mahal at Agra (in memory of wife Mumtaz Mahal), Red Fort at Delhi, Jama Masjid, and many others.</li>
                        <li>His reign was marked by prosperity but eventual financial strain due to excessive spending on monuments and wars.</li>
                        </ul>
                    </motion.div>

                    {/* Aurangzeb */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Aurangzeb: Policies and Deccan Campaigns (1658–1707)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Longest reigning Mughal, known for orthodox Sunni policies: re-imposed jizya tax, strict Sharia law, destruction of several Hindu temples.</li>
                        <li>Expanded empire into Deccan (against Marathas, Bijapur, Golconda); faced strong resistance, especially from Shivaji and Marathas.</li>
                        <li>Continuous wars exhausted the empire's treasury and weakened Mughal central authority.</li>
                        </ul>
                    </motion.div>

                    {/* Later Mughals and Decline */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.18 }}
                    >
                        <h3 className="font-semibold text-lg text-rose-700 mb-1">Later Mughals and Decline (1707–1857)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>After Aurangzeb, empire weakened due to weak rulers (“Later Mughals”), succession disputes, and regional revolts (Marathas, Sikhs, Jats, Rajputs).</li>
                        <li>Nadir Shah’s (1739) and Ahmad Shah Durrani’s invasions further destroyed the empire’s prestige and resources.</li>
                        <li>By 1757, British East India Company became dominant power after Battle of Plassey.</li>
                        <li>Bahadur Shah II (Zafar) was the last Mughal; exiled by British after 1857 Revolt, ending the Mughal dynasty.</li>
                        </ul>
                        <div className="text-xs text-rose-700 mt-2">
                        <b>SSC Focus:</b> Key reforms (Mansabdari, Akbar’s policies), Battle of Panipat, Taj Mahal, Navratnas, and succession/order of emperors are frequently asked MCQs.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="regional-kingdoms"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-amber-50 border-amber-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-amber-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-amber-600 bg-amber-100">
                        <Globe size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Regional Kingdoms <span className="text-sm font-normal text-gray-600">(c. 14th–18th Century CE)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Vijayanagara</span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Deccan Sultanates</span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Marathas</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("regional-kingdoms") ? 'rotate-180' : ''}`}
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
                    {/* Vijayanagara Empire */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-amber-700 mb-1">Vijayanagara Empire (1336–1565 CE)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Founded by Harihara I and Bukka I on the banks of the Tungabhadra river in 1336, capitol at Hampi.<sup>[2][4][7][8][9]</sup></li>
                        <li>Four main dynasties: Sangama, Saluva, Tuluva (Krishnadevaraya’s line), and Aravidu.<sup>[4]</sup></li>
                        <li>Key rulers: <b>Harihara I, Bukka I, Deva Raya I & II, Krishnadevaraya</b> (“greatest ruler”, 1509–1529 CE), Achyuta Deva Raya.</li>
                        <li>Krishnadevaraya conquered Bijapur, Golconda, Orissa and wrote <i>Amuktamalyada</i> (Telugu). Patron of “Ashtadiggajas” (eight great poets).<sup>[2][4][7]</sup></li>
                        <li>Built Hazara Rama Temple, Vithala Swami Temple, irrigation dams. Encouraged Sanskrit, Kannada, Telugu, and Tamil.<sup>[2][4][7]</sup></li>
                        <li>Battle of Talikota (1565): Defeated by Deccan Sultanates, Hampi destroyed. Decline followed, but art and cultural legacy remained strong.<sup>[2][4][6][7]</sup></li>
                        </ul>
                    </motion.div>

                    {/* Bahmani Kingdom & Deccan Sultanates */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-amber-700 mb-1">Bahmani Kingdom & Deccan Sultanates (1347–1686 CE)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Bahmani Kingdom (founded 1347 by Ala-ud-din Bahman Shah) at Gulbarga (later Bidar); one of the first independent Muslim sultanates in the Deccan.</li>
                        <li>Important rulers: Mahmud Gawan (Prime Minister; administrative reforms, built madrasa at Bidar).</li>
                        <li>Famous for madrasas, grand mosques, Indo-Islamic architecture, and development of Persian and Deccani arts.</li>
                        <li>Broke up in 16th century into <b>five Deccan Sultanates</b>: Bijapur, Golconda, Ahmadnagar, Bidar, Berar. These were crucial in the Battle of Talikota (1565) against Vijayanagara.</li>
                        </ul>
                    </motion.div>

                    {/* Rajput Kingdoms and Their Resistance */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-amber-700 mb-1">Rajput Kingdoms & Their Resistance</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Not a unified empire. Major houses: Mewar (Sisodias), Marwar (Rathores), Amber (Kachwahas), Bundi, and others.</li>
                        <li>Known for valor and strong fortresses: Chittorgarh, Ranthambore, Kumbhalgarh, Jaisalmer.</li>
                        <li>Key figures: <b>Prithviraj Chauhan</b> (battled Muhammad Ghori), <b>Rana Kumbha</b>, <b>Rana Sanga</b> (fought Babur at Khanwa, 1527), <b>Maharana Pratap</b> (fought Akbar at Haldighati, 1576).</li>
                        <li>Maintained resistance against Delhi Sultanate, Mughals (esp. Akbar, Aurangzeb), and regional powers. Sometimes formed alliances (marriages, Mansabdari system with Mughals).</li>
                        </ul>
                    </motion.div>

                    {/* Maratha Rise under Shivaji */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09 }}
                    >
                        <h3 className="font-semibold text-lg text-amber-700 mb-1">Maratha Rise under Shivaji (17th Century)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>Shivaji Bhonsle</b> established Maratha power in western India, coronated at Raigad in 1674 as Chhatrapati.</li>
                        <li>Known for guerrilla warfare, strategic forts (Torna, Raigad, Sinhagad), and a strong navy.</li>
                        <li>Key policies: Ashtapradhan council (eight ministers), religious tolerance, protection of peasants. Abolished/reduced taxes on non-Hindus.</li>
                        <li>Continued resistance under successors (Sambhaji, Rajaram, Maharani Tarabai) and renowned generals like Bajirao I (expanded to North India).</li>
                        </ul>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="important-battles"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-indigo-50 border-indigo-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-indigo-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-indigo-600 bg-indigo-100">
                        <Swords size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Important Battles <span className="text-sm font-normal text-gray-600">(Panipat, Khanwa, Talikota)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">Turning Points</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("important-battles") ? 'rotate-180' : ''}`}
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

                    {/* First Battle of Panipat (1526) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-indigo-700 mb-1">First Battle of Panipat (1526)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Fought on <b>21 April 1526</b> near Panipat (Haryana) between <b>Babur</b> (Mughal) and <b>Ibrahim Lodi</b> (Delhi Sultanate).<sup>[1][2][3][4][5][6][9][10]</sup>
                        </li>
                        <li>
                            Babur’s force: ~15,000 men, 20–24 cannons; Lodi’s force: ~30,000–40,000 troops, 1,000+ war elephants.
                        </li>
                        <li>
                            Babur used <b>gunpowder artillery</b>, <b>Tulughma</b> (flanking formation), and <b>Araba</b> (cart barricade) tactics, which disoriented the enemy elephants and shattered the much larger Lodi force.
                        </li>
                        <li>
                            Ibrahim Lodi was killed; the <b>Mughal Empire</b> established, ending the Delhi Sultanate and beginning a new era in Indian history.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Second Battle of Panipat (1556) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.02 }}
                    >
                        <h3 className="font-semibold text-lg text-indigo-700 mb-1">Second Battle of Panipat (1556)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Fought on <b>5 November 1556</b> between <b>Akbar</b> (represented by Bairam Khan) and <b>Hemu</b> (Vikramaditya), the last powerful Hindu king of North India.
                        </li>
                        <li>
                            Hemu captured Delhi and crowned himself king. In the battle, an arrow struck Hemu in the eye; his army fled, and he was captured and executed.
                        </li>
                        <li>
                            Result: Restored Mughal power in North India under young Akbar after Humayun’s brief restoration.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Third Battle of Panipat (1761) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.04 }}
                    >
                        <h3 className="font-semibold text-lg text-indigo-700 mb-1">Third Battle of Panipat (1761)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Fought on <b>14 January 1761</b> between <b>Ahmad Shah Abdali</b> (Durrani, Afghanistan) and the <b>Marathas</b> (led by Sadashiv Rao Bhau and Vishwas Rao).
                        </li>
                        <li>
                            Massive casualties; Marathas were defeated due to lack of alliances and supply lines; crucial blow to Maratha power in North India.
                        </li>
                        <li>
                            Marked the decline of Maratha supremacy; created a power vacuum that facilitated British expansion in India.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Battle of Khanwa (1527) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-indigo-700 mb-1">Battle of Khanwa (1527)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Fought in <b>March 1527</b> near Khanwa (Rajasthan) between <b>Babur</b> (Mughals) and <b>Rana Sanga</b> of Mewar (with Rajput confederacy).
                        </li>
                        <li>
                            Babur defeated the Rajput alliance using artillery and Turkish tactics; declared himself Ghazi (defender of the faith).</li>
                        <li>
                            Outcome: Cemented Mughal rule in North India by breaking Rajput military strength.</li>
                        </ul>
                    </motion.div>

                    {/* Battle of Talikota (1565) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                    >
                        <h3 className="font-semibold text-lg text-indigo-700 mb-1">Battle of Talikota (1565)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Fought on <b>23 January 1565</b> between the <b>Vijayanagara Empire</b> (Aliya Rama Raya) and the combined forces of the <b>Deccan Sultanates</b> (Bijapur, Ahmadnagar, Golconda, Bidar, Berar).
                        </li>
                        <li>
                            The Vijayanagara army was devastated, Aliya Rama Raya was killed, and the capital Hampi was sacked and destroyed.
                        </li>
                        <li>
                            Marks the end of the mighty Vijayanagara Empire; opened the Deccan for Sultanate and later Mughal expansion.
                        </li>
                        </ul>
                    </motion.div>

                    <div className="text-xs text-indigo-700 mt-2">
                        <b>Exam Tip:</b> Focus on years, main belligerents, outcomes, and consequences—Panipat battles and Khanwa/Talikota are among the most asked in SSC CGL History MCQs.
                    </div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="cultural-religious-developments"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-fuchsia-50 border-fuchsia-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-fuchsia-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-fuchsia-600 bg-fuchsia-100">
                        <BookOpen size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Cultural & Religious Developments <span className="text-sm font-normal text-gray-600">(Medieval India)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">Bhakti/Sufi</span>
                            <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">Architecture</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("cultural-religious-developments") ? 'rotate-180' : ''}`}
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

                    {/* Bhakti Movement */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">Bhakti Movement</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Originated in South India in the 7th-8th centuries among Alvars (Vaishnavite) and Nayanars (Shaivite) saints, and spread northwards by 15th century.<sup>[3][6][7]</sup></li>
                        <li><b>Emphasized personal devotion</b> to a single god, <b>rejected caste and ritual formalism</b>, and promoted equality and love as the path to salvation.<sup>[1][2][3][6]</sup></li>
                        <li>Major northern saints: <b>Kabir</b> (saw unity between Hindu & Islam, rejected external rituals), <b>Guru Nanak</b> (founder of Sikhism), <b>Tulsidas</b> (wrote Ramcharitmanas), <b>Ravidas</b>, <b>Surdas</b>, <b>Mirabai</b>, <b>Chaitanya Mahaprabhu</b>.</li>
                        <li>Led to the use of vernacular languages in literature and poetry, brought spiritual ideas to common people.<sup>[2][3][5][6][8]</sup></li>
                        <li>Promoted religious tolerance and social reform, had deep influence on Indian culture, arts, and society.</li>
                        </ul>
                    </motion.div>

                    {/* Sufi Movement */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">Sufi Movement</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Sufism, the mystical aspect of Islam, stressed love, compassion, and direct union with God, rejecting rigid religious orthodoxy.<sup>[2][4][6][9]</sup></li>
                        <li>Emphasized <b>equality, service, and tolerance</b>—welcomed all regardless of caste or religion.</li>
                        <li>Key Sufi orders: <b>Chishti</b> (Khwaja Moinuddin Chishti in Ajmer, Nizamuddin Auliya in Delhi), <b>Suhrawardi</b>.</li>
                        <li>Sufi saints attracted followers by their piety, charity, and miracles (pirs & dargahs became centers of social harmony).</li>
                        <li>Used music (qawwali), poetry, and simple language, influencing Indian music, literature, and culture.</li>
                        </ul>
                    </motion.div>

                    {/* Key Saints */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">Prominent Saints</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Kabir:</b> Criticized caste and ritual, believed God is one (“Kabir Panthi” community); verses sung by Hindus & Muslims.<sup>[2][3]</sup>
                        </li>
                        <li>
                            <b>Guru Nanak:</b> Preached universal brotherhood, equality, and devotion to one God; founded <b>Sikhism</b>, whose teachings are preserved in the Guru Granth Sahib.<sup>[1][2]</sup>
                        </li>
                        <li>
                            <b>Tulsidas:</b> Authored Ramcharitmanas in Awadhi Hindi, bringing Ramayana to the masses.</li>
                        <li>
                            <b>Sufi saints:</b>
                            <ul className="ml-4 list-disc text-gray-700">
                            <li><b>Khwaja Moinuddin Chishti:</b> Founder of Chishti order in India (dargah at Ajmer); promoted love and service to humanity.</li>
                            <li><b>Nizamuddin Auliya:</b> Delhi’s famous Sufi master; valued simplicity, charity, and detachment.</li>
                            </ul>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Indo-Islamic Architecture */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">Indo-Islamic Architecture</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Blended Indian (Hindu/Buddhist) and Islamic (Persian/Arab) styles, seen in mosques, tombs, forts, and palaces.<sup>[2][6][8]</sup></li>
                        <li>Features: domes, arches, minarets, large courtyards, geometric & floral motifs, calligraphy.</li>
                        <li>Key monuments: <b>Qutb Minar</b> (Delhi, Slave dynasty), <b>Adhai Din Ka Jhopra</b> (Ajmer), <b>Gol Gumbaz</b> (Bijapur), <b>Red Fort</b> and <b>Jama Masjid</b> (Delhi, Mughal era), <b>Taj Mahal</b> (Agra).</li>
                        <li>Gardens (Charbagh concept), inlay work (pietra dura), and intricate marble/jali screens were hallmarks.</li>
                        </ul>
                    </motion.div>

                    <div className="text-xs text-fuchsia-700 mt-2">
                        <b>SSC Focus:</b> Remember teachings and impact of major saints, Sufi/bhakti features, and know 2–3 examples of Indo-Islamic monuments.
                    </div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="administrative-systems"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-sky-50 border-sky-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-sky-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-sky-600 bg-sky-100">
                        <Cog size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Administrative Systems <span className="text-sm font-normal text-gray-600">(Medieval India)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">Iqta</span>
                            <span className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">Mansabdari</span>
                            <span className="text-xs px-2 py-1 bg-sky-100 text-sky-800 rounded-full">Revenue Systems</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("administrative-systems") ? 'rotate-180' : ''}`}
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
                    {/* Iqta System under Sultans */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-sky-700 mb-1">Iqta System under Delhi Sultans</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            The <b>Iqta system</b> was a land revenue and administrative arrangement introduced by the Delhi Sultans (notably Iltutmish).
                        </li>
                        <li>
                            Land (iqta) was assigned to nobles and officials called <b>iqtadars</b>, who collected revenue and maintained soldiers for the Sultan.
                        </li>
                        <li>
                            Iqtadars were not landowners; land remained the property of the Sultan. Iqtas were transferable.
                        </li>
                        <li>
                            System ensured a steady supply of revenue and troops, making administration more centralized and disciplined.
                        </li>
                        <li>
                            Provided military services and administrative posts, but over time led to hereditary claims, requiring frequent reforms.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Mansabdari System under Mughals */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-sky-700 mb-1">Mansabdari System under Mughals</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Introduced by <b>Akbar</b>, the <b>Mansabdari system</b> was a combined civil and military bureaucracy organizing Mughal administration and army.<sup>[1][2][3][4][5][6][7][8][9]</sup>
                        </li>
                        <li>
                            <b>Mansab</b> means rank — every officer was assigned a numerical rank, which determined status, salary, and contingent of soldiers to be maintained.
                        </li>
                        <li>
                            Two main components: <b>Zat</b> (personal rank, salary, status) and <b>Sawar</b> (number of cavalrymen to be maintained).
                        </li>
                        <li>
                            Ranks ranged from 10 to 5,000 (later up to 7,000); highest ranks reserved for princes and top nobles.
                        </li>
                        <li>
                            Mansabdars were paid by jagir (land assignment) or cash; responsible for revenue collection, military recruitment, law and order.
                        </li>
                        <li>
                            <b>Jahangir</b> introduced <b>Du-Aspah Sih-Aspah</b> system (allowing select nobles to maintain double/triple cavalry), and <b>Shah Jahan</b> refined allowances with Month Scale System.
                        </li>
                        <li>
                            Features: Not hereditary; allowed social mobility and merit; promoted centralization, reduced feudal power, and ensured loyalty to emperor.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Revenue systems and Akbar’s Land Revenue Reforms */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-sky-700 mb-1">Revenue Systems: Akbar’s Land Revenue Reforms</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Akbar’s finance minister Raja Todar Mal</b> implemented comprehensive revenue reforms known as the <b>Bandobast (Zabti) system</b>.
                        </li>
                        <li>
                            Land was surveyed, measured (using standardized <b>Gaj-i-Ilahi</b>), and classified by fertility/productivity.
                        </li>
                        <li>
                            Average yield and prices over 10 years were calculated, and one-third of the average produce was fixed as state share (tax), paid in cash or kind.
                        </li>
                        <li>
                            Systemized record-keeping, reduced corruption, and increased state income; improved peasant rights and brought stability.
                        </li>
                        <li>
                            Other systems: Dahsala (ten-year average), Kankut (by estimation), Nasaq (agreement); Zamindars acted as intermediaries.
                        </li>
                        <li>
                            Akbar abolished several oppressive taxes (like Jizya) to encourage prosperity and religious harmony.
                        </li>
                        </ul>
                    </motion.div>

                    <div className="text-xs text-sky-700 mt-2">
                        <b>SSC Focus:</b> Remember key features, reforms, and differences between Iqta and Mansabdari systems and details of Akbar’s Bandobast for administrative and revenue MCQs.
                    </div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>


            </Accordion.Root>
            {/* Summary Card */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-red-50 rounded-xl border border-indigo-100 shadow-sm">
                <h3 className="font-bold text-2xl text-indigo-800 mb-4">Key Takeaways</h3>
                <div className="text-xl text-gray-600 mb-4">
                <b>Note:</b> Focus on factual information, dates, personalities, and cause-effect relationships as questions are usually direct and factual in nature.
                 The following points are carefully summarized for SSC exam. For more detailed explanations, refer to <span className="font-semibold">Lucent</span> or recommended YouTube channels.
                </div>
            </div>    
        </div>
    );
};