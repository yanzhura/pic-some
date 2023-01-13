import { useEffect, useRef, useState } from 'react';

const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    const handleHover = ({ type }) => {
        type === 'mouseenter' ? setHovered(true) : setHovered(false);
    };

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('mouseenter', handleHover);
        element.addEventListener('mouseleave', handleHover);

        return () => {
            element.removeEventListener('mouseenter', handleHover);
            element.removeEventListener('mouseleave', handleHover);
        };
    }, []);

    return [hovered, ref];
};

export default useHover;
