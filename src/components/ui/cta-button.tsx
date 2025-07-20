import { Button } from "@/components/ui/button";
import { RiWhatsappFill } from "react-icons/ri";

interface CTAButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  href?: string
}

export function CTAButton({ children, className, href, ...props }: CTAButtonProps) {
  const content = (
    <>
      <RiWhatsappFill size={20} className="mr-2 -ml-1" />
      {children}
    </>
  );
  // Si es un enlace externo (href), renderiza <a>
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-accent text-accent-foreground font-bold text-base rounded-full px-7 py-3 shadow-lg transition 
        hover:bg-accent-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer ${className || ""}`}
      style={{ minHeight: 48 }}
    >
      {content}
    </a>
  ) : (
    <Button
      type="button"
      className={`inline-flex items-center justify-center bg-accent text-accent-foreground font-bold text-base rounded-full px-7 py-3 shadow-lg transition 
        hover:bg-accent-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer ${className || ""}`}
      style={{ minHeight: 48 }}
      {...props}
    >
      {content}
    </Button>
  );
}
