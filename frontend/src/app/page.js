import Image from "next/image";
import Description from '../../components/Description';
import CustomerReviews from "../../components/CustomerReviews";
import RentingWithUs from "../../components/RentingWithUs";

export default function Home() {
  return (
    <div>
      <Description />
      <CustomerReviews />
      <RentingWithUs />
    </div>
  );
}
