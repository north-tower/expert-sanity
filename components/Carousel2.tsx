import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/sanity.client";



const query = groq`
*[_type == "clients"]
`;

interface clients {
  image: string;
}

export function Carousel2() {
  const [images, setImages] = React.useState<clients[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const initialImage = await client.fetch(query);
        console.log("Fetched image:", initialImage);
        setImages(initialImage);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, []);

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
        {images.map((mainImage, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 ">
              <Card className="rounded-2xl">
                <CardContent className="flex items-center justify-center p-3 " style={{ height: '90px' }}>
                  <img
                    src={urlFor(mainImage).url()}
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
