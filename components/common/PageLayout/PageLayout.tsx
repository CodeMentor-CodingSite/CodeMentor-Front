import React from 'react';

function PageLayout({children}:{children:React.ReactNode}) {
    return (
        <section className='my-16'>
            {children}
        </section>
    );
}

export default PageLayout;