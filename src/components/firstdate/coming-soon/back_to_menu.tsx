import React from 'react';
import Link from 'next/link';
export default function Back_To_Menu() {
  return (
    <div className="flex text-center justify-center ">
      <Link
        href="/"
        className="bg-project-fuchsia text-xl text-white py-2 px-2 w-60 h-12 rounded-md"
      >
        กลับสู่หน้าหลัก
      </Link>
    </div>
  );
}
