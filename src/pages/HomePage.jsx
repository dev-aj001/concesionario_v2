import Layout from "../layout";
//import { Image } from "@nextui-org/react";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import MyDetailBar from "../components/MyDetailBar";

function HomePage() {
    return (
        <Layout>
            <MyDetailBar/>
            <div className="flex flex-col self-center items-center h-[1600px] xl:w-[1600px] w-full">
                <div className="w-full">
                    <Carousel />
                </div>
                    
                <div className="w-[80%] pt-8">
                    <Carousel2 />
                </div>


                
            </div>
        </Layout>
    ); s
}

export default HomePage