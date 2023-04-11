'use client';

import { equipmentPic } from "@/public/img"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Toast } from "@/app/components";
import { useSearchParams } from 'next/navigation';

const Construction = () => {
    const t = useTranslations('Construction');
    const f = useTranslations('Feedback');
    const searchParams = useSearchParams();
    const progression = searchParams.get('source')

    return (
        <div className="flex justify-center h-screen">
            <div className="relative my-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 5 }}
                >
                    <div className="font-permarker absolute transform rounded-sm rotate-[-5deg] -mt-5 -ml-7 bg-red-800 p-2 text-3xl">
                        {t('text')}
                    </div>
                    <Image
                        className="bgCase -z-10"
                        src={equipmentPic}
                        alt="Newsroom"
                        width={800}
                        height={600}
                    />

                </motion.div>
                <Toast feedback={f('feedback')} link={f('link')} progression={progression} />

            </div>
        </div>

    )
}

export default Construction;