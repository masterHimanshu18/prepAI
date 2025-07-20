// File: src/components/content/ModernHistoryContent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { MountainSnow, Users2, Flame, ScrollText, ChevronDown, Ship, Flag, Feather, Target, Split } from "lucide-react";

export const ModernHistoryContent: React.FC = () => {
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


                <Accordion.Item
                value="european-companies-colonial-expansion"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-violet-50 border-violet-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-violet-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-violet-600 bg-violet-100">
                        <Ship size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            European Companies & Colonial Expansion <span className="text-sm font-normal text-gray-600">(16th–18th Century)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">Portuguese</span>
                            <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">Dutch</span>
                            <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">French</span>
                            <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">British</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("european-companies-colonial-expansion") ? 'rotate-180' : ''}`}
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

                    {/* Portuguese in India */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-violet-700 mb-1">Portuguese Arrival in India (Vasco da Gama, 1498)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Vasco da Gama landed at Calicut (now Kozhikode), Kerala in <b>1498</b>, opening the first direct sea route from Europe to India.</li>
                        <li>The Portuguese established their first factory at Calicut and soon captured Goa (1510), which became their main base in India.</li>
                        <li>They monopolized the spice and maritime trade in the Indian Ocean, being the first Europeans to create trading posts along the coasts (Goa, Daman & Diu, Bassein).</li>
                        <li>Introduced tobacco, new crops, Roman Catholic Christianity, and elements of European architecture in western India.</li>
                        </ul>
                    </motion.div>

                    {/* Dutch East India Company */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-violet-700 mb-1">Dutch East India Company (VOC)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>The Dutch East India Company (VOC) was formed in <b>1602</b> and began operations in India in <b>1605</b>, first at Masulipatnam (Andhra).</li>
                        <li>They established trading posts at Pulicat, Surat, Karaikal, Chinsurah, and Nagapattinam.</li>
                        <li>Primarily traded spices, textiles, and indigo; eventually limited their focus to Indonesian islands after defeat by the British at the Battle of Baleshwar (1759).</li>
                        <li>The Dutch left a legacy in South Indian trade and cultural exchange.</li>
                        </ul>
                    </motion.div>

                    {/* French East India Company */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-violet-700 mb-1">French East India Company</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>The French East India Company was formed in <b>1664</b> under Colbert and began activities in India by 1668; main settlements at Pondicherry (capital), Chandernagore, Mahe, Karaikal, and Yanam.</li>
                        <li>Key governors: <b>François Martin, Dumas, and Dupleix</b> (expanded French power during the Anglo-French Carnatic Wars).</li>
                        <li>Rivalry with the British led to a series of wars (esp. Third Carnatic War, 1756–63); after defeat, the French presence was confined to small enclaves.</li>
                        <li>Contributed to Indo-French art, cuisine, and urban planning, especially in Pondicherry.</li>
                        </ul>
                    </motion.div>

                    {/* British East India Company */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-violet-700 mb-1">British East India Company: Establishment & Expansion</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>Founded in <b>1600</b> (by Royal Charter from Queen Elizabeth I), the British East India Company received permission from Jahangir to open a factory at Surat in <b>1613</b>.</li>
                        <li>Gradually expanded to Madras, Bombay, and Calcutta using diplomacy, war, and alliances.</li>
                        <li>Became the main European power in India by defeating other rivals (esp. Portuguese, Dutch, and French).</li>
                        <li>Key factors for expansion: strong navy, better finances, clever diplomacy, use of Indian soldiers (sepoys), and superior organization.</li>
                        <li>Its rule grew from trading posts to territorial control after 1757, laying the groundwork for British colonial rule in India.</li>
                        </ul>
                    </motion.div>

                    {/* Battles of Plassey (1757) & Buxar (1764) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12}}
                    >
                        <h3 className="font-semibold text-lg text-violet-700 mb-1">Battle of Plassey (1757) & Battle of Buxar (1764)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Battle of Plassey (23 June 1757):</b> Fought between the British (Robert Clive) and Nawab Siraj-ud-Daulah of Bengal. The British won by allying with Mir Jafar (Nawab’s commander). This victory established British political dominance in Bengal, giving them control over huge revenue resources.
                        </li>
                        <li>
                            <b>Battle of Buxar (22 October 1764):</b> Fought between the British (Hector Munro) and a combined Indian force (Mir Qasim of Bengal, Shuja-ud-Daula of Awadh, Shah Alam II - Mughal Emperor). The British were victorious, gaining the <b>Diwani rights</b> (right to collect revenue) of Bengal, Bihar, and Orissa through the Treaty of Allahabad (1765).
                        </li>
                        <li>
                            Combined, these battles marked the real foundation of British Empire in India and the end of Mughal and regional powers in the Ganga valley.
                        </li>
                        </ul>
                        <div className="text-xs text-violet-700 mt-2">
                        <b>SSC Focus:</b> Learn the order, main leaders, outcomes and consequences of each company and battle—these are top topics for MCQs and one-liners.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="british-conquest-administration"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-teal-50 border-teal-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-teal-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-teal-600 bg-teal-100">
                        <ScrollText size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            British Conquest & Administration <span className="text-sm font-normal text-gray-600">(18th–19th Century)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Reforms</span>
                            <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Revenue</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("british-conquest-administration") ? 'rotate-180' : ''}`}
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

                    {/* Warren Hastings and Administrative Reforms */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-teal-700 mb-1">Warren Hastings and Administrative Reforms (1772–1785)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>First Governor-General of Bengal</b> (from 1773, after Regulating Act) and major reformer of Company administration.<sup>[1][4][7]</sup></li>
                        <li>Ended the “duality” in Bengal by taking <b>Diwani</b> (revenue) and <b>Nizamat</b> (judicial/executive) powers directly under Company control.<sup>[1][4]</sup></li>
                        <li>Introduced a new system of revenue farming, established the Board of Revenue at Calcutta, and improved collection discipline.</li>
                        <li>Reorganized <b>civil and criminal justice</b> with district courts and appointed Indian judges (Munsiffs) under European superintendents.<sup>[2][3]</sup></li>
                        <li>Placed English officers as district collectors; initiated the foundation of an English-style administration in India.<sup>[3]</sup></li>
                        <li>Faced impeachment proceedings later in England but set precedents for Company rule.</li>
                        </ul>
                    </motion.div>

                    {/* Lord Cornwallis and Permanent Settlement */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-teal-700 mb-1">Lord Cornwallis and Permanent Settlement (1786–1793)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Governor-General from 1786; known for the “Cornwallis Code” – a comprehensive set of administrative and judicial regulations.<sup>[1][2][3]</sup>
                        </li>
                        <li>
                            <b>Permanent Settlement (1793):</b> Introduced in Bengal, Bihar, and Orissa.<br/>
                            Made zamindars the landlords and fixed land revenue permanently.<sup>[2][3][5]</sup>
                        </li>
                        <li>
                            Created a class of hereditary landowners but led to widespread peasant hardship when crops failed (revenue had to be paid regardless of harvest).
                        </li>
                        <li>
                            Reformed <b>police system</b>—set up thanas under darogas; improved law and order.<sup>[3]</sup>
                        </li>
                        <li>
                            Established the beginnings of the <b>Indian Civil Service</b> (ICS), which became the steel frame of British rule.<sup>[2][3]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Lord Wellesley and Subsidiary Alliance */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-teal-700 mb-1">Lord Wellesley and Subsidiary Alliance (1798–1805)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Governor-General from 1798 to 1805, architect of large-scale British expansion in India.<sup>[1][2][3]</sup>
                        </li>
                        <li>
                            <b>Subsidiary Alliance</b> (1798): Indian rulers were required to accept British forces in their territory and pay for their maintenance; could not keep their own armed forces or enter alliances without British consent.<sup>[1][3]</sup>
                        </li>
                        <li>
                            Failure to abide led to annexation; Hyderabad, Awadh, Tanjore, Mysore, and others accepted it.</li>
                        <li>
                            The system increased British political and military dominance and led to indirect expansion of Company rule.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Lord Dalhousie and Doctrine of Lapse */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09 }}
                    >
                        <h3 className="font-semibold text-lg text-teal-700 mb-1">Lord Dalhousie and Doctrine of Lapse (1848–1856)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Governor-General from 1848 to 1856; pushed for rapid expansion and modernization.<sup>[1][2][3]</sup>
                        </li>
                        <li>
                            <b>Doctrine of Lapse:</b> Annexed Indian states where rulers died without a natural male heir (no adoption)<br/>
                            Annexed Satara, Jhansi, Nagpur, and others—caused major resentment.
                        </li>
                        <li>
                            Modernized infrastructure—introduced railways, telegraph, postal system, Public Works Department.
                        </li>
                        <li>
                            Also introduced <b>Woods Despatch</b> (1854) for education reforms (modern, English-based system).</li>
                        </ul>
                    </motion.div>

                    {/* British Administrative Policies and Revenue Systems */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                    >
                        <h3 className="font-semibold text-lg text-teal-700 mb-1">British Administrative Policies and Revenue Systems</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Administration based on <b>three pillars</b>: Civil Services (ICS), Army, and Police.<sup>[2][3][6]</sup>
                        </li>
                        <li>
                            Centralized authority—<b>Governor-General</b> at the top, provinces & districts under British officers.</li>
                        <li>
                            <b>Major revenue systems:</b>
                            <ul className="ml-4 list-disc text-gray-700">
                            <li><b>Permanent Settlement</b> (Cornwallis, Bengal): revenue fixed with zamindars.</li>
                            <li><b>Ryotwari System</b> (Munro, Madras/ Bombay): peasants (ryots) paid revenue directly to government.</li>
                            <li><b>Mahalwari System</b> (North-Western Provinces): revenue settled with village communities.</li>
                            </ul>
                        </li>
                        <li>
                            Laws and courts codified, uniform police system, postal and transport services created to consolidate control.
                        </li>
                        <li>
                            Revenue exploitation led to rural distress, frequent famines, and agrarian discontent.
                        </li>
                        </ul>
                        <div className="text-xs text-teal-700 mt-2">
                        <b>SSC Focus:</b> Remember who introduced which reform, the main features (especially of Permanent Settlement, Subsidiary Alliance, Doctrine of Lapse), and how each contributed to British dominance in governance and land.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="resistance-movements"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-orange-50 border-orange-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-orange-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-orange-600 bg-orange-100">
                        <Flag size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Resistance Movements <span className="text-sm font-normal text-gray-600">(18th–19th Century)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Marathas</span>
                            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Mysore</span>
                            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Sikhs & Tribals</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("resistance-movements") ? 'rotate-180' : ''}`}
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

                    {/* Maratha Administration & Peshwas */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-orange-700 mb-1">Maratha Administration & Role of Peshwas</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Maratha Empire was strengthened under <b>Peshwas</b> (Prime Ministers), especially after Shivaji’s death.<br />
                            Key Peshwas: Baji Rao I, Balaji Vishwanath, Balaji Baji Rao (Nana Saheb), and Madhav Rao I.
                        </li>
                        <li>
                            Central administration: <b>Chhatrapati</b> (king), assisted by the Peshwa and Ashtapradhan council; Peshwa became de facto leader.
                        </li>
                        <li>
                            Revenue collection: <b>Chauth</b> (one-fourth of revenue) and <b>Sardeshmukhi</b> (an additional 10%) from territories outside Maratha homeland.
                        </li>
                        <li>
                            Emphasized decentralized rule, efficient cavalry-based army, diplomacy, and confederation of powerful Maratha families (Bhonsle, Holkar, Scindia, Gaekwad).
                        </li>
                        <li>
                            Under Peshwas, Marathas expanded across central and north India until defeat in Third Battle of Panipat (1761).<br />
                            Internal conflicts and British strategies led to eventual decline by early 19th century.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Tipu Sultan & Mysore Wars */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-orange-700 mb-1">Tipu Sultan & Anglo-Mysore Wars</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Tipu Sultan ("Tiger of Mysore") and his father Hyder Ali led <b>four Anglo-Mysore Wars</b> (1767–1799) against the British, making Mysore the strongest resistance to British expansion.<sup>[1][2][3][4][5][6][7][8][9]</sup>
                        </li>
                        <li>
                            <b>1st War</b> (1767–1769): Hyder Ali and Tipu resisted the British effectively; ended in Treaty of Madras.
                        </li>
                        <li>
                            <b>2nd War</b> (1780–1784): Tipu emerged as main leader after Hyder’s death; strong resistance, ended in Treaty of Mangalore restoring conquered territories.<br />
                            Tipu’s campaigns were marked by skillful use of alliances (French, Marathas, Nizam).
                        </li>
                        <li>
                            <b>3rd War</b> (1790–1792): Initiated by Tipu’s attack on Travancore (a British ally); combined British, Maratha, and Nizam force defeated Tipu; Treaty of Seringapatam—Tipu ceded half his territory, gave two sons as hostages, paid heavy indemnity.<sup>[1][3][4][5]</sup>
                        </li>
                        <li>
                            <b>4th War</b> (1799): British (Lord Wellesley) stormed Seringapatam; Tipu killed, Mysore partitioned and British dominance in South India secured.<br />
                            Tipu was known for military modernization (rockets), strong opposition to British, and seeking French support.<sup>[2][4][5][8]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Anglo-Sikh Wars */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-orange-700 mb-1">Anglo-Sikh Wars</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Fought between the British East India Company and the Sikh Empire after Ranjit Singh’s death.<br />
                            <b>First Anglo-Sikh War</b> (1845–1846): British victory; led to Treaty of Lahore, partial annexation of Punjab.
                        </li>
                        <li>
                            <b>Second Anglo-Sikh War</b> (1848–1849): Resulted in complete annexation of Punjab by the British.<br />
                            Last major independent Indian kingdom brought under British rule.
                        </li>
                        <li>
                            Sikh army (Khalsa) was well-organized and used modern artillery, but internal treachery and weak leadership after Ranjit Singh contributed to defeat.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Tribal Uprisings (Santhal & Munda) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-orange-700 mb-1">Tribal Uprisings: Santhal Rebellion & Munda Uprising</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Santhal Rebellion</b> (1855–56): Major tribal revolt in present-day Jharkhand/Bihar. Leaders <b>Sido and Kanhu</b> led Santhal tribes against oppressive zamindars, moneylenders, and British administration. Revolt was brutally suppressed, but British eventually created Santhal Parganas district.
                        </li>
                        <li>
                            <b>Munda Uprising</b> (1899–1900): Led by <b>Birsa Munda</b> in Chotanagpur; fought against British land policies, feudal exploitation, and Christian missionaries. Birsa aimed for restoration of tribal rights and dreamed of a “Munda Raj”. The rebellion was suppressed after Birsa’s arrest and death in jail (1900).
                        </li>
                        <li>
                            Significance: Tribal uprisings exposed exploitation under colonial rule, inspired future movements, and pressed for administrative reforms.
                        </li>
                        </ul>
                    </motion.div>

                    <div className="text-xs text-orange-700 mt-2">
                        <b>SSC Focus:</b> Memorize key wars, leaders, treaties, and outcomes for resistance topics—<br />
                        Maratha Peshwas, Tipu Sultan's Anglo-Mysore Wars, Sikh leaders and wars, Santhal/Munda leaders are frequent MCQ topics.
                    </div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="revolt-of-1857"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-red-50 border-red-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-red-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-red-600 bg-red-100">
                        <Flame size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Revolt of 1857 <span className="text-sm font-normal text-gray-600">(First War of Independence)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Causes</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Course</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Leaders</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Consequences</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("revolt-of-1857") ? 'rotate-180' : ''}`}
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

                    {/* Causes of the Revolt */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-red-700 mb-1">Causes of the Revolt</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Political:</b> Doctrine of Lapse (states annexed if ruler died without heir, e.g. Jhansi, Satara), annexation of Awadh, dispossession and humiliation of Indian rulers, exclusion from high positions.<sup>[1][2][4][5]</sup>
                        </li>
                        <li>
                            <b>Economic:</b> Heavy land taxes (Permanent Settlement, Mahalwari, Ryotwari), ruin of traditional industries, forced cash crops (indigo, opium), poverty and landlessness among peasants, "drain of wealth" to Britain.<sup>[1][2][6][7]</sup>
                        </li>
                        <li>
                            <b>Social & Religious:</b> Racial discrimination, religious reforms threatening traditions (abolition of Sati, widow remarriage), aggressive missionary activities, loss of social status for priests and elites.<sup>[1][6]</sup>
                        </li>
                        <li>
                            <b>Administrative:</b> Centralized British rule and disruption of traditional power structures, cultural insensitivity, and unfair laws alienated all sections of Indian society.<sup>[1][2][6]</sup>
                        </li>
                        <li>
                            <b>Military:</b> Indian sepoys suffered poor pay, discrimination, lack of promotions, and harsh discipline.<sup>[1][2]</sup>
                        </li>
                        <li>
                            <b>Immediate Cause:</b> Introduction of the new <b>Enfield rifle</b> (cartridges greased with cow/pig fat) deeply offended Hindu and Muslim soldiers, triggering open revolt at Meerut on 10 May 1857.<sup>[1][6]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Course of the Revolt */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-red-700 mb-1">Course & Centers of the Revolt</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Started in <b>Meerut</b> (10 May 1857) with sepoy mutiny; quickly spread to Delhi, Lucknow, Kanpur, Jhansi, Gwalior, Bareilly, and other regions.<sup>[1][2][4][6]</sup>
                        </li>
                        <li>
                            <b>Barrackpore/Meerut:</b> Mangal Pandey fired the first shot at Barrackpore in March 1857; Mass revolt began in Meerut.<sup>[5]</sup>
                        </li>
                        <li>
                            <b>Delhi:</b> Rebels seized Delhi, declared <b>Bahadur Shah II</b> (last Mughal emperor) as symbolic leader.<sup>[2][4]</sup>
                        </li>
                        <li>
                            <b>Kanpur:</b> Led by <b>Nana Sahib</b> and Tatya Tope.<sup>[2]</sup>
                        </li>
                        <li>
                            <b>Lucknow:</b> Centered around <b>Begum Hazrat Mahal</b>.<sup>[2]</sup>
                        </li>
                        <li>
                            <b>Jhansi & Gwalior:</b> <b>Rani Laxmibai</b>, Tatya Tope offered fierce resistance.<sup>[2][4]</sup>
                        </li>
                        <li>
                            <b>Suppression:</b> British responded with overwhelming force (reinforcements from Punjab, loyal Indian princes), recaptured Delhi (September 1857), Kanpur, Lucknow, and other centers by 1858. Reprisals were harsh and brutal.<sup>[2][4][5]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Key Leaders */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-red-700 mb-1">Key Leaders of the Revolt</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>Mangal Pandey:</b> Sparked the revolt at Barrackpore near Calcutta.<sup>[1][2]</sup></li>
                        <li><b>Bahadur Shah II (Zafar):</b> Symbolic leader at Delhi, last Mughal emperor.<sup>[2][4]</sup></li>
                        <li><b>Nana Sahib:</b> Led the revolt in Kanpur, supported by <b>Tatya Tope</b> (military strategist).</li>
                        <li><b>Rani Laxmibai:</b> Queen of Jhansi; famous for valor at Jhansi and Gwalior.<sup>[2]</sup></li>
                        <li><b>Begum Hazrat Mahal:</b> Led resistance in Lucknow.<sup>[2]</sup></li>
                        <li><b>Other leaders:</b> Kunwar Singh (Bihar), Azimullah Khan (Kanpur), Khan Bahadur Khan (Bareilly).</li>
                        </ul>
                    </motion.div>

                    {/* Consequences of the Revolt */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-red-700 mb-1">Consequences & Legacy</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li><b>End of Company Rule:</b> Governance of India passed from East India Company to the British Crown by the Government of India Act 1858.<sup>[1][2][4][8]</sup></li>
                        <li><b>Policy Changes:</b> British stopped annexations (Doctrine of Lapse ended), allowed princely states to adopt heirs, and began “divide and rule” tactics.</li>
                        <li><b>Army Reorganization:</b> Higher proportion of British to Indian soldiers, regiments split on caste/regional lines to prevent unity. Europeans in key positions.<sup>[1][8]</sup></li>
                        <li><b>Social Policy:</b> British policies became more cautious about Indian customs and religious sensitivities.</li>
                        <li><b>Rise of Nationalism:</b> Inspired the growth of Indian nationalism and laid groundwork for later independence struggles.<sup>[2]</sup></li>
                        <li><b>Communal Impact:</b> British began favoring certain groups and sowing communal divisions as part of their control strategy.<sup>[1][8]</sup></li>
                        </ul>
                    </motion.div>

                    <div className="text-xs text-red-700 mt-2">
                        <b>SSC Focus:</b> Know all causes, key centers and leaders, immediate triggers, and major consequences—especially governance transfer, policy shifts, and why the revolt failed. Questions regularly test sequence of events, leaders, and reforms after 1858.
                    </div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="social-religious-reform-movements"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-pink-50 border-pink-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-pink-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-pink-600 bg-pink-100">
                        <Users2 size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Social & Religious Reform Movements <span className="text-sm font-normal text-gray-600">(19th Century)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Reformers</span>
                            <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Women’s Rights</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("social-religious-reform-movements") ? 'rotate-180' : ''}`}
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

                    {/* Overview and Context */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-pink-700 mb-1">Overview & Context</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            The 19<sup>th</sup> century saw widespread <b>socio-religious reform movements</b> across India.<sup>[1][2][3][4][5][6]</sup>
                        </li>
                        <li>
                            These aimed to remove <b>social evils</b> (sati, child marriage, polygamy, caste discrimination, untouchability) and promote <b>women’s rights, education, rational thinking, and religious tolerance</b>.<sup>[2][3][4]</sup>
                        </li>
                        <li>
                            British rule, Western education, press freedom, and new social classes (like an educated intelligentsia and capitalist class) fostered this reformist spirit.<sup>[1][3]</sup>
                        </li>
                        <li>
                            Two broad approaches: <b>Reformist</b> (adopted modern values, e.g. Brahmo Samaj, Aligarh) and <b>Revivalist</b> (stressed return to ancient glories, e.g. Arya Samaj).<sup>[4][5]</sup>
                        </li>
                        </ul>
                    </motion.div>
                    
                    {/* Raja Ram Mohan Roy & Brahmo Samaj */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-pink-700 mb-1">Raja Ram Mohan Roy & Brahmo Samaj</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Raja Ram Mohan Roy</b> (1772–1833), known as the “Father of Modern India,” founded the <b>Brahmo Samaj</b> in 1828 at Calcutta.<sup>[2][4][5]</sup>
                        </li>
                        <li>
                            Stood against <b>sati</b>, polygamy, child marriage, and caste oppression; demanded <b>widow remarriage, women’s education, and religious tolerance</b>.<sup>[2][4]</sup>
                        </li>
                        <li>
                            Fought for <b>Sati Abolition Act (1829)</b> with Governor-General Lord William Bentinck.<sup>[2][4]</sup>
                        </li>
                        <li>
                            Opposed idol worship, superstition, and religious orthodoxy; promoted monotheism, rationality, and humanism using reason.<sup>[5]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Dayananda Saraswati & Arya Samaj */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-pink-700 mb-1">Dayananda Saraswati & Arya Samaj</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Dayananda Saraswati</b> founded <b>Arya Samaj</b> at Bombay in 1875.<sup>[5][6]</sup>
                        </li>
                        <li>
                            Advocated return to the <b>Vedas</b>; rejected idol worship, untouchability, caste discrimination; opposed superstitions.<sup>[5][6]</sup>
                        </li>
                        <li>
                            Promoted women’s education, widow remarriage, and inter-caste marriage; supported “<b>Shuddhi movement</b>” (re-conversion to Hinduism).<sup>[5][6]</sup>
                        </li>
                        <li>
                            Arya Samaj spread rapidly in North and West India, strengthening social reform and Hindu revival.<sup>[6]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Swami Vivekananda & Ramakrishna Mission */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-pink-700 mb-1">Swami Vivekananda & Ramakrishna Mission</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Swami Vivekananda</b> (Narendranath Datta) was a prominent disciple of <b>Ramakrishna Paramhansa</b>.<sup>[2][4][6]</sup>
                        </li>
                        <li>
                            Founded the <b>Ramakrishna Mission</b> in 1897 to promote <b>social service, education, health, spiritual upliftment</b>, and spread core Hindu values globally.<sup>[2][4][6]</sup>
                        </li>
                        <li>
                            Famous for his speech at the <b>World Parliament of Religions in Chicago (1893)</b>: promoted Vedanta, tolerance, and Indian pride.<sup>[2][4]</sup>
                        </li>
                        <li>
                            Opposed casteism, bigotry, and advocated service to the poor as “service to God.”<sup>[4][6]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Sir Syed Ahmed Khan & Aligarh Movement */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12}}
                    >
                        <h3 className="font-semibold text-lg text-pink-700 mb-1">Sir Syed Ahmed Khan & Aligarh Movement</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Sir Syed Ahmed Khan</b> (1817–1898) led the <b>Aligarh Movement</b>, aiming at Muslim social and educational upliftment.<sup>[2][4][5]</sup>
                        </li>
                        <li>
                            Founded <b>Muhammadan Anglo-Oriental College</b> in 1875 at Aligarh (later Aligarh Muslim University, 1920).<sup>[2][4][5]</sup>
                        </li>
                        <li>
                            Advocated modern education, rationalism, and social reform among Muslims; opposed Purdah and polygamy.<sup>[2][4][5]</sup>
                        </li>
                        <li>
                            Supported loyalism to the British as a route to progress, creating debate in the broader Muslim reform community.<sup>[2][4]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Social Reforms: Sati Abolition, Widow Remarriage */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15}}
                    >
                        <h3 className="font-semibold text-lg text-pink-700 mb-1">Social Reforms: Sati Abolition & Widow Remarriage</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Sati was abolished in 1829</b> after campaigns by Raja Ram Mohan Roy and intervention by Lord Bentinck.<sup>[2][4]</sup>
                        </li>
                        <li>
                            <b>Hindu Widow Remarriage Act (1856)</b> championed by <b>Ishwar Chandra Vidyasagar</b> legalized widow remarriage in India.<sup>[2][4]</sup>
                        </li>
                        <li>
                            Other reforms included: ban on female infanticide, promotion of girls’ education, movement for women’s property rights, and gradual improvement of the social status of women.<sup>[2][4]</sup>
                        </li>
                        </ul>
                        <div className="text-xs text-pink-700 mt-2">
                        <b>SSC Focus:</b> Know the founders, aims, and achievements of major reform movements; who fought for which reform (sati, widow remarriage, education); differences between reformist and revivalist movements.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="freedom-struggle"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-green-50 border-green-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-green-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-green-600 bg-green-100">
                        <MountainSnow size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Freedom Struggle <span className="text-sm font-normal text-gray-600">(1885–1947)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Congress</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Movements</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("freedom-struggle") ? 'rotate-180' : ''}`}
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

                    {/* Indian National Congress formation (1885) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-green-700 mb-1">Formation of Indian National Congress (1885)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>INC was founded on 28 December 1885</b> at <b>Gokuldas Tejpal Sanskrit College, Bombay</b>, attended by 72 delegates.<sup>[1][2][4][5][6][7][8][9][10]</sup>
                        </li>
                        <li>
                            Key architects: <b>A.O. Hume</b> (retired British civil servant, General Secretary), <b>W.C. Bonnerjee</b> (first President).<sup>[1][2][3][4][5][7][9][10]</sup>
                        </li>
                        <li>
                            Aimed to unite Indians, promote political awareness, address grievances, and lay the foundation for the independence movement.<sup>[1][2][3][5]</sup>
                        </li>
                        <li>
                            Initial aim was moderate reform, not immediate independence; membership mainly from lawyers, journalists, teachers, and urban English-educated elite.<sup>[3][5]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Moderate and Extremist Phases */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-green-700 mb-1">Moderate & Extremist Phases</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Moderate Phase (1885–1905):</b> Leaders like Dadabhai Naoroji, Gopal Krishna Gokhale, Pherozeshah Mehta.<br/>
                            Tactics: petitions, prayers, meetings, resolutions, and faith in British sense of justice (“Petition, Prayer, Protest”).
                        </li>
                        <li>
                            Moderates demanded: expansion of legislative councils, Indianization of administration, reduction in military expenditure, and protection of Indian industries.
                        </li>
                        <li>
                            <b>Extremist Phase (1905–1917):</b> Leaders: Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal.<br/>
                            Methods: direct action, mass mobilization, boycotts, swadeshi (self-reliance), and open criticism of British rule.
                        </li>
                        <li>
                            <b>1907 Surat Split:</b> Congress split into Moderates (Gokhale) and Extremists (Tilak), weakening the movement temporarily.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Swadeshi Movement and Partition of Bengal (1905) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-green-700 mb-1">Swadeshi Movement & Partition of Bengal (1905)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Partition of Bengal (1905):</b> Lord Curzon divided Bengal on communal lines, provoking widespread anger.<br/>
                            <b>Main Aim:</b> Undermine growing Bengali nationalism by splitting Hindus and Muslims.<sup>[5]</sup>
                        </li>
                        <li>
                            <b>Swadeshi Movement:</b> Boycott of British goods, promotion of Indian-made products, mass protests, and use of national education and unity as a tool.<br/>
                            Spread rapidly in Bengal, Maharashtra, Punjab, and Madras.
                        </li>
                        <li>
                            "Vande Mataram" became the rallying cry; movement laid foundations for later mass movements under Gandhi.
                        </li>
                        <li>
                            Partition of Bengal was annulled in 1911 due to sustained agitation.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Lucknow Pact (1916) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-green-700 mb-1">Lucknow Pact (1916)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Historic agreement between <b>INC and All-India Muslim League</b> at Lucknow session.<br/>
                            United Hindus and Muslims in their political demands against the British, marking rare cooperation.
                        </li>
                        <li>
                            Congress reunited (Moderates and Extremists) and jointly called for greater self-government.
                        </li>
                        <li>
                            Marked the beginning of communal representation in Indian politics.</li>
                        </ul>
                    </motion.div>

                    {/* Gandhi's Arrival and Satyagraha Movements */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12}}
                    >
                        <h3 className="font-semibold text-lg text-green-700 mb-1">Gandhi’s Arrival & Satyagraha Movements</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Mahatma Gandhi</b> returned to India from South Africa in 1915; transformed the freedom movement with non-violent mass mobilization.
                        </li>
                        <li>
                            <b>Early Satyagraha Movements:</b><br/>
                            - Champaran (1917, against indigo planters in Bihar)<br/>
                            - Kheda (1918, peasant struggle in Gujarat)<br/>
                            - Ahmedabad Mill Strike (1918, textile workers)
                        </li>
                        <li>
                            <b>Mass National Movements:</b><br/>
                            - Non-Cooperation Movement (1920–22): Boycott of foreign goods, schools, law courts; non-violent resistance<br/>
                            - Civil Disobedience Movement (1930–34): Salt March (Dandi), breaking colonial salt laws, mass defiance<br/>
                            - Quit India Movement (1942): “Do or Die” call for immediate British withdrawal
                        </li>
                        <li>
                            Gandhi’s leadership emphasized <b>truth (Satya), non-violence (Ahimsa)</b>, inclusive mass involvement, and constructive social reform.
                        </li>
                        </ul>
                        <div className="text-xs text-green-700 mt-2">
                        <b>SSC Focus:</b> Remember key dates, leaders, agreements, and sequence of movements. Know the distinction between Moderate and Extremist strategies, the significance of Swadeshi, Lucknow Pact, and major Gandhian satyagrahas.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="gandhian-era"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-emerald-50 border-emerald-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-emerald-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-emerald-600 bg-emerald-100">
                        <Feather size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Gandhian Era <span className="text-sm font-normal text-gray-600">(1917–1942)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Satyagraha</span>
                            <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">Mass Movements</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("gandhian-era") ? 'rotate-180' : ''}`}
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

                    {/* Champaran and Kheda Satyagraha */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <h3 className="font-semibold text-lg text-emerald-700 mb-1">Champaran and Kheda Satyagraha</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Champaran Satyagraha (1917):</b> First Satyagraha by Gandhi in India, launched to address exploitation of indigo farmers in Bihar.<sup>[1][2][3][4][5]</sup>
                        </li>
                        <li>
                            Farmers were forced to grow indigo under the <b>‘tinkathia’ system</b> and face extortion by European planters.<sup>[1][2][3][4]</sup>
                        </li>
                        <li>
                            Gandhi, invited by Raj Kumar Shukla, investigated their plight, defied British orders to leave, and inspired mass nonviolent protests.<sup>[1][4][5][6][7]</sup>
                        </li>
                        <li>
                            Result: Government set up an inquiry, leading to the <b>Champaran Agrarian Act (1918)</b>, abolishing the exploitative system and compensating farmers.<sup>[1][2][5]</sup>
                        </li>
                        <li>
                            <b>Kheda Satyagraha (1918):</b> Launched when Gujarat farmers, affected by crop failure and famine, were denied tax relief. Gandhi, Sardar Patel, and others led the movement, refusing to pay taxes.<br/>
                            Result: British authorities suspended tax collection and returned confiscated land.
                        </li>
                        </ul>
                    </motion.div>
                    
                    {/* Non-Cooperation Movement (1920–22) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03}}
                    >
                        <h3 className="font-semibold text-lg text-emerald-700 mb-1">Non-Cooperation Movement (1920–22)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Sparked by the <b>Jallianwala Bagh massacre (1919)</b> and discontent over Rowlatt Act and Khilafat issue.<br/>
                            Led by Gandhi, the Congress adopted the policy of non-cooperation against British rule.
                        </li>
                        <li>
                            Indians were urged to boycott British goods, law courts, schools, titles, and offices; embrace swadeshi and promote national education.
                        </li>
                        <li>
                            Movement attracted all classes: peasants, workers, students, and women.<br/>
                            Was called off by Gandhi after the violent <b>Chauri Chaura incident (1922)</b>, where police were killed in retaliation for police firing on protesters.
                        </li>
                        </ul>
                    </motion.div>
                    
                    {/* Civil Disobedience Movement (1930) and Salt March/Dandi March */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06}}
                    >
                        <h3 className="font-semibold text-lg text-emerald-700 mb-1">Civil Disobedience Movement (1930) & Salt March</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Launched in response to the unjust <b>Salt Tax</b> and to demand <b>Purna Swaraj (complete independence)</b>.
                        </li>
                        <li>
                            <b>Salt March (Dandi March):</b> Gandhi marched 240 miles from Sabarmati Ashram to Dandi (March–April 1930) and made salt, breaking colonial law.<br/>
                            Triggered mass countrywide civil disobedience: refusal to pay taxes, boycott of British goods, and defiance of oppressive laws.
                        </li>
                        <li>
                            Movement saw mass arrests (including Gandhi), participation of women, peasants, and students.<br/>
                            Led to Gandhi-Irwin Pact (1931) and round table conferences in London, but key demands were not met.
                        </li>
                        </ul>
                    </motion.div>
                    
                    {/* Quit India Movement (1942) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09}}
                    >
                        <h3 className="font-semibold text-lg text-emerald-700 mb-1">Quit India Movement (1942)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Launched by <b>Gandhi and the Congress in August 1942</b>, during World War II, in response to British refusal to grant independence.
                        </li>
                        <li>
                            Gandhi’s call – <b>“Do or Die”</b> – prompted widespread, leaderless revolt across the country, with strikes, processions, sabotage of communications, and symbolic establishment of parallel governments.
                        </li>
                        <li>
                            British responded by arresting almost all Congress leaders; movement faced brutal suppression but showcased immense mass resolve for independence.
                        </li>
                        <li>
                            Set the stage for final negotiations, directly leading to India’s independence in 1947.
                        </li>
                        </ul>
                        <div className="text-xs text-emerald-700 mt-2">
                        <b>SSC Focus:</b> Learn sequence and years of movements, leaders involved, reasons for withdrawal/stopping, and significance of Satyagraha, Salt March, and Quit India for most repeated MCQs.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="revolutionary-activities"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-yellow-50 border-yellow-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-yellow-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-yellow-600 bg-yellow-100">
                        <Target size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Revolutionary Activities <span className="text-sm font-normal text-gray-600">(1920s–1930s)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">HRA</span>
                            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Kakori</span>
                            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Singh & Azad</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("revolutionary-activities") ? 'rotate-180' : ''}`}
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

                    {/* Hindustan Republican Association (HRA) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-yellow-700 mb-1">Hindustan Republican Association (HRA)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Founded in 1924, HRA was a revolutionary organization supporting the use of armed struggle to end British rule in India.<sup>[3][4][5][6]</sup>
                        </li>
                        <li>
                            Founders/leaders included Ram Prasad Bismil, Ashfaqullah Khan, Sachindra Nath Sanyal, Jogesh Chandra Chatterjee, Chandrashekhar Azad, and others.<sup>[3][4][5][6]</sup>
                        </li>
                        <li>
                            HRA believed in direct action and aimed to inspire a mass uprising through daring assaults on British authority.<sup>[3]</sup>
                        </li>
                        <li>
                            After 1928, under Azad and with Bhagat Singh’s influence, it evolved into the Hindustan Socialist Republican Association (HSRA) with socialist goals.<sup>[5]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Kakori Train Robbery (1925) */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-yellow-700 mb-1">Kakori Train Robbery (1925)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Planned by HRA leaders including Ram Prasad Bismil and Ashfaqullah Khan to fund revolutionary activities and purchase arms.<sup>[1][3][4][5][6][7][8][9][10]</sup>
                        </li>
                        <li>
                            On <b>9 August 1925</b>, ten revolutionaries stopped the Number 8 Down train near Kakori (close to Lucknow), overpowering the guard and seizing government cash (~₹8,000) intended for deposit in Lucknow.<sup>[1][2][3][4][5][6][7]</sup>
                        </li>
                        <li>
                            Key conspirators: Ram Prasad Bismil, Ashfaqullah Khan, Chandrashekhar Azad, Rajendra Lahiri, Sachindra Bakshi, Keshab Chakravarty, Manmathnath Gupta, Mukundi Lal, and others.<sup>[1][6]</sup>
                        </li>
                        <li>
                            One passenger was killed in the crossfire, leading to a manslaughter case.<sup>[1][6]</sup>
                        </li>
                        <li>
                            After a massive manhunt, most leaders were arrested and tried. Four (Bismil, Ashfaqullah Khan, Rajendra Lahiri, Roshan Singh) were sentenced to death; others received life sentences.<sup>[3][4][5][6]</sup>
                        </li>
                        <li>
                            The case and executions became rallying points for new revolutionaries and led to HRA's reorganization under Chandrashekhar Azad.<sup>[3][5]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Bhagat Singh, Chandrashekhar Azad, Ashfaqullah Khan */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-yellow-700 mb-1">Key Revolutionaries: Bhagat Singh, Chandrashekhar Azad, Ashfaqullah Khan</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            <b>Bhagat Singh:</b> Joined restructured HSRA post-Kakori; known for Assembly Bombing (with Batukeshwar Dutt, 1929), and the assassination of Saunders (in revenge for Lala Lajpat Rai's death). Became an icon for youth, espousing social justice, secularism, and fearless resistance.<sup>[5]</sup>
                        </li>
                        <li>
                            <b>Chandrashekhar Azad:</b> Escaped capture in the Kakori aftermath; led HSRA until death in a police shootout in Allahabad’s Alfred Park (1931), choosing to die free rather than be caught.<sup>[1][6]</sup>
                        </li>
                        <li>
                            <b>Ashfaqullah Khan:</b> Close associate of Bismil; played a leading role in Kakori, caught afterwards, executed in 1927. Remembered for his courage and communal harmony.<sup>[1][3][5][6]</sup>
                        </li>
                        </ul>
                        <div className="text-xs text-yellow-700 mt-2">
                        <b>SSC CGL Focus:</b> Remember key organizations (HRA/HSRA), Kakori date & participants, and why Bhagat Singh, Azad, and Ashfaqullah stand as symbols of revolutionary courage and anti-colonial unity.
                        </div>
                    </motion.div>
                    </motion.div>
                </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item
                value="partition-independence"
                className="rounded-xl border overflow-hidden transition-all duration-300 bg-cyan-50 border-cyan-200"
                >
                <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-cyan-100/50 transition-colors">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg text-cyan-600 bg-cyan-100">
                        <Split size={24} />
                        </div>
                        <div>
                        <span className="font-bold text-xl text-gray-800">
                            Partition & Independence <span className="text-sm font-normal text-gray-600">(1946–1947)</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Cabinet Mission</span>
                            <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Mountbatten</span>
                            <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Independence Act</span>
                            <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Partition</span>
                        </div>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeAccordion.includes("partition-independence") ? 'rotate-180' : ''}`}
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

                    {/* Cabinet Mission Plan */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg text-cyan-700 mb-1">Cabinet Mission Plan (1946)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Sent by British PM Clement Attlee, the three-member mission (Pethick-Lawrence, Stafford Cripps, A.V. Alexander) arrived in India in March 1946.<sup>[1][2][3][9]</sup>
                        </li>
                        <li>
                            Aimed for a peaceful transfer of power, proposing a united India, rejecting the Muslim League demand for a separate Pakistan.<sup>[1][2][3][4]</sup>
                        </li>
                        <li>
                            Proposed a <b>federal union</b> with a weak center (handling only defence, foreign affairs, communications), autonomy for provinces, and three groups: A (Hindu-majority provinces), B (Muslim-majority in northwest), C (Muslim-majority in east, e.g. Bengal, Assam).<sup>[1][2][3][4][5]</sup>
                        </li>
                        <li>
                            Recommended a <b>Constituent Assembly</b>, with representation for Hindus, Muslims, and Sikhs, to draft the new constitution.<sup>[1][2][4]</sup>
                        </li>
                        <li>
                            <b>Failure:</b> Congress accepted only the part about Constituent Assembly, the Muslim League withdrew after initial acceptance, leading to growing conflict and the inevitability of partition.<sup>[1][2][3][4]</sup>
                        </li>
                        </ul>
                    </motion.div>

                    {/* Mountbatten Plan */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.03 }}
                    >
                        <h3 className="font-semibold text-lg text-cyan-700 mb-1">Mountbatten Plan (3 June 1947)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Proposed by Lord Louis Mountbatten (last Viceroy of India) to resolve communal violence and political deadlock after Cabinet Mission failure.
                        </li>
                        <li>
                            Announced on 3 June 1947, the plan called for the immediate transfer of power and <b>partition of India</b> into two dominions: India and Pakistan.
                        </li>
                        <li>
                            Allowed provinces to decide through assemblies whether to join India or Pakistan.<br/>
                            Punjab and Bengal were split along religious lines; Sindh and NWFP (now Khyber Pakhtunkhwa) joined Pakistan.
                        </li>
                        <li>
                            Princely states could choose to join either dominion or remain independent (but were later integrated).
                        </li>
                        <li>
                            The plan led to rapid, often chaotic, execution of partition and independence in just over two months.
                        </li>
                        </ul>
                    </motion.div>

                    {/* Indian Independence Act 1947 */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                    >
                        <h3 className="font-semibold text-lg text-cyan-700 mb-1">Indian Independence Act, 1947</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Passed by British Parliament on 18 July 1947, giving legal sanction to the partition and independence plan.
                        </li>
                        <li>
                            India and Pakistan would become <b>two independent dominions</b> from <b>15 August 1947</b>, ending British paramountcy.<br/>
                            Each dominion would have its own Governor-General, Constituent Assembly, and the ability to frame its own constitution.
                        </li>
                        <li>
                            British Government’s control over provinces and princely states ceased; princely states free to join either dominion or remain independent (though later integrations happened).
                        </li>
                        </ul>
                    </motion.div>

                    {/* Partition Consequences */}
                    <motion.div
                        className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.09 }}
                    >
                        <h3 className="font-semibold text-lg text-cyan-700 mb-1">Consequences of Partition (1947)</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                        <li>
                            Massive communal violence and riots: Over a million killed, and around 10–15 million displaced between the new borders of India and Pakistan.
                        </li>
                        <li>
                            Large-scale migration and refugee crisis as Hindus and Sikhs fled Pakistan and Muslims fled India.
                        </li>
                        <li>
                            Division of assets and armed forces, splitting of administration and resources between the two new countries.
                        </li>
                        <li>
                            Bitter legacies: border disputes, Kashmir conflict, trauma for affected families, and long-term enmity.
                        </li>
                        <li>
                            Despite the trauma, both nations became independent, with their Constituent Assemblies framing their own futures.
                        </li>
                        </ul>
                        <div className="text-xs text-cyan-700 mt-2">
                        <b>SSC Focus:</b> Know members and terms of Cabinet and Mountbatten Plans, key points of the Independence Act, main consequences of partition, and chronology of independence moves.
                        </div>
                    </motion.div>
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