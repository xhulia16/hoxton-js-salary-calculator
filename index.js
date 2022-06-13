const grossSalary = 700
const employeeContribution = 0.05 * grossSalary
const taxableAmount = grossSalary - employeeContribution
if (grossSalary < 80) {
    netSalary = 0
} else {
    if (grossSalary < 250) {
        taxUnder250Eur = Math.max(0, (taxableAmount - 80) * 0.04)
    } else {
        taxUnder250Eur = 6.8
    }
    if (grossSalary < 450) {
        taxUnder450Eur = Math.max(0, (taxableAmount - 250) * 0.08)
    } else {
        taxUnder450Eur = 16
    }
    const taxAbove450Eur = Math.max(0, (taxableAmount - 450) * 0.1)
    const totalTaxes = taxUnder250Eur + taxUnder450Eur + taxAbove450Eur
    netSalary = taxableAmount - totalTaxes
}
console.log("your Net Salary is", netSalary, "euro")