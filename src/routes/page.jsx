import { useParams } from "react-router-dom";

import Homepage from "./homepage";
import ShopPage from "./shop page";

const Page = () => {
    const { name } = useParams();

    return (
        <div>
            <h2>Pages:</h2>
            {name === "homepage" ? (
                <Homepage />
            ) : name === "shoppage" ? (
                <ShopPage />
            ) : null}
        </div>
    )
}