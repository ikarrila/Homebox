import Image from "next/image";
import Description from '../../components/Description';
import WhyUsDescription from "../../components/WhyUsDescription";

export default function Home() {
  return (
    <div>
      <Description />
      <WhyUsDescription />
    </div>
  );
}
