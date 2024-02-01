import React from 'react';
import PageLayout from "@/components/common/PageLayout";

function SignUpLayout({children}:{children:React.ReactNode}) {
    return (
        <PageLayout>
            {children}
        </PageLayout>
    );
}

export default SignUpLayout;