import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface whatsappProgram {
  buttonText: string;
  buttonLink: string;
}

const whatsAppButton = ({ buttonText, buttonLink }: whatsappProgram) => {
  return (
    <div>
      <Link
        href={buttonLink}
        className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-indigo-50 py-3 pl-6 pr-16 font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-16 hover:pr-6"
      >
        <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
        <span className="absolute right-0 pr-7 duration-200 ease-out group-hover:translate-x-12">
          <FaWhatsapp className="h-5 w-5 text-green-400" />
        </span>
        <span className="absolute left-0 -translate-x-12 pl-7 duration-200 ease-out group-hover:translate-x-0">
          <FaWhatsapp className="h-5 w-5 text-green-400" />
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          {buttonText}
        </span>
      </Link>
    </div>
  );
};

export default whatsAppButton;
