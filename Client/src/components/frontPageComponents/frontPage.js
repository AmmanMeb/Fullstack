import './frontPage.scss';
import React, { useState } from 'react';
import { Navigate } from "react-router-dom"

function FrontPage() {
    const [doRedirect, setDoRedirect] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault()
        return setDoRedirect(true);
    }
    if (doRedirect) return <Navigate to="/SubmitPage"/>;
        return (
            <section>
                <div>
                    <button class = "button" onClick = {onSubmit}>Submit</button>
                </div>
            </section>
        );
    }

export default FrontPage