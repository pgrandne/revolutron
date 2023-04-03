'use client';

import { perm_marker } from '@/lib/utils/font';

import equipmentPic from "@/public/img/equipment.jpg"
import { motion } from 'framer-motion';
import Image from 'next/image';

const Construction = () => {


    return (
        <div className="flex justify-center h-screen">
            <div className="relative my-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 5 }}
                >
                    <div className={`${perm_marker.className} absolute transform rounded-sm rotate-[-5deg] -mt-5 -ml-7 bg-red-800 p-2 text-3xl`}>
                        To be continued...
                    </div>
                    <Image
                        className="bgCase -z-10"
                        src={equipmentPic}
                        alt="Newsroom"
                        width={800}
                        height={600}
                    />

                </motion.div>
            </div>
        </div>
    )
}

export default Construction;