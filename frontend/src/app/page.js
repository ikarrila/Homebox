import Image from "next/image";
import Description from '../../components/Description';
import WhyUsDescription from "../../components/WhyUsDescription";
import CustomerReviews from "../../components/CustomerReviews";

export default function Home() {
  return (
    <div>
      <Description />
      <CustomerReviews />
      <WhyUsDescription />
    </div>
  );
}
