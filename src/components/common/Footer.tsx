import { Link } from "react-router-dom";
import { 
    PhoneIcon,  
    XMarkIcon, // formerly TwitterIcon
    VideoCameraIcon, // for YouTube
} from '@heroicons/react/24/outline';
import myLogo from "../../assets/images/logo.png"; // Importing the logo image
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <footer className=" relative z-10 text-black pb-8 pt-10 lg:pb-8 lg:pt-10 border-t border-gray-300 shadow-[0_4px_6px_4px_rgba(0,0,0,0.9)]" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <div className="flex flex items-center container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[100px]">
              <motion.div
              whileHover={{ scale: 0.9, rotate: 10 }} // Scale up and rotate on hover
              transition={{ type: "spring", stiffness: 300 }} // Spring animation
            >
              <img
                src={myLogo}
                alt="logo"
                className="hidden dark:block"
              />
            </motion.div>
              </Link>
              <p className="mb-7 text-base text-black">
              Streamline your prep and achieve your dream with PrepAI, the ultimate tool for focused preparation and faster success.With its tailored approach, PrepAI ensures you stay on track, making your preparation more efficient and effective than ever before.
              </p>
              <p className="flex items-center text-sm font-medium text-black">
                <span className="mr-3 text-black">
                    <PhoneIcon className="h-5 w-5" />
                </span>
                <span>+91 9876543210</span>
              </p>
            </div>
          </div>

          <LinkGroup header="Resources">
            <NavLink to="/development" label="SaaS Development" />
            <NavLink to="/products" label="Our Products" />
            <NavLink to="/flow" label="User Flow" />
            <NavLink to="/strategy" label="User Strategy" />
          </LinkGroup>
          
          <LinkGroup header="Company">
            <NavLink to="/about" label="About Us" />
            <NavLink to="/contact" label="Contact & Support" />
            <NavLink to="/history" label="Success History" />
            <NavLink to="/privacy" label="Setting & Privacy" />
          </LinkGroup>
          
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-black">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                {/* Social media links - styling updated to match theme */}
                <SocialLink href="/#" icon="twitter" />
                <SocialLink href="/#" icon="youtube" />
              </div>
              <p className="text-base text-black">
                &copy; {new Date().getFullYear()} prepAI
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LinkGroup = ({ children, header} : { children: React.ReactNode; header: string }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-black">
          {header}
        </h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <li>
      <Link
        to={to}
        className="inline-block text-base text-black hover:text-blue-800 transition duration-150"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
    const icons = { 
        twitter: XMarkIcon,
        youtube: VideoCameraIcon
    };
    
    const Icon = icons[icon as keyof typeof icons];
    
    return (
      <a
        href={href}
        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-black text-black hover:border-blue-800 hover:bg-blue-800 hover:text-white transition duration-150"
      >
        <Icon className="h-4 w-4" />
      </a>
    );
  };
export default Footer;