import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {

    return (
        <>
            <div className="flex space-x-6 pt-4 justify-start">
                <Link href="#" aria-label="Instagram">
                    <FaInstagram className="w-5 h-5 hover:text-pink-500 transition-colors duration-300" />
                </Link>
                <Link href="#" aria-label="Facebook">
                    <FaFacebookF className="w-5 h-5 hover:text-blue-500 transition-colors duration-300" />
                </Link>
                <Link href="#" aria-label="Twitter">
                    <FaTwitter className="w-5 h-5 hover:text-sky-400 transition-colors duration-300" />
                </Link>
            </div>
        </>

    );
}
