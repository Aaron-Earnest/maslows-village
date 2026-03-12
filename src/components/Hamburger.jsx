import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

function MobileNav() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div classname="mobile-header">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
            {isOpen && <MenuOverlay />}
        </div>
    );
}