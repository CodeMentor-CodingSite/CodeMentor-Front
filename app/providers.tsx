'use client';

import {NextUIProvider} from '@nextui-org/react';
import {useRouter} from 'next/navigation';
import {ThemeProvider} from 'next-themes';
import {RecoilRoot} from "recoil";

export default function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <RecoilRoot>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
            </ThemeProvider>
        </RecoilRoot>
    );
}
