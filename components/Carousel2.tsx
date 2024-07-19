import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carousel2() {
  // Example usage of Carousel2 with dynamic data
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm "
    >
      <CarouselContent className="">
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 ">
              <Card className="rounded-2xl">
                <CardContent className="flex items-center justify-center p-3 " style={{ height: '90px' }}>
                  <img
                    src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Uncomment these lines if you want to add navigation buttons */}
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}