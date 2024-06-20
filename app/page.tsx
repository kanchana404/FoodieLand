import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 bg-gray-100">
      <section className="w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 p-9 relative">
          <div className="relative">
            <Image 
              src="/FeaturedRecipe1.png"
              alt="logo"
              width="1000"
              height="1000"
              className="w-full h-auto"
            />
            <div className="text-overlay p-4 md:p-8 -mt-20"> {/* Adjust the negative margin as needed */}
              <div className="label-overlay inline-flex items-center bg-white text-black px-3 py-1 rounded-full shadow-md mb-4">
                <Image 
                  src="/lalla.png" // Make sure the path is correct
                  alt="icon"
                  width="24"
                  height="24"
                />
                <span className="ml-2">Hot Recipes</span>
              </div>
              <h1 className="text-4xl md:text-6xl mt-4">
                <b>Spicy delicious <br /> chicken wings</b>
              </h1>
              <p className="mt-4 text-gray-700 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliquat enim ad minim 
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="label inline-flex items-center bg-gray-200 text-black px-3 py-1 rounded-full">
                  <Image 
                    src="/watch.png" // Make sure the path is correct
                    alt="timer"
                    width="18"
                    height="18"
                  />
                  <span className="ml-2">30 Minutes</span>
                </div>
                <div className="label inline-flex items-center bg-gray-200 text-black px-3 py-1 rounded-full">
                  <Image 
                    src="/spoon.png" // Make sure the path is correct
                    alt="chicken"
                    width="18"
                    height="18"
                  />
                  <span className="ml-2">Chicken</span>
                </div>
              </div>
              <div className="mt-20 flex items-center justify-between">
                <div className="flex items-center">
                  <Image 
                    src="/profile.png" // Make sure the path is correct
                    alt="John Smith"
                    width="50"
                    height="50"
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">John Smith</p>
                    <p className="text-sm text-gray-600">15 March 2024</p>
                  </div>
                </div>
                <Button className="bg-black text-white rounded-full px-4 py-2">
                  View Recipes
                </Button>
              </div>
            </div>
          </div>
          <Image 
            src="/FeaturedRecipe2.png"
            alt="logo"
            width="1000"
            height="1500"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center mb-40">
          <Image 
            src="/Badge.png"
            alt="logo"
            width="130"
            height="130"
            className="mb-40"
          />
        </div>
      </section>
    </main>
  );
}
