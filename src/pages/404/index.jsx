import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <section className="d-flex flex-column align-items-center justify-content-center cx_bg-drawing postion-relative w-100 h-100">
                <div className="cx_error-404">
                    <h1 className="text-white">Oops!</h1>
                    <p className="text-light">Sorry, an unexpected error has occurred.</p>
                    <p className="text-light mb-4">
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <Link to="/" className="btn btn-lg btn-light">Visit Our Homepage</Link>
                </div>
            </section>
        </>
    );
}