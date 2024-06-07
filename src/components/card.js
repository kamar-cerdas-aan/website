import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function LogCard({log, time, action}) {
  return (
    <Card className="w-96">
      <CardHeader>
        <p className="text-md font-bold">{log}</p>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col text-sm w-48">
                <p className="font-bold">At</p>
                <p>{time}</p>
            </div>
            <div className="flex flex-col text-sm w-48">
                <p className="font-bold">Lamp Action</p>
                <p>{action}</p>
            </div>
        </div>
      </CardBody>
    </Card>
  );
}
