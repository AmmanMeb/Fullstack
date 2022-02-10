import './frontPage.scss';

function FrontPage() {
    const [doRedirect, setDoRedirect] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault()
        return setDoRedirect(true);
    }
    if (doRedirect) return 
        return (
            <section>
                <div>
                    <button class = "button" onClick = {onSubmit}>Submit</button>
                </div>
            </section>
        );
    }

export default FrontPage