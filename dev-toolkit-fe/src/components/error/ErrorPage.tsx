import { useRouteError } from "react-router-dom";

interface ErrorPageProps {
    statusText?: string;
    message?: string;
}

const ErrorBoundaryHandlerForNotFound = () => {
        const error = useRouteError() as ErrorPageProps;
        console.log(error);

        return (
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            );
};

export default ErrorBoundaryHandlerForNotFound;