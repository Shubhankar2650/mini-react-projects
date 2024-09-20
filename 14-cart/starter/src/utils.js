export const getTotal = (cart) => {
    let totalItems = 0;
    let totalCost = 0;
    for (let { price, amount } of cart.values()) {
        totalItems += amount;
        totalCost += amount * price;
    }
    return { totalCost, totalItems };
}