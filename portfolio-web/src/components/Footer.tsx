import Button from "@/components/Button";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
        <div>
            <div></div>
            <h1>Let's Talk?</h1>
            <div></div>
            </div>
            <Link href="contact">
          <Button
            btnText="Hire Me"
            btnClass="px-4 py-[7px] hidden xs:flex"
            
          />
        </Link>
    </div>
  )
}
