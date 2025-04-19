import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import {
    FiCircle,
    FiCode,
    FiFileText,
    FiLayers,
    FiLayout,
} from "react-icons/fi";
import image from "../../../constants/image";

const DEFAULT_ITEMS = [
    {
        title: "Camera Woman Portfolio",
        description: ["html", "React js", "Tailwind CSS"],
        id: 1,
        icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
        img: image.imanePortfolio,
    },
    {
        title: "Camera Woman Portfolio",
        description: ["html", "React js", "Tailwind CSS"],
        id: 2,
        icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
        img: image.imanePortfolio2,

    },
    {
        title: "Camera Woman Portfolio",
        description: ["html", "React js", "Tailwind CSS"],
        id: 3,
        icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
        img: image.imanePortfolio3,

    },
    // {
    //     title: "Camera Woman Portfolio",
    //     description: ["html", "React js", "Tailwind CSS"],
    //     id: 4,
    //     icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
    //     img: image.task4,

    // },
    // {
    //     title: "Camera Woman Portfolio",
    //     description: ["html", "React js", "Tailwind CSS"],
    //     id: 5,
    //     icon: <FiCode className="h-[16px] w-[16px] text-white" />,
    // },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function CarouselPr2({
    items = DEFAULT_ITEMS,
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1; // Animate to clone.
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden p-4 ${round
                ? "rounded-full border border-white"
                : "rounded-[24px] border bg-transparent border-[#DDD]/10"
                }`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px` }),
            }}
        >
            

            <motion.div
                className="flex"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x,
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [
                        -(index + 1) * trackItemOffset,
                        -index * trackItemOffset,
                        -(index - 1) * trackItemOffset,
                    ];
                    const outputRange = [90, 0, -90];
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });
                    return (
                        <motion.div
                            key={index}
                            className={`relative shrink-0 flex flex-col ${round
                                ? "items-center justify-center text-center bg-[#060606] border-0"
                                : "items-start justify-between  border border-[#DDD]/10 rounded-[12px]"
                                } overflow-hidden cursor-grab active:cursor-grabbing`}
                            style={{
                                width: itemWidth,
                                height: round ? itemWidth : "100%",
                                rotateY: rotateY,
                                ...(round && { borderRadius: "50%" }),
                            }}
                            transition={effectiveTransition}
                        >

                            <img src={item.img} alt="" className="w-[100%] h-[100%]" />
                            {/* <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
                                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060606]">
                                    {item.icon}
                                </span>
                            </div> */}
                            <div className="w-full h-full bg-gradient-to-t from-black/70  to-transparent absolute top-0"></div>

                            <div className="p-5 absolute bottom-0">
                                <div className="mb-1 font-black text-lg text-white">
                                    {item.title}
                                </div>
                                <div className="">
                                    <p className="flex flex-wrap gap-[5px]">
                                        {Array.isArray(item.description)
                                            ? item.description.map((desc, i) => (
                                                <span className="bg-[#1e293b] text-[#fff] inline-block px-3 py-1 rounded-full uppercase text-[9px] font-bold" key={i}>

                                                    {desc}
                                                    {/* {i < item.description.length - 1 && ", "} */}
                                                </span>
                                            ))
                                            : item.description}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div
                className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
                    }`}
            >
                <div className="mt-4 flex w-[150px] gap-5 justify-center">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                ? round
                                    ? "bg-white"
                                    : "bg-[#1e293b]"
                                : round
                                    ? "bg-[#555]"
                                    : "bg-[rgba(51,51,51,0.4)]"
                                }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
