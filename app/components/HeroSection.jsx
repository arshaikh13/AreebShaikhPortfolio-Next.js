"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section id="home" className="mt-10 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-[2.5rem] font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-cyan-400 to-cyan-700 block sm:inline">
                            Hello, I'm{" "}
                        </span>
                        <span className="hidden sm:inline">
                            <TypeAnimation
                                sequence={[
                                    'Areeb',
                                    1000,
                                    'A Data Engineer',
                                    1000,
                                    'A BI Developer',
                                    1000,
                                    'Debugging Life',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <div className="sm:hidden text-white text-3xl font-extrabold mb-4">
                        <TypeAnimation
                            sequence={[
                                'Areeb',
                                1000,
                                'A Data Engineer',
                                1000,
                                'A BI Developer',
                                1000,
                                'Debugging Life',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        "Yesterday is history,
                        tomorrow is a mystery,
                        and today is a gift...
                        that's why they call it present" - <strong>Master Oogway</strong>
                    </p>
                    <div>
                        <Link href="#contact">
                            <button className="px-6 py-3 cursor-pointer font-semibold rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-sky-800 via-cyan-400 to-cyan-700 hover:bg-slate-200 text-slate-800">
                                Hire Me
                            </button>
                        </Link>
                        <Link href="https://drive.google.com/file/d/19DHnLvt6QpRdg9utaU_K1hYzjlJyq41b/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="px-1 py-1 cursor-pointer font-semibold rounded-full w-full sm:w-fit bg-gradient-to-br from-sky-800 via-cyan-400 to-cyan-700 hover:bg-slate-800 border-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    View Resume
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-15 mb-8 md:mt-4 md:mb-0 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:mt-10 lg:w-[300px] lg:h-[300px] relative overflow-hidden">
                        <Image
                            src='/images/myavatar.jpg'
                            alt="header image"
                            className="object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
