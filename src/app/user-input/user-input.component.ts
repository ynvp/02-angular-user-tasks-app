import { Component, EventEmitter, signal, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
    selector: 'app-user-input',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css',
})
export class UserInputComponent {
    initialInvestment = signal('0');
    annualInvestment = signal('0');
    expectedReturn = signal('5');
    duration = signal('10');

    investmentService = inject(InvestmentService);

    onSubmit() {
        this.investmentService.calculateInvestmentResults({
            initialInvestment: +this.initialInvestment(),
            annualInvestment: +this.annualInvestment(),
            expectedReturn: +this.expectedReturn(),
            duration: +this.duration(),
        });
        this.initialInvestment.set('0');
        this.annualInvestment.set('0');
        this.expectedReturn.set('0');
        this.duration.set('0');
    }
}
