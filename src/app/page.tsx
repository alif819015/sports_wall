import SportsCard from "@/components/Card/SportsCard";
import SportsCollection from "@/components/SportsCollection/SportsCollection";

const sportsData: {
  imageUrl: string;
  title: string;
  totalEvents: number;
  sportsName: string;
}[] = [
  {
    imageUrl: "https://i.ibb.co/5hbf5zL/Mask-group.png",
    title: "Sacramento River Cats",
    totalEvents: 20,
    sportsName: "baseball",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Las Vegas Aviators",
    totalEvents: 15,
    sportsName: "baseball",
  },

  {
    imageUrl: "https://i.ibb.co/yPqrnMb/Mask-group-2.png",
    title: "new jersey devils",
    totalEvents: 30,
    sportsName: "hockey",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Las Vegas Aviators",
    totalEvents: 25,
    sportsName: "Baseball",
  },
  {
    imageUrl: "https://i.ibb.co/br3xqyj/unnamed-1-1.png",
    title: "Advertisement title",
    totalEvents: 18,
    sportsName: "baseball",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Post 6",
    totalEvents: 22,
    sportsName: "Cricket",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Post 7",
    totalEvents: 17,
    sportsName: "Rugby",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Post 8",
    totalEvents: 28,
    sportsName: "Golf",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Post 9",
    totalEvents: 21,
    sportsName: "Swimming",
  },
  {
    imageUrl: "https://i.ibb.co/RPJXKsL/Mask-group-1.png",
    title: "Post 10",
    totalEvents: 16,
    sportsName: "Cycling",
  },
];

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Sports</h1>
      <ul className="border-b-4 border-[#738FFF]  w-20 mb-6 mt-2"></ul>
      <div className="grid grid-cols-5 gap-[14px] text-white">
        {sportsData.map((data, index) => (
          <SportsCard
            key={index}
            imageUrl={data.imageUrl}
            title={data.title}
            totalEvents={data.totalEvents}
            sportsName={data.sportsName}
          />
        ))}
      </div>
      <button className="bg-[#2C9CF0] flex mx-auto text-sm font-medium text-white rounded-sm px-[30px] py-2.5 mt-12">
        See More
      </button>

      <SportsCollection />
    </div>
  );
};

export default HomePage;
