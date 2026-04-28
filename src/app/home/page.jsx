import PhotoCard from "@/components/PhotoCard";

const HomePage = async () => {
  const res = await fetch("https://pixgen-ai.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div>

      <h1>Top Generations</h1>

      <div>

        {topPhotos.map((photo) => (

          <PhotoCard key={photo.id} photo={photo}></PhotoCard>

        ))}
      </div>
      
    </div>
  );
};

export default HomePage;
