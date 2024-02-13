'use client';

import React, {Fragment, useEffect} from 'react';
import {useRecoilValue, useResetRecoilState} from "recoil";
import {Transition} from "@headlessui/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {RiCloseFill} from "@react-icons/all-files/ri/RiCloseFill";
import globalSnackbarStateStore from "@/store/GlobalSnackbarStateStore";
import {type SnackbarType} from "@/utils/type";
import {classNames} from "@/utils";

function Snackbar() {
    const state = useRecoilValue(globalSnackbarStateStore);
    const resetSnackbar = useResetRecoilState(globalSnackbarStateStore);

    const getTypeColor = (type: SnackbarType) => {
        switch (type) {
            case "ERROR":
                return "bg-red-500 text-white";
            case "SUCCESS":
                return "bg-green-600 text-white";
            case "INFO":
                return "bg-blue-500 text-white";
            default:
                return "bg-white text-black";
        }
    }

    useEffect(() => {
        if (state.show) {
            const timer = setTimeout(() => {
                resetSnackbar();
                clearTimeout(timer);
            }, state?.duration !== null ? state?.duration : 5000);
        } else {
            resetSnackbar();
        }
    }, [state, resetSnackbar]);

    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Transition
                    show={state.show}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className={classNames("pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5", getTypeColor(state.type))}>
                        <div className="p-4">
                            <div className="flex items-center">
                                <div className="flex w-0 flex-1 justify-between">
                                    <p className="w-0 flex-1 text-sm mobile:text-xs font-medium">{state.message}</p>
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md focus:outline-none"
                                        onClick={resetSnackbar}
                                    >
                                        <span className="sr-only">Close</span>
                                        <RiCloseFill className="h-5 w-5" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}

export default Snackbar;