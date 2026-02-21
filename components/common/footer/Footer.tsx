export const revalidate = 86400; // 24 hours in seconds revalidate the footer

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 px-4 py-2 flex justify-center items-center gap-2">
      <div>
        <p className="text-sm text-gray-600 font-montserrat">
          © {year} Education Document Request System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
