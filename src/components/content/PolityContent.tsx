// File: src/components/content/PolityContent.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Home, Archive, CheckCircle, Scale, Castle, ChevronDown, Building, Shield, Target, KeyRound, ArrowUpDown, AlertTriangle } from "lucide-react";

export const PolityContent: React.FC = () => {
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
            value="constitutional-framework"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-blue-50 border-blue-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-blue-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-blue-600 bg-blue-100">
                    <Archive size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Constitutional Framework <span className="text-sm font-normal text-gray-600">(Polity Foundation)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Constituent Assembly</span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Preamble</span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Salient Features</span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Amendments</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("constitutional-framework") ? 'rotate-180' : ''}`}
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

                {/* Making of the Constitution and Constituent Assembly */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Making of the Constitution & Constituent Assembly</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        The Constituent Assembly was formed in December 1946, comprising elected representatives led by Dr. Rajendra Prasad (President), B.R. Ambedkar (Drafting Committee Chairman), Jawaharlal Nehru, Sardar Patel, among others.
                    </li>
                    <li>
                        The Assembly debated and drafted the Constitution over 2 years, 11 months, and 18 days, considering world constitutions and Indian realities.
                    </li>
                    <li>
                        The draft was adopted on <b>26 November 1949</b> and came into effect on <b>26 January 1950</b> (“Republic Day”).
                    </li>
                    <li>
                        The Preamble is based on Jawaharlal Nehru’s Objectives Resolution.
                    </li>
                    </ul>
                </motion.div>

                {/* Preamble – Key Features and Amendments */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03 }}
                >
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Preamble: Key Features & Amendments</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        The Preamble introduces the Constitution, outlining its philosophy and aims: India as a <b>Sovereign, Socialist, Secular, Democratic, Republic</b> securing <b>justice, liberty, equality, fraternity</b> for all citizens.
                    </li>
                    <li>
                        “We, the people of India” signifies popular sovereignty; justice is social, economic, and political; liberty includes thought, expression, belief, faith and worship; equality assures status and opportunity; fraternity ensures individual dignity and national unity.
                    </li>
                    <li>
                        The Preamble was amended only once by the <b>42nd Constitutional Amendment Act, 1976</b>—added 'Socialist', 'Secular', and 'Integrity' to the original text.
                    </li>
                    <li>
                        The Preamble can be amended under <b>Article 368</b> if the “basic structure” is not altered, as established in the Kesavananda Bharati case (1973).
                    </li>
                    <li>
                        The “Liberty, Equality, Fraternity” motif was inspired by the French Revolution.
                    </li>
                    </ul>
                </motion.div>

                {/* Salient Features of the Constitution */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 }}
                >
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Salient Features of the Constitution (Structure & System)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        World’s lengthiest written Constitution: Draws from sources like the UK, US, Ireland, Canada, Australia, USSR, France, Japan.
                    </li>
                    <li>
                        <b>Federal Structure with Unitary Bias:</b> Powers split between Center and States but strong central government (e.g., emergency provisions, single constitution).
                    </li>
                    <li>
                        <b>Parliamentary System:</b> Based on UK model—collective responsibility, Prime Minister as real executive, President as nominal head.
                    </li>
                    <li>
                        <b>Single Citizenship</b>, <b>Universal Adult Franchise</b> (over 18), <b>Fundamental Rights</b> (Articles 12–35), <b>Directive Principles</b> (Articles 36–51), <b>Secular and Socialist Features</b>, <b>Judicial Review</b>, <b>Independent Judiciary</b>, <b>Emergency Provisions</b>.
                    </li>
                    <li>
                        Integrates flexibility (amendments) with rigidity, ensuring balance between stability and evolution.
                    </li>
                    </ul>
                </motion.div>

                {/* Constitutional Amendments Procedure (Article 368) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.09 }}
                >
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Constitutional Amendments Procedure (Article 368)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        Article 368 outlines the process for amending the Constitution.
                    </li>
                    <li>
                       <b>Simple majority</b>: Certain provisions can be amended by a simple majority of Parliament (e.g., creation of new states).
                    </li>
                    <li>
                       <b>Special majority</b>: Most amendments require a two-thirds majority of members present and voting in each House of Parliament.
                    </li>
                    <li>
                       <b>Special majority + state ratification</b>: Amendments affecting federal provisions (e.g., election of President, distribution of powers) also require ratification by at least half the State legislatures.
                    </li>
                    <li>
                        The power to amend is subject to judicial review—the “basic structure” of the Constitution cannot be altered or destroyed.
                    </li>
                    </ul>
                    <div className="text-xs text-blue-700 mt-2">
                    <b>SSC Focus:</b> Know the making process, who led/chaired committees, key Preamble terms and amendment, unique federal/parliamentary features, and the three types of amendments under Article 368.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="fundamental-rights"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-violet-50 border-violet-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-violet-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-violet-600 bg-violet-100">
                    <Shield size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Fundamental Rights <span className="text-sm font-normal text-gray-600">(Articles 12–35)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">Equality</span>
                        <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">Freedom</span>
                        <span className="text-xs px-2 py-1 bg-violet-100 text-violet-800 rounded-full">Remedies</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("fundamental-rights") ? 'rotate-180' : ''}`}
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

                {/* Overview */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Overview: Fundamental Rights (Articles 12–35)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        Enshrined in Part III of the Constitution, <b>Articles 12-35</b> guarantee key civil liberties and protect individual dignity, equality, and freedom. They are<b>justiciable</b> — enforceable by Indian courts.
                    </li>
                    <li>
                        Fundamental Rights are universally available to all citizens (with some exceptions) regardless of race, religion, caste, sex, or place of birth.
                    </li>
                    <li>
                        The Constitution guarantees<b>six Fundamental Rights</b>:<br/>
                        1. Right to Equality (Arts 14–18)<br/>
                        2. Right to Freedom (Arts 19–22)<br/>
                        3. Right against Exploitation (Arts 23–24)<br/>
                        4. Right to Freedom of Religion (Arts 25–28)<br/>
                        5. Cultural & Educational Rights (Arts 29–30)<br/>
                        6. Right to Constitutional Remedies (Art 32)
                    </li>
                    <li>
                        Any law inconsistent with these rights is void. Citizens can directly approach the Supreme Court (Article 32) or High Courts (Article 226) for enforcement.
                    </li>
                    </ul>
                </motion.div>

                {/* Right to Equality (Articles 14-18) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Right to Equality (Articles 14–18)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><b>Article 14:</b> Equality before law and equal protection of laws within India.</li>
                    <li><b>Article 15:</b> No discrimination on grounds of religion, race, caste, sex, or place of birth; enables special provisions for women and children/SC/ST.</li>
                    <li><b>Article 16:</b> Equality of opportunity in matters of public employment.</li>
                    <li><b>Article 17:</b> Abolition of untouchability in all forms; punishable by law.</li>
                    <li><b>Article 18:</b> Abolishes titles except military and academic distinctions.</li>
                    </ul>
                </motion.div>

                {/* Right to Freedom (Articles 19-22) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Right to Freedom (Articles 19–22)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Article 19:</b> Six fundamental freedoms: speech & expression, peaceful assembly, association/union, movement, residence, and profession/occupation (subject to reasonable restrictions for security, order, etc.).
                    </li>
                    <li>
                        <b>Article 20:</b> Protection in respect of conviction for offences: no ex-post facto laws, no double jeopardy, no self-incrimination.
                    </li>
                    <li>
                        <b>Article 21:</b> Protection of life and personal liberty except according to procedure established by law. Expanded by judiciary to include right to privacy, clean environment, legal aid, etc.
                    </li>
                    <li>
                        <b>Article 21A:</b> Right to free and compulsory education for children 6–14 years (added by 86th Amendment, 2002).
                    </li>
                    <li>
                        <b>Article 22:</b> Protections against arbitrary arrest & detention — right to be informed of grounds, consult lawyer, be produced before a magistrate within 24 hours; except for preventive detention and enemy aliens.
                    </li>
                    </ul>
                </motion.div>

                {/* Right against Exploitation (Articles 23–24) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.09 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Right against Exploitation (Articles 23–24)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Article 23:</b> Prohibits traffic in human beings, forced/bonded labor; makes such acts punishable.
                    </li>
                    <li>
                        <b>Article 24:</b> Prohibits employment of children below 14 years in factories, mines, or other hazardous occupations.
                    </li>
                    </ul>
                </motion.div>

                {/* Right to Freedom of Religion (Articles 25–28) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Right to Freedom of Religion (Articles 25–28)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><b>Article 25:</b> Freedom of conscience and the right to freely profess, practice, and propagate religion (subject to public order, morality, health).</li>
                    <li><b>Article 26:</b> Freedom to manage religious affairs and institutions.</li>
                    <li><b>Article 27:</b> No compulsion to pay taxes for promoting any particular religion.</li>
                    <li><b>Article 28:</b> No religious instruction in government-run educational institutions (exceptions apply).</li>
                    </ul>
                </motion.div>

                {/* Cultural & Educational Rights (Articles 29–30) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Cultural & Educational Rights (Articles 29–30)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Article 29:</b> Protection of the interests of minorities — right to conserve language, script, culture.
                    </li>
                    <li>
                        <b>Article 30:</b> Right of minorities to establish and administer educational institutions of their choice.
                    </li>
                    </ul>
                </motion.div>

                {/* Right to Constitutional Remedies (Article 32) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Right to Constitutional Remedies (Article 32)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        Article 32 allows individuals to approach the Supreme Court directly for enforcement of Fundamental Rights.
                    </li>
                    <li>
                        Known as the "heart and soul" of the Constitution (B.R. Ambedkar), includes writs such as habeas corpus, mandamus, prohibition, quo warranto, and certiorari.
                    </li>
                    <li>
                        High Courts can also issue writs (under Article 226).</li>
                    </ul>
                </motion.div>

                {/* Exceptions and Restrictions */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.21 }}
                >
                    <h3 className="font-semibold text-lg text-violet-700 mb-1">Exceptions & Restrictions</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        Fundamental Rights are not absolute. Reasonable restrictions can be imposed in the interest of sovereignty, security, public order, decency, morality, etc.
                    </li>
                    <li>
                        Certain rights (e.g., rights under Article 19) are suspended during a national emergency (except Articles 20 & 21, which remain protected).
                    </li>
                    <li>
                        Restrictions may apply for armed forces, police, laws for SC/ST reservation, or in the case of preventive detention.
                    </li>
                    <li>
                        Article 35 confers Parliament with exclusive powers to make laws regarding the application or suspension of certain rights in specific cases.
                    </li>
                    </ul>
                    <div className="text-xs text-violet-700 mt-2">
                    <b>SSC Focus:</b> Remember the articles, keywords (equality, freedom, exploitation, religion, culture, remedies), types of restrictions, and who can enforce or restrict rights.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="dpsp"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-lime-50 border-lime-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-lime-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-lime-600 bg-lime-100">
                    <Target size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Directive Principles of State Policy <span className="text-sm font-normal text-gray-600">(Articles 36–51)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Socialistic</span>
                        <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Gandhian</span>
                        <span className="text-xs px-2 py-1 bg-lime-100 text-lime-800 rounded-full">Liberal</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("dpsp") ? 'rotate-180' : ''}`}
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

                {/* Overview and Articles */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <h3 className="font-semibold text-lg text-lime-700 mb-1">Overview & Constitutional Basis</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Directive Principles of State Policy (DPSP)</b> are enshrined in <b>Articles 36 to 51</b> (Part IV) of the Indian Constitution.
                    </li>
                    <li>
                        Inspired by Irish and Spanish constitutions, DPSPs aim to create a <b>welfare state</b> ensuring <b>social, economic, and political justice</b> for all.
                    </li>
                    <li>
                        DPSPs resemble the “Instrument of Instructions” in the Government of India Act, 1935.
                    </li>
                    <li>
                        According to <b>Article 37</b>: DPSPs are <b>non-justiciable</b> (not enforceable by courts) but are <b>fundamental in the governance of the country</b>, and it is the duty of the State to apply these principles in making laws.
                    </li>
                    </ul>
                </motion.div>

                {/* Classification */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03}}
                >
                    <h3 className="font-semibold text-lg text-lime-700 mb-1">Classification: Socialistic, Gandhian, and Liberal-Intellectual Principles</h3>
                    <div className="space-y-3 text-gray-700">
                    <table className="min-w-full text-sm border border-lime-200">
                        <thead>
                        <tr>
                            <th className="font-semibold px-3 py-2 bg-lime-100 border border-lime-200 text-lime-800 text-left">Category</th>
                            <th className="font-semibold px-3 py-2 bg-lime-100 border border-lime-200 text-lime-800 text-left">Core Provisions (Examples)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-3 py-2 border border-lime-200">Socialistic Principles</td>
                            <td className="px-3 py-2 border border-lime-200">
                            <ul className="list-disc list-inside">
                                <li>Right to adequate means of livelihood for all (Art. 39a)</li>
                                <li>Equitable distribution of wealth and resources (Art. 39b-c)</li>
                                <li>Equal pay for equal work (Art. 39d)</li>
                                <li>Protection of health and strength of workers, children (Art. 39e-f)</li>
                                <li>Promotion of education and public assistance (Art. 41, 45, 46)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2 border border-lime-200">Gandhian Principles</td>
                            <td className="px-3 py-2 border border-lime-200">
                            <ul className="list-disc list-inside">
                                <li>Organisation of village panchayats (Art. 40)</li>
                                <li>Promotion of cottage industries (Art. 43)</li>
                                <li>Prohibition of intoxicating drinks and drugs (Art. 47)</li>
                                <li>Promotion of educational and economic interests of SC/ST and weaker sections (Art. 46)</li>
                                <li>Promotion of agriculture and animal husbandry (Art. 48)</li>
                            </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2 border border-lime-200">Liberal-Intellectual Principles</td>
                            <td className="px-3 py-2 border border-lime-200">
                            <ul className="list-disc list-inside">
                                <li>Uniform civil code for citizens (Art. 44)</li>
                                <li>Promotion of international peace and security (Art. 51)</li>
                                <li>Separation of judiciary from executive (Art. 50)</li>
                                <li>Protection of environment (Art. 48A, added by 42nd Amendment)</li>
                                <li>Protection of monuments and national heritage (Art. 49)</li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </motion.div>

                {/* Non-justiciable Nature & Relationship with Fundamental Rights */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06}}
                >
                    <h3 className="font-semibold text-lg text-lime-700 mb-1">Non-Justiciable Nature & Relationship with Fundamental Rights</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        DPSPs are <b>non-justiciable</b>—they cannot be enforced by any court, but are <b>fundamental to governance</b> and must guide state policy.
                    </li>
                    <li>
                        Sometimes DPSP and Fundamental Rights may conflict (e.g., land reform or reservation policies).
                    </li>
                    <li>
                        <b>Champakam Dorairajan (1951):</b> Supreme Court held that Fundamental Rights prevail over DPSP if there is a conflict.
                    </li>
                    <li>
                        Parliament, however, enacted constitutional amendments (like 1st, 4th, 17th, 24th, 25th, and especially Article 31C via 25th Amendment) allowing certain DPSPs to have priority over Fundamental Rights (specifically Art. 39(b),(c)).
                    </li>
                    <li>
                        The aim is to harmonize both, ensuring rights are balanced with socio-economic goals.
                    </li>
                    </ul>
                </motion.div>

                {/* Implementation & Importance */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.09}}
                >
                    <h3 className="font-semibold text-lg text-lime-700 mb-1">Implementation and Importance</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        DPSPs have served as the basis for many progressive laws and policies: Five Year Plans, land reforms, Minimum Wages Act, Maternity Benefit Act, Nationalization of banks, environmental protection, SC/ST Atrocities Act, and more.
                    </li>
                    <li>
                        They aim for a state committed to <b>welfare, justice, and equality</b>, influencing both Parliament and judiciary in shaping Indian governance.
                    </li>
                    <li>
                        Although not enforceable in a court, they have been used to judge the reasonableness of laws and inspire government action. Periodic constitutional amendments have expanded their scope.
                    </li>
                    <li>
                        DPSPs bridge the gap between Fundamental Rights (individual liberty) and socio-economic aims—making India a true welfare state.
                    </li>
                    </ul>
                    <div className="text-xs text-lime-700 mt-2">
                    <b>SSC Focus:</b> Remember DPSP’s scope (Arts 36-51), key categories & examples, non-justiciable but fundamental status, major laws inspired, and relationship/conflict resolution with Fundamental Rights.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="fundamental-duties"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-orange-50 border-orange-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-orange-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-orange-600 bg-orange-100">
                    <CheckCircle size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Fundamental Duties <span className="text-sm font-normal text-gray-600">(Article 51A)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Article 51A</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">42nd Amendment</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">Non-Justiciable</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("fundamental-duties") ? 'rotate-180' : ''}`}
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

                {/* Constitutional Basis and Amendments */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <h3 className="font-semibold text-lg text-orange-700 mb-1">Article 51A: Origin & Amendments</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Article 51A</b> is in Part IV-A of the Constitution and lists the <b>Fundamental Duties</b> of Indian citizens.
                    </li>
                    <li>
                       <b>First 10 duties</b> were added by the <b>42nd Constitutional Amendment Act, 1976</b>, on the recommendation of the Swaran Singh Committee.
                    </li>
                    <li>
                        The <b>11th duty</b> was added by the <b>86th Constitutional Amendment Act, 2002</b>: providing educational opportunities to children aged 6–14 years.
                    </li>
                    <li>
                        Inspired by the Constitution of the former USSR, these duties highlight moral obligations and promote patriotism and unity.
                    </li>
                    </ul>
                </motion.div>

                {/* List of 11 Fundamental Duties */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03}}
                >
                    <h3 className="font-semibold text-lg text-orange-700 mb-1">List of 11 Fundamental Duties</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem.</li>
                    <li>To cherish and follow the noble ideals which inspired the national struggle for freedom.</li>
                    <li>To uphold and protect the sovereignty, unity and integrity of India.</li>
                    <li>To defend the country and render national service when called upon to do so.</li>
                    <li>To promote harmony and the spirit of common brotherhood amongst all the people of India, transcending religious, linguistic, regional or sectional diversities; to renounce practices derogatory to the dignity of women.</li>
                    <li>To value and preserve the rich heritage of India’s composite culture.</li>
                    <li>To protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures.</li>
                    <li>To develop the scientific temper, humanism and the spirit of inquiry and reform.</li>
                    <li>To safeguard public property and to abjure violence.</li>
                    <li>To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement.</li>
                    <li>Who is a parent or guardian, to provide opportunities for education to child/ward between age 6–14 years (added by 86th Amendment, 2002).</li>
                    </ol>
                </motion.div>

                {/* Significance and Enforcement */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06}}
                >
                    <h3 className="font-semibold text-lg text-orange-700 mb-1">Significance & Enforcement</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                       <b>Fundamental Duties are non-justiciable</b>: They are moral and ethical obligations, not legally enforceable by courts.
                    </li>
                    <li>
                        Serve as a constant reminder that citizens have obligations towards the state and society, balancing rights with responsibilities.
                    </li>
                    <li>
                        Promote national unity, patriotism, respect for diversity, social harmony, and environmental protection.
                    </li>
                    <li>
                        While not directly enforceable, Parliament can make laws for their implementation, and courts may consider their observance in interpreting laws and rights.
                    </li>
                    <li>
                        Fundamental Duties are related to Directive Principles and Fundamental Rights, encouraging responsible citizenship.
                    </li>
                    </ul>
                    <div className="text-xs text-orange-700 mt-2">
                    <b>SSC Focus:</b> Remember the number, year and amendments related to duties, list (in order), and non-justiciable but guiding significance.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="union-government"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-cyan-50 border-cyan-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-cyan-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-cyan-600 bg-cyan-100">
                    <Building size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Union Government <span className="text-sm font-normal text-gray-600">(President, PM, Parliament)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">President & VP</span>
                        <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">PM & Cabinet</span>
                        <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">Parliament</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("union-government") ? 'rotate-180' : ''}`}
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

                {/* President of India */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <h3 className="font-semibold text-lg text-cyan-700 mb-1">President: Election, Powers & Impeachment</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        The<b>President of India</b> is the constitutional head of state, elected (for a five-year term) by an <b>electoral college</b> (elected MPs of both Houses + elected MLAs of states/UTs with legislatures).
                    </li>
                    <li>
                        Main powers: executive (appoints PM, Council, judges, governors, issues ordinances), legislative (calls/dissolves Parliament, gives assent, nominates members), judicial (pardons, reprieves), military (supreme commander), diplomatic (appoints envoys, treaties).
                    </li>
                    <li>
                        <b>Impeachment:</b> The President can be removed for "violation of the Constitution" (Article 61) by a quasi-judicial process: charges may be initiated in either House, require one-fourth signatures, 14 days’ notice, and must be passed by a two-thirds majority of total membership, then investigated and approved by the other House. No President has ever been impeached.
                    </li>
                    <li>
                        Vacancy: Upon expiry of term, death, resignation, impeachment, or judicial removal. In such cases, the <b>Vice President</b> (or Chief Justice, if both posts are vacant) acts as President until a successor is elected.
                    </li>
                    </ul>
                </motion.div>

                {/* Vice President of India */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.02}}
                >
                    <h3 className="font-semibold text-lg text-cyan-700 mb-1">Vice President: Election & Functions</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Elected</b> by an electoral college comprising only MPs (both Houses). Term is five years. Must be eligible for Rajya Sabha membership.
                    </li>
                    <li>
                        <b>Functions:</b> Ex-officio Chairman of Rajya Sabha; acts as President during presidential vacancy/absence.
                    </li>
                    <li>
                        If both President and Vice President posts are vacant, <b>Chief Justice of India</b> acts as President until new election.
                    </li>
                    </ul>
                </motion.div>

                {/* Prime Minister & Council of Ministers */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.04}}
                >
                    <h3 className="font-semibold text-lg text-cyan-700 mb-1">Prime Minister & Council of Ministers</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Prime Minister</b> is the head of government and real executive authority, appointed by the President; leads the Council of Ministers.
                    </li>
                    <li>
                        The <b>Council of Ministers</b> (CoM) is collectively responsible to the Lok Sabha; includes Cabinet, Ministers of State, and Deputy Ministers.
                    </li>
                    <li>
                        PM allocates portfolios, chairs meetings, coordinates policy, acts as chief advisor to President, and represents government in Parliament.
                    </li>
                    <li>
                        <b>Council of Ministers</b> exists as long as it enjoys Lok Sabha’s majority; it can be dismissed by a vote of no confidence.
                    </li>
                    </ul>
                </motion.div>
                
                {/* Parliament: Lok Sabha & Rajya Sabha */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06}}
                >
                    <h3 className="font-semibold text-lg text-cyan-700 mb-1">Parliament: Lok Sabha & Rajya Sabha</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Lok Sabha (House of the People):</b> Max 552 members (530 from states, 20 from UTs, 2 nominated Anglo-Indians—now discontinued). Members directly elected for 5-year terms; presided over by the Speaker.
                    </li>
                    <li>
                        <b>Rajya Sabha (Council of States):</b> Max 250 members (238 from states/UTs, 12 nominated by President for arts, science, literature, social service). Members elected by state legislative assemblies for 6-year terms; 1/3 retire every two years; presided by Vice President.
                    </li>
                    <li>
                        <b>Powers</b>: Makes laws for Union List/Concurrent List, approves budgets/expenditure, exercises control via question hour, motions, committees, impeachments, constitutional amendments.
                    </li>
                    <li>
                        <b>Procedures:</b> Ordinary bills require passage by both Houses and presidential assent; money bills can only originate in Lok Sabha; Rajya Sabha has limited powers on money bills.
                    </li>
                    </ul>
                </motion.div>

                {/* Important Parliamentary Committees */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.08}}
                >
                    <h3 className="font-semibold text-lg text-cyan-700 mb-1">Important Parliamentary Committees</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Standing Committees:</b> Work on subjects like finance, defence, external affairs, estimates, and public undertakings. Example: Public Accounts Committee (PAC), Estimates Committee, Committee on Public Undertakings.
                    </li>
                    <li>
                        <b>Ad-hoc Committees:</b> Formed for specific purposes, such as investigating an issue or debating a bill.
                    </li>
                    <li>
                        <b>PAC:</b> Examines government expenditures and reports of the CAG.
                    </li>
                    <li>
                        <b>Estimates Committee:</b> Suggests economies and efficiency in government expenditure.
                    </li>
                    <li>
                        <b>Departmentally Related Standing Committees (DRSCs):</b> Scrutinize bills and policies for various ministries.
                    </li>
                    <li>
                        <b>Committee on Privileges, Ethics, Subordinate Legislation, Petitions, etc.</b>
                    </li>
                    </ul>
                    <div className="text-xs text-cyan-700 mt-2">
                    <b>SSC Focus:</b> For each institution, know method of election/appointment, powers, removal/impeachment process (especially President), composition of houses, and the core parliamentary committees.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="state-government"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-fuchsia-50 border-fuchsia-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-fuchsia-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-fuchsia-600 bg-fuchsia-100">
                    <Castle size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        State Government <span className="text-sm font-normal text-gray-600">(Governor, CM, Legislature)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">Governor</span>
                        <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">CM & Ministers</span>
                        <span className="text-xs px-2 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full">Legislature</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("state-government") ? 'rotate-180' : ''}`}
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

                {/* Governor: Appointment, Powers, Discretionary Powers */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">Governor: Appointment, Powers & Discretionary Powers</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Appointment:</b> The Governor is appointed by the President of India for a five-year term (Articles 155–156). Must be an Indian citizen, at least 35 years old, and not hold any office of profit.
                    </li>
                    <li>
                        <b>Powers:</b> The Governor is the constitutional head of the state (Article 153) and acts on the aid and advice of the State’s Council of Ministers (Article 163), except in matters requiring discretion. Main powers:
                        - <b>Executive:</b> Appoints Chief Minister and ministers (Article 164), Advocate General (Article 165), and others; can allocate portfolios.
                        - <b>Legislative:</b> Summons, prorogues, dissolves State Legislative Assembly; addresses legislature; can withhold assent or reserve bills for the President (Articles 200–201); issues ordinances (Article 213).
                        - <b>Judicial:</b> Appoints district judges (Article 233); can grant pardons, reprieves (Article 161).
                    </li>
                    <li>
                        <b>Discretionary Powers:</b> The Governor can act independently in select situations:
                        - Choosing a Chief Minister when no party has a majority.
                        - Dismissing a government that loses majority, or dissolving Assembly on a CM’s advice.
                        - Reserving a bill for President’s consideration (Article 201).
                        - Recommending President’s rule (Article 356).
                        - Withholding assent or returning a bill to the legislature.
                        - Seeking information from the CM for legislative or administrative matters.
                        - Additional special powers in some states (e.g., Sixth Schedule areas).
                    </li>
                    <li>
                        <b>Discretionary powers</b> are constitutionally backed (esp. Article 163) and allow the Governor to act as a link between the Center and State and as a neutral constitutional authority in times of political instability or emergency.
                    </li>
                    </ul>
                </motion.div>

                {/* Chief Minister & State Council of Ministers */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03}}
                >
                    <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">Chief Minister & State Council of Ministers</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        The <b>Chief Minister (CM)</b> is appointed by the Governor. The CM is the real executive head of the state and leads the Council of Ministers.
                    </li>
                    <li>
                        <b>Council of Ministers</b>: Appointed on the CM’s advice; collectively responsible to the State Legislative Assembly (Vidhan Sabha).
                        - <b>Council sizes</b> are fixed (no more than 15% of total Assembly strength as per 91st Amendment).
                    </li>
                    <li>
                        CM’s functions include: Forming and leading the ministry, allocating portfolios, advising the Governor, chairing cabinet meetings, representing the state, and ensuring the passage of government business in the House.
                    </li>
                    <li>
                        The ministry stays in office only while it enjoys the confidence of the Assembly (i.e., majority support).
                    </li>
                    </ul>
                </motion.div>
                
                {/* State Legislature: Assembly & Council */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06}}
                >
                    <h3 className="font-semibold text-lg text-fuchsia-700 mb-1">State Legislature: Legislative Assembly & Council</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        Most states have a <b>unicameral legislature</b> (only a Legislative Assembly/Vidhan Sabha). Some states (Uttar Pradesh, Maharashtra, Karnataka, Andhra Pradesh, Telangana, Bihar) have <b>bicameral</b> legislatures (Legislative Assembly + Legislative Council/Vidhan Parishad).
                    </li>
                    <li>
                        <b>Legislative Assembly (Vidhan Sabha):</b>
                        - Directly elected by people; term: 5 years (can be dissolved sooner).
                        - Minimum strength: 60, maximum: 500 (exceptions for smaller states/UTs).
                        - Presided over by the Speaker.
                        - Makes laws for State List/Concurrent List, controls government through questions, motions, and budget approval.
                    </li>
                    <li>
                        <b>Legislative Council (Vidhan Parishad):</b>
                        - Maximum strength: cannot exceed 1/3rd of Assembly or be less than 40.
                        - Members selected by various groups: MLAs, local authorities, teachers, graduates, and nominations by the Governor.
                        - Permanent body: 1/3rd of members retire every 2 years.
                        - Reviews, suggests amendments to bills passed by Assembly, but cannot delay Money Bills for more than 14 days.
                    </li>
                    <li>
                        <b>Overall:</b> State Legislatures are responsible for making laws, passing budgets, controlling the executive, and representing the public at the state level.
                    </li>
                    </ul>
                    <div className="text-xs text-fuchsia-700 mt-2">
                    <b>SSC Focus:</b> Know Governor's powers, discretionary scope (esp. appointment/dissolution), structure and function of CM/Council, and state legislative composition and procedures.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="judiciary"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-purple-50 border-purple-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-purple-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-purple-600 bg-purple-100">
                    <Scale size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Judiciary <span className="text-sm font-normal text-gray-600">(Supreme Court, High Courts, Judicial Review & PIL)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Supreme Court</span>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">High Courts</span>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Judicial Review & PIL</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("judiciary") ? 'rotate-180' : ''}`}
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

                {/* Supreme Court: Composition, Jurisdiction, Powers */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <h3 className="font-semibold text-lg text-purple-700 mb-1">Supreme Court: Composition, Jurisdiction & Powers</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Constitutional Basis:</b> Articles 124–147, Part V of the Constitution.
                    </li>
                    <li>
                        <b>Composition:</b> Presently <b>34 judges</b> (including the Chief Justice of India), appointed by the President; Parliament can change the number.
                    </li>
                    <li>
                        <b>Bench Structure:</b> Division Bench (2/3 judges); Constitutional Bench (5+ judges) for major constitutional issues.
                    </li>
                    <li>
                        <b>Seat:</b> Delhi (can be moved by CJI as needed).
                    </li>
                    <li>
                        <b>Original Jurisdiction (Art. 131):</b> Disputes between Centre & State(s) or amongst States, and enforcement of Fundamental Rights (Art. 32: writ jurisdiction).
                    </li>
                    <li>
                        <b>Appellate Jurisdiction (Arts. 132–134):</b> Appeals from High Courts in constitutional, civil, and criminal matters.
                    </li>
                    <li>
                        <b>Special Leave to Appeal (Art. 136):</b> Can grant leave to appeal from any court/tribunal except military.
                    </li>
                    <li>
                        <b>Advisory Jurisdiction (Art. 143):</b> President may seek the Court's opinion/advice on questions of law or fact of public importance.
                    </li>
                    <li>
                        <b>Court of Record (Art. 129):</b> Its records are evidence and it can punish for contempt.
                    </li>
                    <li>
                        <b>Law declared by SC is binding on all courts in India (Art. 141)</b>.
                    </li>
                    <li>
                        <b>Judicial Review:</b> Reviews constitutionality of laws/executive actions—core of India's checks and balances.
                    </li>
                    <li>
                        <b>Enforcement:</b> Supreme Court may issue writs: habeas corpus, mandamus, prohibition, quo warranto, and certiorari, to enforce fundamental rights (Art. 32).
                    </li>
                    </ul>
                </motion.div>

                {/* High Courts: Jurisdiction and Powers */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03}}
                >
                    <h3 className="font-semibold text-lg text-purple-700 mb-1">High Courts: Jurisdiction & Powers</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        Each state (or group of states/UTs) has a <b>High Court</b>, the highest court at the state level.
                    </li>
                    <li>
                        <b>Original jurisdiction:</b> Hears certain civil/criminal cases first (e.g., election disputes, writ petitions).
                    </li>
                    <li>
                        <b>Appellate jurisdiction:</b> Hears appeals from lower civil and criminal courts.
                    </li>
                    <li>
                        <b>Supervisory jurisdiction:</b> Can supervise district/subordinate courts.
                    </li>
                    <li>
                        <b>Writ jurisdiction (Art. 226):</b> Can issue writs for enforcement of rights (including fundamental and legal rights, wider than SC scope).
                    </li>
                    <li>
                        Decides on constitutional validity of state laws and actions.
                    </li>
                    <li>
                        High Courts’ decisions are binding within their respective territories.
                    </li>
                    </ul>
                </motion.div>

                {/* Judicial Review & Judicial Activism */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06}}
                >
                    <h3 className="font-semibold text-lg text-purple-700 mb-1">Judicial Review and Judicial Activism</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Judicial Review:</b> Power of SC (and HCs) to examine the constitutionality of laws and executive actions, and strike them down if found ultra vires or violative of the Constitution.
                    </li>
                    <li>
                        <b>Source:</b> Derived from Article 13 (re: Fundamental Rights), reinforced by multiple SC judgments.
                    </li>
                    <li>
                        <b>Judicial Activism:</b> When courts go beyond traditional interpretation and proactively enforce rights or mandate actions in public interest—often via PILs or expansive interpretation (e.g., right to privacy, environment, gender rights).
                    </li>
                    <li>
                        Both are key checks on misuse of power and protection of citizen rights.
                    </li>
                    </ul>
                </motion.div>

                {/* Public Interest Litigation (PIL) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.09}}
                >
                    <h3 className="font-semibold text-lg text-purple-700 mb-1">Public Interest Litigation (PIL)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>PIL</b> is the use of judicial process to protect public interest or collective rights, especially for marginalized sections, or in case of government/public body inaction.
                    </li>
                    <li>
                        Any citizen or group (not just the directly aggrieved party) can approach the SC (Art. 32) or High Court (Art. 226) through simple letters or petitions.
                    </li>
                    <li>
                        PIL has led to transformative judgments in environment, gender, bonded labour, prison reform, pollution control, and more.
                    </li>
                    <li>
                        Instrument of <b>judicial activism</b>: deepens democracy and access to justice.
                    </li>
                    </ul>
                    <div className="text-xs text-purple-700 mt-2">
                    <b>SSC Focus:</b> Know composition (judge strength), jurisdictions (original, appellate, advisory, writ), judicial review & activism, difference in scope and powers of SC/HCs, and PIL’s meaning and importance.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="constitutional-bodies"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-gray-50 border-gray-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-gray-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-gray-600 bg-gray-100">
                    <KeyRound size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Constitutional Bodies <span className="text-sm font-normal text-gray-600">(ECI, CAG, UPSC, SPSC)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Election</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Auditor</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">Recruitment</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("constitutional-bodies") ? 'rotate-180' : ''}`}
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

                {/* Election Commission of India (ECI) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">Election Commission of India (ECI)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Constitutional authority under Article 324</b>; established in 1950 to supervise, direct, and control all elections to Parliament, state legislatures, and the offices of President and Vice President.
                    </li>
                    <li>
                        <b>Composition:</b> Multi-member body (Chief Election Commissioner + 2 Election Commissioners, all appointed by the President); equal power among all members. Fixed 6-year term or until age 65, whichever earlier.
                    </li>
                    <li>
                        <b>Key functions:</b> Conducts and supervises elections, prepares and revises electoral rolls, notifies election schedules, grants/withdraws party recognition and symbols, enforces the Model Code of Conduct, resolves election disputes, oversees campaign expenditure, and can cancel or order re-elections if needed.
                    </li>
                    <li>
                        <b>Advisory/judicial powers:</b> Advises President/Governor on disqualification of MPs/MLAs, settles party/symbol disputes.
                    </li>
                    <li>
                        <b>Independence:</b> Protected tenure for CEC (removal like SC judge), insulated from executive influence; financial and administrative autonomy.
                    </li>
                    </ul>
                </motion.div>

                {/* Comptroller & Auditor General of India (CAG) */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03}}
                >
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">Comptroller and Auditor General of India (CAG)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Established under Article 148</b>; CAG is the supreme audit authority and guardian of public funds.
                    </li>
                    <li>
                        <b>Appointed by the President</b> for a 6-year term or until 65 years of age.
                    </li>
                    <li>
                        <b>Duties:</b> Audits accounts of Union and State governments, public sector undertakings, and reports to the President/Governors; ensures lawful and efficient use of public resources.
                    </li>
                    <li>
                        CAG reports are examined by Parliament’s Public Accounts Committee.
                    </li>
                    <li>
                        <b>Independence:</b> Protected tenure/removal, salary/equipment secured by Parliament.
                    </li>
                    </ul>
                </motion.div>

                {/* UPSC & State Public Service Commissions */}
                <motion.div
                    className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06}}
                >
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">Union Public Service Commission (UPSC) & State Public Service Commissions (SPSC)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>UPSC</b> (Article 315–323) is India's central body for recruitment to the All-India and Central Services; <b>SPSCs</b> recruit for state services.
                    </li>
                    <li>
                        <b>Composition:</b> Chairman + other members (appointed by the President for UPSC, by Governor for SPSC); usually serve for 6 years or until 65 (UPSC)/62 (SPSC) years.
                    </li>
                    <li>
                        <b>Functions:</b> Conducts exams/interviews for civil services, advises government on appointments, promotions, transfers, and disciplinary matters for government servants.
                    </li>
                    <li>
                        Its role is advisory; government can reject recommendations but must record reasons.
                    </li>
                    <li>
                        <b>Independence:</b> Constitutionally protected (removal procedure, service conditions cannot be changed to their disadvantage), and finances are charged on the Consolidated Fund.
                    </li>
                    </ul>
                    <div className="text-xs text-gray-700 mt-2">
                    <b>SSC Focus:</b> Know articles & years of establishment, composition/tenure, functions (what each body audits/conducts/oversees), and the independence mechanisms for ECI, CAG, UPSC, and SPSC.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="statutory-bodies"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-yellow-50 border-yellow-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-yellow-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-yellow-600 bg-yellow-100">
                    <Scale size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Statutory Bodies <span className="text-sm font-normal text-gray-600">(Key Watchdogs)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">NHRC</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">CVC</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">CIC</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Lokpal</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("statutory-bodies") ? 'rotate-180' : ''}`}
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

                {/* NHRC */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h3 className="font-semibold text-lg text-yellow-700 mb-1">National Human Rights Commission (NHRC)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><b>Statutory body</b> under the Protection of Human Rights Act, 1993; promotes and protects basic human rights like dignity, liberty, equality.</li>
                    <li><b>Functions:</b> Investigates human rights violations (<b>suo moto</b> or via complaints), inspects conditions of jails/detention, studies treaties, promotes HR awareness and education, recommends reforms and compensation.</li>
                    <li><b>Powers:</b> Civil court powers – summoning witnesses, collecting evidence, etc.</li>
                    <li><b>Composition:</b> Chairperson (former CJ of India or SC judge) + 4 members + ex officio members – appointed by President.</li>
                    <li><b>Limitations:</b> Recommendations not binding, cannot act on private parties, time-barred if older than 1 year, limited role in armed forces violations.</li>
                    <li><b>Recent changes (2019):</b> Term reduced to 3 years, eligibility widened, UTs brought under State Commissions (except Delhi).</li>
                    </ul>
                </motion.div>

                {/* CVC */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.03 }}>
                    <h3 className="font-semibold text-lg text-yellow-700 mb-1">Central Vigilance Commission (CVC)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><b>Statutory body</b> under the Central Vigilance Commission Act, 2003 (originally formed by executive resolution in 1964).</li>
                    <li><b>Composition:</b> Central Vigilance Commissioner + 2 Vigilance Commissioners – appointed by the President for 4 years/65 years max.</li>
                    <li><b>Functions:</b> Supervises vigilance administration of central government, monitors anti-corruption efforts, advises on disciplinary action, supervises CBI in corruption cases.</li>
                    <li><b>Limitation:</b> Not an investigation agency but supervisory – ensures systemic improvement and accountability.</li>
                    <li><b>Independence:</b> Protected by legal provisions – removal only like a SC judge.</li>
                    </ul>
                </motion.div>

                {/* CIC */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }}>
                    <h3 className="font-semibold text-lg text-yellow-700 mb-1">Central Information Commission (CIC)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><b>Statutory body</b> established under the Right to Information Act, 2005 – ensures information transparency and access in central agencies.</li>
                    <li><b>Composition:</b> Chief Information Commissioner + up to 10 Information Commissioners – appointed by the President for up to 3 years/65 years age limit.</li>
                    <li><b>Functions:</b> Hears RTI appeals and complaints, mandates disclosure of information, imposes penalties for non-compliance, promotes RTI awareness.</li>
                    <li><b>Nature:</b> Autonomous and has power to give binding decisions in information-related disputes.</li>
                    </ul>
                </motion.div>

                {/* Lokpal & Lokayuktas */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.09 }}>
                    <h3 className="font-semibold text-lg text-yellow-700 mb-1">Lokpal & Lokayuktas</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><b>Statutory body</b> created under the Lokpal and Lokayuktas Act, 2013 to tackle corruption in public offices.</li>
                    <li><b>Lokpal:</b> Appointed by President, comprises a Chairperson + up to 8 members (50% judicial, with SC/ST/OBC/women/minority representation).</li>
                    <li><b>Jurisdiction:</b> Can inquire/investigate complaints against the PM, central ministers, MPs, Group A/B/C/D officers.</li>
                    <li><b>Powers:</b> Authorizes investigations, recommends CBI action, may attach assets, supervise prosecutions.</li>
                    <li><b>Lokayuktas:</b> Similar ombudsman system at state level – structure/duties based on respective state laws.</li>
                    </ul>
                    <div className="text-xs text-yellow-700 mt-2">
                    <b>SSC Focus:</b> Know acts, year of establishment, composition, term, major powers, and functional autonomy of these watchdog bodies – all are frequent in Polity MCQs.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="centre-state-relations"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-blue-50 border-blue-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-blue-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-blue-600 bg-blue-100">
                    <ArrowUpDown size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Center-State Relations <span className="text-sm font-normal text-gray-600">(Legislative, Administrative, Financial, Governor’s role)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Legislative</span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Administrative</span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Financial</span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Governor</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("centre-state-relations") ? 'rotate-180' : ''}`}
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

                {/* Legislative Relations */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Legislative Relations</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Articles 245–255</b> (Part XI, Constitution) detail legislative relations between the Centre and States.
                    </li>
                    <li>
                        <b>Division of Subjects (Seventh Schedule):</b>
                        <ul>
                        <li><b>Union List:</b> Centre’s exclusive law-making powers.</li>
                        <li><b>State List:</b> States’ exclusive law-making powers (unless Parliament legislates in national interest, emergencies, or state request).</li>
                        <li><b>Concurrent List:</b> Both Centre and States legislate; in conflict, Parliament law prevails.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Residuary powers</b> rest with the Centre (Article 248).
                    </li>
                    <li>
                        <b>Extra-territorial powers:</b> Only Parliament can legislate with extra-territorial effect.
                    </li>
                    <li>
                        <b>GST (Article 246A):</b> Dual authority—both Centre and States can legislate on GST; brought by 101st Amendment.
                    </li>
                    </ul>
                </motion.div>

                {/* Administrative Relations */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.03 }}>
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Administrative Relations</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Articles 256–263</b> (Part XI) set out administrative relations between Centre and States.
                    </li>
                    <li>
                        <b>Obligation of States:</b> Must comply with laws made by Parliament and follow directions of the Centre to ensure compliance (Article 256).
                    </li>
                    <li>
                        <b>Executive authority:</b> Centre controls Union subjects; States administer State subjects; both cooperate in Concurrent subjects.
                    </li>
                    <li>
                        <b>Centre’s Directions:</b> Centre can direct States on matters such as national/military importance, language instruction for minorities, and welfare schemes for Scheduled Tribes.
                    </li>
                    <li>
                        <b>Power to entrust functions:</b> Centre may delegate Union executive functions to States (Article 258).
                    </li>
                    <li>
                        <b>Coordination & Disputes:</b> Inter-State Council (Article 263) exists for coordination/dispute resolution.
                    </li>
                    </ul>
                </motion.div>

                {/* Financial Relations */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }}>
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Financial Relations</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Articles 268–293</b> (Part XII) deal with Centre-State financial relations, including division of tax revenues, grants and loans.
                    </li>
                    <li>
                        <b>Division of Taxes:</b> Some taxes are levied and collected by the Centre but shared with States (e.g., income tax, GST); others are levied and collected by States for themselves.
                    </li>
                    <li>
                        <b>Grants-in-aid:</b> Centre can give grants to States as per <b>Article 275</b> (statutory) and <b>Article 282</b> (for any public purpose, even outside usual lists).
                    </li>
                    <li>
                        <b>Finance Commission (Article 280):</b> Constituted every 5 years to recommend distribution of revenues and grants.
                    </li>
                    <li>
                        <b>Borrowing powers:</b> States need Central consent to borrow from abroad or in certain domestic cases.
                    </li>
                    </ul>
                </motion.div>

                {/* Inter-State Relations */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.09 }}>
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Inter-State Relations</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Articles 262–263</b> govern inter-state relations and dispute resolution mechanisms.
                    </li>
                    <li>
                        <b>Inter-State Water Disputes:</b> Article 262 allows Parliament to adjudicate disputes, with tribunals for major issues (e.g., river water disputes).
                    </li>
                    <li>
                        <b>Inter-State Council (Art. 263):</b> Permanent constitutional body for consultation, established in 1990—promotes coordination and cooperation.
                    </li>
                    <li>
                        Other mechanisms: Zonal councils (statutory), and coordination by Home Ministry.
                    </li>
                    </ul>
                </motion.div>

                {/* Governor’s Role in Centre-State Relations */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
                    <h3 className="font-semibold text-lg text-blue-700 mb-1">Governor’s Role in Centre-State Relations</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Constitutional link:</b> Appointed by the President (Central government), the Governor acts as the Centre’s representative in States and reports directly to the President.
                    </li>
                    <li>
                        <b>Key roles:</b>
                        <ul>
                        <li>Reserving bills for President’s assent (Article 200).</li>
                        <li>Recommending President’s Rule (Article 356) in event of constitutional machinery breakdown in the state.</li>
                        <li>Seeking information from Chief Minister and Council of Ministers.</li>
                        <li>Supervising elections, especially in times of crisis.</li>
                        <li>Ensuring that State government functions per Constitution and upholds Centre’s directives, especially in matters of national importance.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Discretionary powers:</b> The Governor can act without the advice of the State Council of Ministers in specific circumstances, often related to Centre-State dynamics.
                    </li>
                    <li>
                        <b>Controversies:</b> Sometimes the Governor’s role is debated as being too partisan toward the Centre, especially regarding imposition of President’s Rule.
                    </li>
                    </ul>
                    <div className="text-xs text-blue-700 mt-2">
                    <b>SSC Focus:</b> Know Articles & lists for legislative, administrative, and financial relations; GST provisions; Inter-State Council’s purpose; and the Governor’s role, especially regarding President's Rule and bill reservation for President.
                    </div>
                </motion.div>

                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="emergency-provisions"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-rose-50 border-rose-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-rose-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-rose-600 bg-rose-100">
                    <AlertTriangle size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Emergency Provisions <span className="text-sm font-normal text-gray-600">(Articles 352, 356, 360)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">National Emergency</span>
                        <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">President’s Rule</span>
                        <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">Financial Emergency</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("emergency-provisions") ? 'rotate-180' : ''}`}
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

                {/* National Emergency (Article 352) */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <h3 className="font-semibold text-lg text-rose-700 mb-1">National Emergency (Article 352)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>National Emergency</b> is declared by the President if satisfied that India’s security is threatened by war, external aggression, or armed rebellion (earlier “internal disturbance”). Applies to the whole or part of India.
                    </li>
                    <li>
                        Central government gains executive and legislative supremacy over states (unitary character); Parliament can legislate on any matter; State governments remain but work under Union direction.
                    </li>
                    <li>
                        Fundamental Rights (esp. Article 19) can be suspended, and certain rights limited. Articles 20 and 21 cannot be suspended.
                    </li>
                    <li>
                        Proclamation must be approved by Parliament within 1 month (44th Amendment; previously 2 months) and renewed every 6 months by special majority. Can be revoked any time by President.
                    </li>
                    <li>
                        Total of 3 national emergencies till date: 1962 (China war), 1971 (Pakistan war), and 1975–77 (internal, “Emergency” under Indira Gandhi).
                    </li>
                    </ul>
                </motion.div>

                {/* President's Rule (State Emergency – Article 356) */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03 }}>
                    <h3 className="font-semibold text-lg text-rose-700 mb-1">President’s Rule (Article 356)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>President’s Rule</b> (State Emergency) can be declared if the President, on receipt of a report from the Governor or otherwise, is satisfied that the governance of a state cannot be carried on as per the Constitution.
                    </li>
                    <li>
                        On declaration: State Council of Ministers is dismissed, Assembly may be dissolved or kept in suspended animation, and the Union assumes direct control of the executive/government. Parliament legislates for the state.
                    </li>
                    <li>
                        Proclamation must be approved by Parliament within 2 months, continues for 6 months at a time, maximum 3 years (with conditions and parliamentary approval); can be revoked any time by President.
                    </li>
                    <li>
                        Used frequently since independence; often controversial (esp. on grounds of “breakdown of constitutional machinery”).
                    </li>
                    </ul>
                </motion.div>
                
                {/* Financial Emergency (Article 360) */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 }}>
                    <h3 className="font-semibold text-lg text-rose-700 mb-1">Financial Emergency (Article 360)</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Financial Emergency</b> can be proclaimed by the President if satisfied that the financial stability or credit of India or any part of its territory is threatened.
                    </li>
                    <li>
                        Declaration must be approved by both houses of Parliament within 2 months by simple majority. Once approved, it continues indefinitely until revoked; no repeated Parliamentary approval required.
                    </li>
                    <li>
                        On declaration: Union gains sweeping financial powers—directs states on financial matters, may reduce salaries and allowances of government servants (including judges), and may direct states to reserve money bills for President’s consent.
                    </li>
                    <li>
                        President can revoke the proclamation any time by a fresh proclamation, without parliamentary approval.
                    </li>
                    <li>
                        Never imposed to date in India, but the legal framework is well defined.
                    </li>
                    <li>
                        Judicial review was made possible by the 44th Amendment Act, 1978; previously, Presidential satisfaction was final and could not be challenged.
                    </li>
                    </ul>
                    <div className="text-xs text-rose-700 mt-2">
                    <b>SSC Focus:</b> Emergency types and articles, authority and conditions, approval and duration, impact on rights and federalism, key differences, and which types have actually been used.
                    </div>
                </motion.div>
                </motion.div>
            </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
            value="local-government"
            className="rounded-xl border overflow-hidden transition-all duration-300 bg-green-50 border-green-200"
            >
            <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-5 hover:bg-green-100/50 transition-colors">
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg text-green-600 bg-green-100">
                    <Home size={24} />
                    </div>
                    <div>
                    <span className="font-bold text-xl text-gray-800">
                        Local Government <span className="text-sm font-normal text-gray-600">(73<sup>rd</sup> & 74<sup>th</sup> Amendments)</span>
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Panchayati Raj</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Urban Local Bodies</span>
                    </div>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeAccordion.includes("local-government") ? 'rotate-180' : ''}`}
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

                {/* 73rd Amendment - Panchayati Raj */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <h3 className="font-semibold text-lg text-green-700 mb-1">73<sup>rd</sup> Amendment – Panchayati Raj</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Enacted in 1992, effective April 24, 1993,</b> the 73rd Amendment added Part IX (Articles 243–243O) and the 11th Schedule to the Constitution, recognizing Panchayati Raj Institutions (PRI) as constitutional bodies.
                    </li>
                    <li>
                        <b>Objective:</b> Implement Article 40 of DPSP—democratic decentralization and self-government at the village level; empowers Panchayats as “institutions of self-government.”
                    </li>
                    <li>
                        <b>Three-tier system:</b> Gram Panchayat (village), Panchayat Samiti (block/intermediate), Zila Parishad (district) in all states with population over 20 lakhs.
                    </li>
                    <li>
                        <b>Gram Sabha:</b> Foundation of the system—village electorate for direct participation in local affairs.
                    </li>
                    <li>
                        <b>Reservation:</b> Seats reserved for SCs/STs (as per their population) and <b>not less than one-third of seats for women</b> (including seats for SC/ST women).
                    </li>
                    <li>
                        <b>Tenure & elections:</b> Five-year fixed tenure; elections by independent State Election Commissions.
                    </li>
                    <li>
                        <b>Powers & responsibilities:</b> Devolution of authority (including 29 subjects in the Eleventh Schedule), taxation powers, and periodic evaluation by State Finance Commissions.
                    </li>
                    <li>
                        <b>Application:</b> Does not apply to Nagaland, Meghalaya, Mizoram, certain scheduled and tribal areas, hill areas of Manipur, and Darjeeling district.
                    </li>
                    <li>
                        <b>Significance:</b> Over 2.3 lakh Gram Panchayats, ~28 lakh elected representatives—including over 13 lakh women.
                    </li>
                    </ul>
                </motion.div>
                
                {/* 74th Amendment - Urban Local Bodies */}
                <motion.div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.03 }}>
                    <h3 className="font-semibold text-lg text-green-700 mb-1">74<sup>th</sup> Amendment – Urban Local Bodies</h3>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                        <b>Enacted in 1992, effective June 1, 1993.</b>
                    </li>
                    <li>
                        <b>Added Part IXA (Articles 243P–243ZG)</b> and the 12th Schedule to the Constitution, granting constitutional status to urban local bodies (Municipalities).
                    </li>
                    <li>
                        <b>Three types of Urban Local Bodies:</b>
                        <ul>
                        <li><b>Nagar Panchayat</b> (areas in transition—rural to urban)</li>
                        <li><b>Municipal Council</b> (smaller urban areas)</li>
                        <li><b>Municipal Corporation</b> (larger urban areas)</li>
                        </ul>
                    </li>
                    <li>
                        <b>Reservation:</b> One-third seats for women; proportion for SC/ST as in PRIs.
                    </li>
                    <li>
                        <b>Powers & functions:</b> 18 subjects (12th Schedule), local planning, social and economic development, levying taxes and fees.
                    </li>
                    <li>
                        <b>State Election Commission:</b> Conducts regular, independent elections for local bodies.
                    </li>
                    <li>
                        <b>Municipal Finance Commission:</b> Evaluates financial position every 5 years.
                    </li>
                    <li>
                        <b>Significance:</b> Promotes citizen participation, grassroots urban governance, decentralized urban administration.
                    </li>
                    </ul>
                    <div className="text-xs text-green-700 mt-2">
                    <b>SSC Focus:</b> Know the main articles/parts/schedules added, 3-tier rural and 3-category urban system, reservation rules, election and finance commissions, and which states/areas are exempted.
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