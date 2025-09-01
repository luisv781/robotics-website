'use client';

import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

export default function TypewriterEffect({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(''),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                'span',
                {
                    display: 'inline-block',
                    opacity: 1,
                    width: 'fit-content',
                },
                {
                    duration: 0.2,
                    delay: stagger(0.1),
                    ease: 'easeInOut',
                }
            );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className='inline'>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className='inline-block'>
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(
                                        `text-white opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div
            className={cn(
                'text-base sm:text-2xl md:text-3xl font-bold text-center',
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                className={cn(
                    'inline-block rounded-sm max-md:w-[2px] w-1 h-6 lg:h-9 bg-blue-500',
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
}
