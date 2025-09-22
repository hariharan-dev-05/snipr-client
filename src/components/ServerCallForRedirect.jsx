import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { redirectBack } from "../api/index";

const ServerCallForRedirect = () => {
    const { id } = useParams();
    console.log("Redirecting to server call with id:", id);
    useEffect(() => {
        (async function () {
            const data = await redirectBack(id);
            window.location.href = data.originalUrl;
        })();
    }, []);
    return <div>Redirecting...</div>;
};

export default ServerCallForRedirect;