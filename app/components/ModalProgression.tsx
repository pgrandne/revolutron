import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export const ModalProgression = ({ setModalProgression, tProgression }: {
    setModalProgression: Dispatch<SetStateAction<boolean>>
    tProgression: any
}) => {
    const router = useRouter()

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div className={`flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-2/5`}>
                <p className="mb-4 text-xl">{tProgression('title')}</p>
                <Link className="btnProgression" href="/chapter1/scene1">{tProgression('chapter')} 1</Link>
                <Link className="btnProgression" href="/chapter2">{tProgression('chapter')} 2</Link>
                <button
                    className="btnClose mx-auto w-36"
                    onClick={() => setModalProgression(false)}
                >
                    <span className="mx-auto">{tProgression('close')} </span>
                </button>
            </div>
        </div>
    )
}
