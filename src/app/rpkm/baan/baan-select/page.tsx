'use client'

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import home from '@public/baan-select/home.svg';
import search from '@public/baan-select/search.svg';
import { baanInfos, BaanInfoProps } from '@/components/rpkm/baan/baanInfo';

interface SizeFilterProps {
    size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
    count: number;
}

const calculateSizeFilter = (baan: BaanInfoProps[]): SizeFilterProps[] => {
    const sizeCounts: { [key: string]: number } = {};
    baan.forEach(house => {
        sizeCounts[house.size] = (sizeCounts[house.size] || 0) + 1;
    });

    return Object.entries(sizeCounts).map(([size, count]) => ({
        size: size as 'S' | 'M' | 'L' | 'XL' | 'XXL',
        count,
    }));
};

const sizeFilter = calculateSizeFilter(baanInfos);

const shuffleArray = (baan: BaanInfoProps[]): BaanInfoProps[] => {
    return [...baan].sort(() => Math.random() - 0.5);
  };

export default function BaanSelect() {
    const [selectedHouseSize, setSelectedHouseSize] = useState<string | null>(null)
    const [shake, setShake] = useState(false);
    const [shuffledBaan, setShuffledBaan] = useState<BaanInfoProps[]>([]);
    const baanListRef = useRef<HTMLDivElement | null>(null);

    const handleSizeChange = (size: string) => {
        setSelectedHouseSize(prevSize => (prevSize === size ? null : size));
    };

    const handleOnClick = () => {
        baanListRef.current ? baanListRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }) : console.error("Element not found.");
        setShake(true);
    }

    useEffect(() => {
        if (!shake) return;
        const handleDocumentClick = () => {
            setShake(false);
        };
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [shake]);

    useEffect(() => {
        setShuffledBaan(shuffleArray(baanInfos));
      }, []);

    return (
        <>
        <div className="flex justify-center items-center bg-white w-screen h-60">
            {/*baanSelectComponent*/}
            <button onClick={handleOnClick}>
                click here
            </button>
            </div>
        <div ref={baanListRef} className="relative flex justify-center items-center flex-col">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative flex flex-col items-center mt-4 w-full">
                <div className="flex justify-center items-center mb-1 gap-[4%] w-full">
                    <Link href="/rpkm/baan/home">
                        <Image
                            src={home}
                            alt="home"
                            className="w-auto h-7 m-2 text-black drop-shadow"
                        />
                    </Link>
                    <div className="relative flex justify-center items-center w-[65%]">
                        <input
                            type="text"
                            placeholder="ค้นหาบ้าน"
                            value=""
                            //onChange=""
                            className="w-full h-8 pl-4 rounded-full bg-project-yellow placeholder-rpkm-blue"
                        />
                        <Image
                            src={search}
                            alt="search"
                            className="absolute right-4"
                        />
                    </div> 
                </div>
                <label className="text-white font-semibold z-20 mb-2">ขนาดบ้าน</label>
                <div className="flex justify-center items-center flex-wrap mt-1 gap-[3%] w-[70%]">
                    {sizeFilter.map((house, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                name="houseSize"
                                className="hidden"
                                id={house.size}
                                checked={selectedHouseSize === house.size}
                                onChange={() => handleSizeChange(house.size)}
                            />
                            <label htmlFor={house.size} className={cn(`flex justify-center items-center text-white bg-rpkm-green 
                                                                        w-auto h-9 px-4 rounded-lg font-semibold drop-shadow-lg mb-4
                                                                        transition-all duration-300 active:scale-90`, {
                                                            'bg-white text-rpkm-blue' : selectedHouseSize === house.size
                                                        })}
                                                        >
                                {house.size} ({house.count})
                            </label>
                        </div>
                        ))}
                </div>
                <div className="flex justify-center items-center flex-wrap w-[85%] h-60 mb-6">
                    {/*All house data*/}
                        {shuffledBaan
                        .filter((house) => selectedHouseSize === null || house.size === selectedHouseSize)
                        .map((house, index) => (
                            <div key={index} className="flex justify-center items-center text-white">
                                <p>//</p>
                                <p>{house.name.th}-</p>
                                <p>Size: {house.size}-</p>
                                <p>Max: {house.max}</p>
                                <p>//</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        </>
    );
}