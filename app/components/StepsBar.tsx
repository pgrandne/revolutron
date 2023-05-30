'use client';

import 'react-toastify/dist/ReactToastify.css';
import { useLocale, useTranslations } from 'next-intl';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const Bullet = () => (
  <div className="w-10 h-10 mx-auto flex items-center">
    <div className="z-50 w-6 h-6 bg-green-400 rounded-full text-lg text-white flex items-center">
    </div>
  </div>
)

const Validated = () => (
  <div className="w-10 h-10 mx-auto flex">
    <div className="z-50 w-10 h-10 bg-green-400 rounded-full text-lg text-white flex items-center">
      <span className="text-center text-white w-full">
        <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
        </svg>
      </span>
    </div>
  </div>
)

const Wait = () => (
  <div className="w-10 h-10 mx-auto flex">
    <div className="z-50 w-10 h-10 mx-auto bg-white rounded-full text-lg text-white flex items-center">
      <span className="text-center text-gray-600 w-full">
        <svg className="animate-pulse w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
)

const Lock = () => (
  <div className="w-10 h-10 mx-auto flex">
    <div className="z-50 w-10 h-10 mx-auto bg-white rounded-full text-lg text-white flex items-center">
      <span className="text-center text-gray-600 w-full">
        <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
)

export const StepsBar = ({ transactionStatus }: {
  transactionStatus: {
    loadingApprove: boolean
    approve: boolean
    loadingDeposit: boolean
    deposit: boolean
  }
}) => {
  const t = useTranslations('BailTransaction')

  return (
    <div className="w-full py-6">
      <div className="flex">
        <div className="w-1/3">
          <div className="relative mb-2">
            <div className="absolute w-full h-full flex items-center justify-end">
              <div className="bg-gray-200 w-1/2 h-2">
                {!transactionStatus.loadingApprove && !transactionStatus.approve ? '' : <div className="w-full bg-green-400 py-1" />}
              </div>
            </div>
            <Bullet />
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative mb-2">
            <div className="absolute w-full h-full flex items-center">
              <div className="bg-gray-200 w-full h-2">
                {transactionStatus.loadingDeposit || transactionStatus.deposit ? <div className="w-full bg-green-400 py-1" /> : (transactionStatus.approve ? <div className="w-1/2 bg-green-400 py-1" /> : '')}
              </div>
            </div>
            {transactionStatus.approve ? <Validated /> : (transactionStatus.loadingApprove ? <Wait /> : <Lock />)}
          </div>
          <div className="text-xs text-center md:text-base">
            {!transactionStatus.approve && !transactionStatus.loadingApprove ? t('waitApprove') : (!transactionStatus.approve ? t('approving') : t('approved'))}
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative mb-2">
            <div className="absolute w-full h-full flex items-center">
              <div className="bg-gray-200 w-1/2 h-2">
                {transactionStatus.deposit ? <div className="w-full bg-green-400 py-1" /> : ''}
              </div>
            </div>
            {transactionStatus.deposit ? <Validated /> : (transactionStatus.loadingDeposit ? <Wait /> : <Lock />)}
          </div>
          <div className="text-xs text-center md:text-base">
            {!transactionStatus.deposit && !transactionStatus.loadingDeposit ? t('waitPay') : (!transactionStatus.deposit ? t('paying') : t('payment'))}
          </div>
        </div>
      </div>
    </div>
  )
}