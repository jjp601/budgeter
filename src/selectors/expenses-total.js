export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((accum, value) => {
            return accum + value;
        }, 0);
}