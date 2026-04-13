import Image from "next/image";
// import Navbar from "./Navbar/page";
import Banner from "./banner/page";
import Count from "./Card/page";
// import CardData from "./CardDataApi/page";
import CardApi from "./CardDataApi/page";

export default function Home() {
  return (
<>
<Banner></Banner>
<Count></Count>
<CardApi></CardApi>

</>
  );
}
