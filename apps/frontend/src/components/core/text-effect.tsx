"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface TextEffectProps {
  children: ReactNode;
  per?: "char" | "word";
  delay?: number;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: "default" | "blur" | "fade" | "slide";
}

// Helper function to check if node is a br tag
function isBrTag(node: unknown): boolean {
  if (!node || typeof node !== "object") return false;
  const nodeObj = node as { type?: string | { name?: string } };
  return (
    nodeObj.type === "br" ||
    (typeof nodeObj.type === "object" && nodeObj.type?.name === "br")
  );
}

// Helper function to extract text from ReactNode
function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  if (node && typeof node === "object" && "props" in node) {
    // Handle <br /> tags by converting to newline
    if (isBrTag(node)) {
      return "\n";
    }
    if (node.props.children) {
      return extractText(node.props.children);
    }
  }
  return "";
}

const defaultVariants = {
  container: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 10,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
};

const presetVariants: Record<string, { container?: Variants; item?: Variants }> = {
  blur: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
        },
      },
    },
  },
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
        },
      },
    },
  },
};

export function TextEffect({
  children,
  per = "char",
  delay = 0,
  className = "",
  variants,
  preset,
}: Readonly<TextEffectProps>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  let finalVariants = defaultVariants;

  if (preset && presetVariants[preset]) {
    finalVariants = presetVariants[preset] as typeof defaultVariants;
  }

  if (variants) {
    finalVariants = {
      container: { ...finalVariants.container, ...variants.container },
      item: { ...finalVariants.item, ...variants.item },
    };
  }

  // Convert ReactNode to string and split by lines first
  const textContent = extractText(children);
  const lines = textContent.split("\n");

  return (
    <>
      {lines.map((line, lineIndex) => {
        const splitText = per === "char" ? line.split("") : line.split(" ");
        const isLastLine = lineIndex === lines.length - 1;

        return (
          <motion.span
            key={`line-${lineIndex}-${line.substring(0, 10)}`}
            className={`block ${className}`}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={finalVariants.container}
          >
            {splitText.map((char, charIndex) => (
              <motion.span
                key={`char-${lineIndex}-${charIndex}-${char}`}
                className="inline-block"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
                variants={finalVariants.item}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {!isLastLine && <br />}
          </motion.span>
        );
      })}
    </>
  );
}
