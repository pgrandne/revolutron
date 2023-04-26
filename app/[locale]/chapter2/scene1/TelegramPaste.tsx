'use client'

import { Dispatch, SetStateAction } from "react"
import { useTranslations } from 'next-intl';

const TelegramPaste = ({ stage, setStage, azadText, setAzadText, setPlayerAddress }: {
    stage: number,
    setStage: Dispatch<SetStateAction<number>>,
    azadText: string[],
    setAzadText: Dispatch<SetStateAction<string[]>>,
    setPlayerAddress: Dispatch<SetStateAction<string>>,
}) => {
    const t = useTranslations('Chap2s1')
    const sendAddress = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const target = event.currentTarget
        const data = { address: target.address.value }
        setAzadText([...azadText, `${data.address}`])
        setPlayerAddress(data.address)
        setStage(stage + 1)
        const response = await fetch('/api/faucet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (response.status === 200 || response.status === 504) {
            const text = t('sentusdc')
            setAzadText([...azadText, `${data.address}`, text])
            setStage(3)

        }
        else {
            if (response.status === 423) {
                const text = t('haveusdc')
                setAzadText([...azadText, `${data.address}`, text])
                setStage(3)
            }
            else {
                const text = t('networkissues')
                setAzadText([...azadText, `${data.address}`, text])
                setStage(99)
            }
        }
    }

    return (
        <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fillRule="nonzero" d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z" />
                    </svg>
                </span>
                <form onSubmit={sendAddress} >
                    <input type="text"
                        id="address"
                        name="address"
                        required
                        minLength={34}
                        maxLength={34}
                        autoComplete="off"
                        className="w-full py-2 px-10 text-clip text-sm bg-white border border-transparent appearance-none rounded-tg placeholder-gray-800 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                        placeholder="Message..."
                        disabled={stage === 2}
                    />
                    <button
                        className="absolute inset-y-0 right-0 flex items-center pr-6" disabled={stage === 4}>
                        {stage === 1 &&
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fillRule="nonzero" d="M6.43800037,12.0002892 L6.13580063,11.9537056 C5.24777712,11.8168182 4.5354688,11.1477159 4.34335422,10.2699825 L2.98281085,4.05392998 C2.89811796,3.66698496 2.94471512,3.2628533 3.11524595,2.90533607 C3.53909521,2.01673772 4.60304421,1.63998415 5.49164255,2.06383341 L22.9496381,10.3910586 C23.3182476,10.5668802 23.6153089,10.8639388 23.7911339,11.2325467 C24.2149912,12.1211412 23.8382472,13.1850936 22.9496527,13.6089509 L5.49168111,21.9363579 C5.13415437,22.1068972 4.73000953,22.1534955 4.34305349,22.0687957 C3.38131558,21.8582835 2.77232686,20.907987 2.9828391,19.946249 L4.34336621,13.7305987 C4.53547362,12.8529444 5.24768451,12.1838819 6.1356181,12.0469283 L6.43800037,12.0002892 Z M5.03153725,4.06023585 L6.29710294,9.84235424 C6.31247211,9.91257291 6.36945677,9.96610109 6.44049865,9.97705209 L11.8982869,10.8183616 C12.5509191,10.9189638 12.9984278,11.5295809 12.8978255,12.182213 C12.818361,12.6977198 12.4138909,13.1022256 11.8983911,13.1817356 L6.44049037,14.0235549 C6.36945568,14.0345112 6.31247881,14.0880362 6.29711022,14.1582485 L5.03153725,19.9399547 L21.6772443,12.0000105 L5.03153725,4.06023585 Z" />
                            </svg>
                        }
                        {stage === 2 &&
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TelegramPaste