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
    <footer className="flex flex items-center relative z-10 text-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]" style={{ backgroundColor: 'rgb(6, 0, 0)' }}>
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[160px]">
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
              <p className="mb-7 text-base text-gray-300">
              Streamline your prep and achieve your dream with PrepAI, the ultimate tool for focused preparation and faster success.With its tailored approach, PrepAI ensures you stay on track, making your preparation more efficient and effective than ever before.
              </p>
              <p className="flex items-center text-sm font-medium text-gray-300">
                <span className="mr-3 text-white">
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
              <h4 className="mb-9 text-lg font-semibold text-white">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                {/* Social media links - styling updated to match theme */}
                <SocialLink href="/#" icon="twitter" />
                <SocialLink href="/#" icon="youtube" />
              </div>
              <p className="text-base text-gray-300">
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
        <h4 className="mb-9 text-lg font-semibold text-white">
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
        className="inline-block text-base text-gray-300 hover:text-blue-200 transition duration-150"
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
        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition duration-150"
      >
        <Icon className="h-4 w-4" />
      </a>
    );
  };
export default Footer;