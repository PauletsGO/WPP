document.addEventListener('DOMContentLoaded', () => {
            const payrollForm = document.getElementById('payroll-form');
            const mainPage = document.getElementById('main-page');
            const displayPage = document.getElementById('display-page');

            const formatCurrency = (number) => {
                return number.toFixed(2);
            };
            payrollForm.addEventListener('submit', (event) => {
                event.preventDefault();

                const idNumber = document.getElementById('idNumber').value;
                const lastName = document.getElementById('lastName').value;
                const firstName = document.getElementById('firstName').value;
                const middleName = document.getElementById('middleName').value;
                const position = document.getElementById('position').value;
                
                const daysWorked = parseFloat(document.getElementById('daysWorked').value);
                const ratePerDay = parseFloat(document.getElementById('ratePerDay').value);
                
                const fullName = `${lastName}, ${firstName} ${middleName}`;

                const grossPay = ratePerDay * daysWorked;

                const SSS_RATE = 0.05;
                const PAGIBIG_RATE = 0.03;
                const PHILHEALTH_RATE = 0.02;
                const TAX_RATE = 0.05;

                const sssDeduction = grossPay * SSS_RATE;
                const pagibigDeduction = grossPay * PAGIBIG_RATE;
                const philhealthDeduction = grossPay * PHILHEALTH_RATE;
                const taxDeduction = grossPay * TAX_RATE;

                const totalDeductions = sssDeduction + pagibigDeduction + philhealthDeduction + taxDeduction;

                const netPay = grossPay - totalDeductions;

                document.getElementById('output-id-number').textContent = idNumber;
                document.getElementById('output-employee-name').textContent = fullName;
                document.getElementById('output-position').textContent = position;
                document.getElementById('output-rate-per-day').textContent = formatCurrency(ratePerDay);
                document.getElementById('output-days-worked').textContent = daysWorked;
                
                document.getElementById('output-gross-pay').textContent = formatCurrency(grossPay);
                document.getElementById('output-sss').textContent = formatCurrency(sssDeduction);
                document.getElementById('output-pagibig').textContent = formatCurrency(pagibigDeduction);
                document.getElementById('output-philhealth').textContent = formatCurrency(philhealthDeduction);
                document.getElementById('output-tax').textContent = formatCurrency(taxDeduction);
                
                document.getElementById('output-total-deductions').textContent = formatCurrency(totalDeductions);
                document.getElementById('output-net-pay').textContent = formatCurrency(netPay);


                mainPage.classList.add('hidden');
                displayPage.classList.remove('hidden');
            });
 });