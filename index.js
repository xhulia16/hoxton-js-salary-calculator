const grossSalary=500
const employeeContribution=0.05*grossSalary
console.log("employee Contribution is", employeeContribution)
const taxableAmount=grossSalary-employeeContribution
console.log("Taxable amount is", taxableAmount)
const taxUnder250Eur=6.8
const taxUnder450Eur=16
const taxAbove450=2.5
const totalTaxes=taxUnder250Eur + taxUnder450Eur + taxAbove450
const netSalary=taxableAmount-totalTaxes