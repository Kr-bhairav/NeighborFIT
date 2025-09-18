const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Bhairav Kumar</span>. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 flex gap-4 text-sm">
          <a
            href="mailto:kumarbhairav9142@gmail.com"
            className="hover:text-blue-400 transition"
          >
             Email
          </a>
          <a
            href="https://www.linkedin.com/in/bhairav-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
             LinkedIn
          </a>
          <a
            href="https://github.com/Kr-bhairav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
             GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
