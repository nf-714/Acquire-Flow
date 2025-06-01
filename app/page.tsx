import Globe3D from "@/components/hero";
import { Navigation } from "@/components/landing/navigation/navigation.component";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="">
        <Globe3D />
      </div>
    </>
  );
}
