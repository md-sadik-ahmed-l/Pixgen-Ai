import PhotoCard from "@/components/PhotoCard";
import Link from "next/link";


const HomePage = async () => {
  const res = await fetch("https://pixgen-eta.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div>

      <h1 className="font-bold text-4xl mt-10 mb-5">Top Generations</h1>

      <div className="grid grid-cols-4 gap-5">

        {topPhotos.map((photo) => (

          <PhotoCard key={photo.id} photo={photo}></PhotoCard>

        ))}
        
      </div>

      <div className="flex justify-center items-center "><Link href={"/all-photos"} className="border mt-10 text-xl font-medium py-3 px-9 rounded-full shadow-md bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 text-white">All Photos</Link></div>

    </div>
  );
};

export default HomePage;
