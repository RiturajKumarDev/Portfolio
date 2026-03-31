import { useEffect, useState } from "react";

function Typing() {
    const developments = [
        "Web Developer",
        "Engineer",
        "Java Programmer",
        "Mobile App Developer",
        "Web Designer",
        "Mobile App Designer",
    ];

    const [text, setText] = useState("");
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const speed = isDeleting ? 70 : 120;
        const timer = setTimeout(() => {
            const current = developments[i];
            if (!isDeleting) {
                setText(current.substring(0, j + 1));
                setJ(j + 1);
                if (j + 1 === current.length) setIsDeleting(true);
            } else {
                setText(current.substring(0, j - 1));
                setJ(j - 1);
                if (j - 1 === 0) {
                    setIsDeleting(false);
                    setI((i + 1) % developments.length);
                }
            }
        }, speed);
        return () => clearTimeout(timer);
    }, [j, isDeleting, i]);

    return (
        <span>{text}</span>
    );
}

export default Typing;
