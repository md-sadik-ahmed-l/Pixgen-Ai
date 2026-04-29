import PhotoCard from "@/components/PhotoCard";

const AllPhotos = async () => {
  const res = await fetch("https://pixgen-eta.vercel.app/data.json");
  const allPhotos = await res.json();

  return (
    <div className="my-10">

      <h1 className="text-2xl md:text-3xl font-bold my-5">All Photos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">

        {allPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}

      </div>

    </div>
  );
};

export default AllPhotos;
