import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { InvestmentService } from '../investment.service';

@Component({
    selector: 'app-investment-results',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css',
    inputs: ['results'],
})
export class InvestmentResultsComponent {
    investmentService = inject(InvestmentService);

    results = computed(() => this.investmentService.resultsData());
}
