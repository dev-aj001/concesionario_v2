import Layout from "../layout";
//import { Image } from "@nextui-org/react";
import Carousel from "../components/Carousel";
import MyDetailBar from "../components/MyDetailBar";

function HomePage() {
    return (
        <Layout>
            <MyDetailBar />
            <div className="bg-slate-600 flex flex-col self-center items-center h-[1600px] xl:w-[1280px] w-full">
                <div className="w-full">
                    <Carousel className/>
                </div>
                
            </div>
        </Layout>
    ); s
}

export default HomePage