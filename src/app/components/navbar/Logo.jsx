import Image from "next/image";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="brand-logo-wrapper">
      <div className="real-logo-image-container">
        <Image 
          src="/img/home/logo-100.png" 
          alt="BusinessToWeb Logo" 
          width={180} 
          height={60} 
          className="logo-img-file"
          priority
        />
      </div>
    </div>
  );
}