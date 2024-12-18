import { useEffect, useState } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import useAutos from "../hooks/useAutos";

export default function () {

    const {autos} = useAutos;

    const list = autos;

    return (
        <div className="w-[300px] h-[800px] bg-slate-300">
            <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {list.map((item, index) => (
                    /* eslint-disable no-console */
                    <Card radius="sm" key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={item.modelo}
                                className="w-full object-cover h-[140px]"
                                radius="sm"
                                shadow="sm"
                                src={item.images[0]}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.marca}</b>
                            <p className="text-default-500">{item.precio}</p>

                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}