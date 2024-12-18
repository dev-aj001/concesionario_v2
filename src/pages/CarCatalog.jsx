import Layout from "../layout";
import MyDetailBar from "../components/MyDetailBar";
import NextGrid from "../components/NextGrid";
import DynamicGrid from "../components/DynamicGrid";
import { useState } from "react";

function HomePage() {

    const [cards, setCards] = useState([
        { image: "/imgs/img1.jpg", title: "Card 1", description: "This is card 1" },
        { image: "/imgs/img2.jpg", title: "Card 2", description: "This is card 2" },
        { image: "/imgs/img3.jpg", title: "Card 3", description: "This is card 3" },
    ]);

    return (
        <Layout position={"static"} shouldHideOnScroll={false}>
            <MyDetailBar shouldHideOnScroll={false} />
            <div className="flex flex-col items-center xl:w-full w-full bg-slate-50">
                <div className="w-[95%] xl:w-[1250px] mt-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        {/* Primer elemento ocupa 1 columna */}
                        <div className="col-span-1 w-full h-[200px] lg:h-[600px] bg-white rounded-lg shadow-md">
                            {/* Contenido del primer elemento */}
                        </div>
                        {/* Segundo elemento ocupa 4 columnas */}
                        <div className="col-span-1 lg:col-span-4 w-full h-[1200px] bg-white rounded-lg shadow-md">
                            {/* <NextGrid /> */}
                            <DynamicGrid cards={cards} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
