import calculatePrice from '../frontend/components/calculatePrice';

describe('calculatePrice', () => {
  it('executes without crashing', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      standard: "Studio (standard)",
      premium: "Studio (premium)"
    };
    
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
    
    // Check if the function was called
    expect(mockSetPriceOfTheBill).toHaveBeenCalled();
  });

  it('sets the correct price for standard studio', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      standard: "Studio (standard)"
    };

    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });

    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(199.99);
  });

  it('sets the correct price for premium studio', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      premium: "Studio (premium)"
    };

    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });

    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(299.99);
  });

  it('sets the correct price for standard 1 Bedroom', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      standard: "1 Bedroom (standard)"
    };
  
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
  
    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(299.99);
  });
  
  it('sets the correct price for premium 1 Bedroom', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      premium: "1 Bedroom (premium)"
    };
  
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
  
    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(399.99);
  });
  
  it('sets the correct price for standard 2 Bedroom', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      standard: "2 Bedroom (standard)"
    };
  
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
  
    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(499.99);
  });
  
  it('sets the correct price for premium 2 Bedroom', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      premium: "2 Bedroom (premium)"
    };
  
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
  
    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(599.99);
  });
  
  it('sets the correct price for standard 3 Bedroom', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      standard: "3 Bedroom (standard)"
    };
  
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
  
    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(699.99);
  });
  
  it('sets the correct price for premium 3 Bedroom', () => {
    const mockSetPriceOfTheBill = jest.fn();
    const ShortPackagesData = {
      premium: "3 Bedroom (premium)"
    };
  
    calculatePrice({ isShort: true, setPriceOfTheBill: mockSetPriceOfTheBill, ShortPackagesData });
  
    // Check if the function was called with the correct price
    expect(mockSetPriceOfTheBill).toHaveBeenCalledWith(799.99);
  });
  
});