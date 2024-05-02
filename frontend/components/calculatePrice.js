const calculatePrice = ({ isShort, setPriceOfTheBill: setPriceOfTheBill, ShortPackagesData }) => {
    if (!ShortPackagesData) return setPriceOfTheBill(0);
    if (isShort) {
        if (ShortPackagesData.standard) {
            if (ShortPackagesData.standard === "Studio (standard)") {
                setPriceOfTheBill(199.99);
            }
            if (ShortPackagesData.standard === "1 Bedroom (standard)") {
                setPriceOfTheBill(299.99);
            }
            if (ShortPackagesData.standard === "2 Bedrooms (standard)") {
                setPriceOfTheBill(499.99);
            }
            if (ShortPackagesData.standard === "3 Bedrooms (standard)") {
                setPriceOfTheBill(699.99);
            }
        }
        if (ShortPackagesData.premium) {
            if (ShortPackagesData.premium === "Studio (premium)") {
                setPriceOfTheBill(299.99);
            }
            if (ShortPackagesData.premium === "1 Bedroom (premium)") {
                setPriceOfTheBill(399.99);
            }
            if (ShortPackagesData.premium === "2 Bedrooms (premium)") {
                setPriceOfTheBill(599.99);
            }
            if (ShortPackagesData.premium === "3 Bedrooms (premium)") {
                setPriceOfTheBill(799.99);
            }
        }
    }
    if (!isShort) {
        setPriceOfTheBill(200);
    };
}
export default calculatePrice;