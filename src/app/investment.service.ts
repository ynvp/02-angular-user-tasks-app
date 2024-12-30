import { Injectable, signal } from '@angular/core';
import { InvestmentResults } from './investment-results/investment-results.model';
import { InvestmentInput } from './investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    resultsData = signal<InvestmentResults[] | undefined>(undefined);
    calculateInvestmentResults(data: InvestmentInput) {
        console.log(data);
        const annualData = [];
        const {
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration,
        } = data; // destructuring input data

        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear =
                investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested:
                    initialInvestment + annualInvestment * year,
            });
        }

        this.resultsData.set(annualData);
    }
}
