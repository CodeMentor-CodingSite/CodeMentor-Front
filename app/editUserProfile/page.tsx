import React from 'react';
import EditUserProfile from "@/containers/editUserProfile";

function EditUserProfilePage() {

    const data = {
        userId: 'test9864',
        email: 'test@test.com',
        imgSrc: null
    }

    return (
        <section className='relative shadow-2xl dark:bg-[#121212]'>
            <EditUserProfile data={data}/>
        </section>
    );
}

export default EditUserProfilePage;