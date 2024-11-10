import Button from "@/components/Button";
import Headings from "@/components/Headings";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="relative px-6 lg:px-12 2xl:px-24">
      <Headings headText="Get in touch" headClass="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur
        eum id amet repellendus in aperiam corrupti, voluptates mollitia
        voluptatibus doloribus earum nulla assumenda temporibus excepturi aut
        ipsum adipisci ut.
      </p>
      <div className="flex gap-x-4">
        <Button btnText="Send Message" btnClass="" btnIcon={<FiSend />} />
      </div>
    </div>
  );
}
